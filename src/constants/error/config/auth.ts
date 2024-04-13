import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { AUTH_ERROR } from '../errors/auth';

export const authErrorConfig: ErrorConfig<AUTH_ERROR> = {
    [AUTH_ERROR.INVALID_USER]: {
        message: 'Invalid user',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'INVALID_USER_ERROR',
    },
    [AUTH_ERROR.INVALID_USER_ID]: {
        message: 'Invalid user id ',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'INVALID_USER_ERROR',
    },
    [AUTH_ERROR.TOKEN_EXPIRED]: {
        message: 'Token Expired',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: `TOKEN_EXPIRED_ERROR`,
    },
    [AUTH_ERROR.TOKEN_REQUIRED]: {
        message: 'Token required',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'TOKEN_REQUIRED_ERROR',
    },
    [AUTH_ERROR.AUTH_INVALID_REFRESH_TOKEN]: {
        message: 'Invalid refresh token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'AUTH_INVALID_REFRESH_TOKEN_ERROR',
    },
    [AUTH_ERROR.AUTH_INVALID_ACCESS_TOKEN]: {
        message: 'Invalid access token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'AUTH_INVALID_ACCESS_TOKEN_ERROR',
    },
    [AUTH_ERROR.USER_ALREADY_EXIST]: {
        message: 'User already exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: 'USER_ALREADY_EXIST_ERROR',
    },
    [AUTH_ERROR.USER_DOES_NOT_EXIST]: {
        message: 'User Does not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_DOES_NOT_EXIST_ERROR',
    },
    [AUTH_ERROR.LOG_IN_USER_DOES_NOT_EXIST]: {
        message: 'Don’t have an account? Sign up ',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'LOG_IN_USER_DOES_NOT_EXIST_ERROR',
    },
    [AUTH_ERROR.INCORRECT_PASSWORD]: {
        message: 'Incorrect password. Please try again.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'INCORRECT_PASSWORD_ERROR',
    },
    [AUTH_ERROR.INCORRECT_OTP]: {
        message: 'Incorrect OTP',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: 'INCORRECT_OTP_ERROR',
    },
    [AUTH_ERROR.CHANGE_PASSWORD_USING_FACEBOOK]: {
        message:
            'You signed up using facebook. Change password over there in case you forgot',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'CHANGE_PASSWORD_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.CHANGE_PASSWORD_USING_GOOGLE]: {
        message:
            'You signed up using Google. Change password over there in case you forgot',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'CHANGE_PASSWORD_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.CHANGE_PASSWORD_USING_APPLE]: {
        message:
            'You signed up using Apple. Change password over there in case you forgot',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'CHANGE_PASSWORD_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.LOGIN_USING_FACEBOOK]: {
        message: 'You signed up using facebook. Login Using FaceBook',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'LOGIN_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.LOGIN_USING_GOOGLE]: {
        message: 'You signed up using Google. Login Using Google',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'LOGIN_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.LOGIN_USING_APPLE]: {
        message: 'You signed up using Apple. Login Using Apple',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'LOGIN_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.LOGIN_USING_CUSTOM]: {
        message: 'You signed up using Email. Login Using Email and Password',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'LOGIN_USING_THIRD_PART_ERROR',
    },
    [AUTH_ERROR.RESET_TOKEN_EXPIRED]: {
        message: 'Reset token has expired. Please request a new reset token.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'RESET_TOKEN_EXPIRED_ERROR',
    },
    [AUTH_ERROR.RESET_TOKEN_INVALID]: {
        message: 'Invalid Reset token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'RESET_TOKEN_INVALID_ERROR',
    },
    [AUTH_ERROR.OTP_TOKEN_INVALID]: {
        message: 'Invalid otp token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'OTP_TOKEN_INVALID_ERROR',
    },
    [AUTH_ERROR.ROLE_ID_IS_NOT_IN_USE]: {
        message: 'role is not in use',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'ROLE_ID_IS_NOT_IN_USE_ERROR',
    },
    [AUTH_ERROR.DATA_ALREADY_OCCUPIED]: {
        message: 'data already occupied',
        statusCode: HttpStatus.CONFLICT,
        errorCode: 'DATA_ALREADY_OCCUPIED_ERROR',
    },
    [AUTH_ERROR.USER_PROFILE_ALREADY_CREATED]: {
        message: 'User Profile Already created',
        statusCode: HttpStatus.CONFLICT,
        errorCode: 'USER_PROFILE_ALREADY_CREATED_ERROR',
    },
    [AUTH_ERROR.PLEASE_COMPLETE_PERVIOUS_STEPS]: {
        message: 'please complete previous step',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'PLEASE_COMPLETE_PERVIOUS_STEPS_ERROR',
    },
    [AUTH_ERROR.USERNAME_ALREADY_EXIT]: {
        message: 'Username already exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USERNAME_ALREADY_EXIT_ERROR',
    },
    [AUTH_ERROR.MOBILE_NUMBER_ALREADY_EXIT]: {
        message: 'mobile number already exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'MOBILE_NUMBER_ALREADY_EXIT_ERROR',
    },
    [AUTH_ERROR.BUSINESS_NAME_ALREADY_EXIT]: {
        message: 'business name already exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'BUSINESS_NAME_ALREADY_EXIT_ERROR',
    },
    [AUTH_ERROR.BUSINESS_NUMBER_ALREADY_EXIT]: {
        message: 'business number already exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'BUSINESS_NUMBER_ALREADY_EXIT_ERROR',
    },
    [AUTH_ERROR.USER_DOES_NOT_MATCH]: {
        message: 'user does not match',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_DOES_NOT_MATCH_ERROR',
    },
    [AUTH_ERROR.INCORRECT_PIN]: {
        message: 'Incorrect PIN. Please try again.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'INCORRECT_PIN_ERROR',
    },
    [AUTH_ERROR.NEW_PIN_CAN_NOT_BE_SAME_AS_OLD]: {
        message: 'New Pin Can not be same as Old Pin',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'NEW_PIN_CAN_NOT_BE_SAME_AS_OLD_ERROR',
    },
    [AUTH_ERROR.PIN_ALREADY_SET]: {
        message: 'pin already set up',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'PIN_ALREADY_SET_ERROR',
    },
    [AUTH_ERROR.EMAIL_ALREADY_EXIST]: {
        message: 'Email already exists',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'EMAIL_ALREADY_EXIST_ERROR',
    },
    [AUTH_ERROR.VERIFY_CURRENT_EMAIL_CHANGE_REQUEST]: {
        message: 'Verify Email Change Request from Current Email',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'VERIFY_CURRENT_EMAIL_CHANGE_REQUEST_ERROR',
    },
    [AUTH_ERROR.ONBOARDING_ALREADY_COMPLETED]: {
        message: 'onboarding already completed',
        statusCode: HttpStatus.CONFLICT,
        errorCode: 'ONBOARDING_ALREADY_COMPLETED_ERROR',
    },
    [AUTH_ERROR.NOT_AUTHORIZED_TO_ACCESS_OTHER_MEMBER_DETAILS]: {
        message: 'you are not authorized to access other member details',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'NOT_AUTHORIZED_TO_ACCESS_OTHER_MEMBER_DETAILS_ERROR',
    },
    [AUTH_ERROR.CANNOT_CHANGE_THE_STATUS_OF_ADMIN_AND_SUPER_ADMIN]: {
        message: 'cannot update status of admin and super admin',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'CANNOT_CHANGE_THE_STATUS_OF_ADMIN_AND_SUPER_ADMIN_ERROR',
    },
    [AUTH_ERROR.EMAIL_ALREADY_VERIFIED]: {
        message: 'Email Already Verified',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'EMAIL_ALREADY_VERIFIED_ERROR',
    },
    [AUTH_ERROR.BASIC_AUTH]: {
        message: 'Basic Authentication Failed',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: `BASIC_AUTH_ERROR`,
    },
    [AUTH_ERROR.BASIC_AUTH_REQUIRED]: {
        message: 'Basic Authentication Required',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: `BASIC_AUTH_REQUIRED_ERROR`,
    },
    [AUTH_ERROR.PLAN_DOES_NOT_EXIST]: {
        message: 'This plan does not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'PLAN_DOES_NOT_EXIST_ERROR',
    },
    [AUTH_ERROR.USER_DEACTIVATED]: {
        message: 'This user has been deactivated by admin',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_DEACTIVATED_ERROR',
    },
    [AUTH_ERROR.EMAIL_EXPIRED]: {
        message: 'This email has expired',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'EMAIL_EXPIRED_ERROR',
    },
    [AUTH_ERROR.WALLET_DOES_NOT_EXIST]: {
        message: 'Wallet does not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'WALLET_DOES_NOT_EXIST_ERROR',
    },
    [AUTH_ERROR.INSUFFICIENT_WALLET_BALANCE]: {
        message: 'Insufficient wallet balance',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'INSUFFICIENT_WALLET_BALANCE_ERROR',
    },
    [AUTH_ERROR.MEMBER_NOT_ALLOWED]: {
        message: 'Please enter valid credentials',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: 'MEMBER_NOT_ALLOWED_ERROR',
    },
    [AUTH_ERROR.SEQUELIZE_ERROR]: {
        message: 'sequelize error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errorCode: 'SEQELIZE_ERROR',
    },
};
