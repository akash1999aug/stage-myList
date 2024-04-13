import {
    isDateString,
    isEnum,
    isNotEmpty,
    isNumber,
    isString,
    isUUID,
} from 'class-validator';

export const Validators = {
    isUUID,
    isString,
    isNumber,
    isDateString,
    isEnum,
    isNotEmpty,
} as const;

export type AdditionalValidator = keyof typeof Validators;
