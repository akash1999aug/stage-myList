import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function CheckType(
    property?: string,
    validationOptions?: ValidationOptions,
) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'checkType',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const obj: any = args.object as any;
                    const arr = Object.keys(obj);
                    if (value == 'CUSTOMER_BUSINESS') {
                        if (!arr.includes('business')) {
                            return false;
                        }
                    } else {
                        delete obj['business'];
                    }

                    return true;
                },
                defaultMessage() {
                    return 'you type is business please provide the business object';
                },
            },
        });
    };
}
