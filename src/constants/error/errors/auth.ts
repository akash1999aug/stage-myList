export enum AUTH_ERROR {
    INVALID_USER = 'INVALID_USER',
    INVALID_USER_ID = 'INVALID_USER_ID',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
    TOKEN_REQUIRED = 'TOKEN_REQUIRED',
    BASIC_AUTH = 'BASIC_AUTH',
    BASIC_AUTH_REQUIRED = 'BASIC_AUTH_REQUIRED',
    AUTH_INVALID_REFRESH_TOKEN = 'AUTH_INVALID_REFRESH_TOKEN',
    AUTH_INVALID_ACCESS_TOKEN = 'AUTH_INVALID_ACCESS_TOKEN',
    USER_ALREADY_EXIST = 'USER_ALREADY_EXIST',
    INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
    USER_DOES_NOT_EXIST = 'USER_DOES_NOT_EXIST',
    INCORRECT_OTP = 'INCORRECT_OTP',
    CHANGE_PASSWORD_USING_FACEBOOK = 'CHANGE_PASSWORD_USING_FACEBOOK',
    CHANGE_PASSWORD_USING_GOOGLE = 'CHANGE_PASSWORD_USING_GOOGLE',
    CHANGE_PASSWORD_USING_APPLE = 'CHANGE_PASSWORD_USING_APPLE',
    LOGIN_USING_FACEBOOK = 'LOGIN_USING_FACEBOOK',
    LOGIN_USING_GOOGLE = 'LOGIN_USING_GOOGLE',
    LOGIN_USING_APPLE = 'LOGIN_USING_APPLE',
    LOGIN_USING_CUSTOM = 'LOGIN_USING_CUSTOM',
    RESET_TOKEN_EXPIRED = 'RESET_TOKEN_EXPIRED',
    RESET_TOKEN_INVALID = 'RESET_TOKEN_INVALID',
    OTP_TOKEN_INVALID = 'OTP_TOKEN_INVALID',
    ROLE_ID_IS_NOT_IN_USE = 'ROLE_ID_IS_NOT_IN_USE',
    DATA_ALREADY_OCCUPIED = 'DATA_ALREADY_OCCUPIED',
    USER_PROFILE_ALREADY_CREATED = 'USER_PROFILE_ALREADY_CREATED',
    PLEASE_COMPLETE_PERVIOUS_STEPS = 'PLEASE_COMPLETE_PERVIOUS_STEPS',
    USERNAME_ALREADY_EXIT = 'USERNAME_ALREADY_EXIT',
    MOBILE_NUMBER_ALREADY_EXIT = 'MOBILE_NUMBER_ALREADY_EXIT',
    BUSINESS_NAME_ALREADY_EXIT = 'BUSINESS_NAME_ALREADY_EXIT',
    BUSINESS_NUMBER_ALREADY_EXIT = 'BUSINESS_NUMBER_ALREADY_EXIT',
    USER_DOES_NOT_MATCH = 'USER_DOES_NOT_MATCH',
    INCORRECT_PIN = 'INCORRECT_PIN',
    NEW_PIN_CAN_NOT_BE_SAME_AS_OLD = 'NEW_PIN_CAN_NOT_BE_SAME_AS_OLD',
    PIN_ALREADY_SET = 'PIN_ALREADY_SET',
    EMAIL_ALREADY_EXIST = 'EMAIL_ALREADY_EXIST',
    VERIFY_CURRENT_EMAIL_CHANGE_REQUEST = 'VERIFY_CURRENT_EMAIL_CHANGE_REQUEST',
    ONBOARDING_ALREADY_COMPLETED = 'ONBOARDING_ALREADY_COMPLETED',
    NOT_AUTHORIZED_TO_ACCESS_OTHER_MEMBER_DETAILS = 'NOT_AUTHORIZED_TO_ACCESS_OTHER_MEMBER_DETAILS',
    CANNOT_CHANGE_THE_STATUS_OF_ADMIN_AND_SUPER_ADMIN = 'CANNOT_CHANGE_THE_STATUS_OF_ADMIN_AND_SUPER_ADMIN',
    EMAIL_ALREADY_VERIFIED = 'EMAIL_ALREADY_VERIFIED',
    PLAN_DOES_NOT_EXIST = 'PLAN_DOES_NOT_EXIST',
    USER_DEACTIVATED = 'USER_DEACTIVATED',
    EMAIL_EXPIRED = 'EMAIL_EXPIRED',
    LOG_IN_USER_DOES_NOT_EXIST = 'LOG_IN_USER_DOES_NOT_EXIST',
    WALLET_DOES_NOT_EXIST = 'WALLET_DOES_NOT_EXIST',
    INSUFFICIENT_WALLET_BALANCE = 'INSUFFICIENT_WALLET_BALANCE',
    MEMBER_NOT_ALLOWED = 'MEMBER_NOT_ALLOWED',
    SEQUELIZE_ERROR = 'SEQUELIZE_ERROR',
}
