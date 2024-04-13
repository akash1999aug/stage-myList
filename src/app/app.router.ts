import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MyListModule } from 'src/module/myList/myList.module';

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                MyListModule,
                RouterModule.register([
                    {
                        path: 'my-list',
                        module: MyListModule,
                    },
                ]),
            ],
        };
    }
}
