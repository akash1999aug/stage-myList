import { registerDecorator } from 'class-validator';

export function IsCustomPhoneNumber() {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isCustomPhoneNumber',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            //options: { message: 'Invalid phone number format' },
            validator: {
                validate(value: any) {
                    return /^d{10}$/.test(value);
                },
                defaultMessage() {
                    return 'Invalid phone number format';
                },
            },
        });
    };
}
