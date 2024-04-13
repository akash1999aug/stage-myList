import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationError } from 'class-validator';
import { AppModule } from './app/app.module';
import { DEFAULT_ERROR } from './constants/error/errors/default';
import { HttpExceptionWrapper } from './utils/error/error.http.wrapper';
import { IFieldError } from './utils/error/error.interface';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        // Getting configuration for app server
        const configService = app.get(ConfigService);
        const env: string = configService.get('app.env')!;
        const host: string = configService.get('app.http.host')!;
        const port: number = configService.get('app.http.port')!;
        const versioning: boolean = configService.get('app.versioning.on')!;
        const globalPrefix: string = configService.get('app.globalPrefix')!;

        // Setting validation pipe for DTO
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                transform: true,
                exceptionFactory: (validationErrors: ValidationError[]) => {
                    const getError = (
                        error: ValidationError[],
                        appendFieldName = '',
                    ): IFieldError[] => {
                        return error.reduce((value, error) => {
                            if (error.children?.length) {
                                const newError = getError(
                                    error.children,
                                    `${appendFieldName}${error.property}.`,
                                );
                                value = [...value, ...newError];
                            } else {
                                value = [
                                    ...value,
                                    {
                                        field: appendFieldName + error.property,
                                        error: Object.values(
                                            error.constraints,
                                        ).join(', '),
                                    },
                                ];
                            }
                            return value;
                        }, [] as IFieldError[]);
                    };

                    return new HttpExceptionWrapper(
                        DEFAULT_ERROR.DATA_VALIDATION_ERROR,
                        getError(validationErrors),
                    );
                },
            }),
        );

        // Setting logger for logging info and error
        const logger = new Logger();

        app.enableCors({ origin: '*' });

        // Setting global prefix for api end point
        app.setGlobalPrefix(globalPrefix);

        // Setting versioning for API
        if (versioning) {
            app.enableVersioning({
                type: VersioningType.URI,
                defaultVersion: ['1'],
                prefix: configService.get('app.versioning.prefix'),
            });
        }

        const config = new DocumentBuilder()
            .setTitle('Stage')
            .setDescription('Stage API description')
            .setVersion('1.0')
            .addTag('Stage')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/api/v1/user-swagger', app, document);

        // Starting server at given port and host id
        await app.listen(port, host);

        logger.log(`App Environment is ${env}`, 'App');
        logger.log(`App Versioning is ${versioning}`, 'App');
        logger.log(`Server running on ${await app.getUrl()}`, 'App');
    } catch (err) {
        console.log(err);
    }
}
bootstrap();
