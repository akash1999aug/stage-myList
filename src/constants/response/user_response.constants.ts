import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const responseName = {
    USER_CREATED: 'USER_CREATED',
    VIEW_PROFILE: 'VIEW_PROFILE',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    SIGN_UP: 'SIGN_UP',
    LOG_IN: 'LOG_IN',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
    VERIFY_EMAIL: 'VERIFY_EMAIL',
    RESET_PASSWORD: 'RESET_PASSWORD',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    RESEND_EMAIL: 'RESEND_EMAIL',
    VERIFY_LINK: 'VERIFY_LINK',
    LOG_OUT: 'LOG_OUT',
    UPDATE_STATUS: 'UPDATE_STATUS',
    CANCEL_MEMBERSHIP: 'CANCEL_MEMBERSHIP',
    VIEW_MEMBERSHIP: 'VIEW_MEMBERSHIP',
    CHANGE_EMAIL_REQUEST: 'CHANGE_EMAIL_REQUEST',
    EMAIL_CHANGE_APPROVED: 'EMAIL_CHANGE_APPROVED',
    EMAIL_UPDATED: 'EMAIL_UPDATED',
    LOAD_BITS: 'LOAD_BITS',
    SEARCH_USERNAME: 'SEARCH_USERNAME',
    ADMIN_TRANSACTION_HISTORY: 'ADMIN_TRANSACTION_HISTORY',
    ACTION_SUMMERY: 'ACTION_SUMMERY',
    NOTIFICATION_SETTING: 'Notification_setting',
    UPDATE_NOTIFICATION_SETTING: 'Update_notification_setting',
    NEXT_CHECKOUT_STATUS: 'NEXT_CHECKOUT_STATUS',
    SET_LOCATION: 'SET_LOCATION',
};

export const responseInfo: Record<string, IResponseStatusMessage> = {
    USER_CREATED: {
        message: 'User created successfully',
        statusCode: HttpStatus.CREATED,
    },
    UPDATE_PROFILE: {
        message: 'Profile updated successfully',
        statusCode: HttpStatus.OK,
    },
    VIEW_PROFILE: {
        message: 'your profile',
        statusCode: HttpStatus.OK,
    },
    SIGN_UP: {
        message: 'Sign up successful',
        statusCode: HttpStatus.CREATED,
    },
    LOG_IN: {
        message: 'Login successful',
        statusCode: HttpStatus.OK,
    },
    LOG_OUT: {
        message: 'Logout successfully',
        statusCode: HttpStatus.OK,
    },
    CHANGE_PASSWORD: {
        message: 'Password Matched successfully',
        statusCode: HttpStatus.OK,
    },
    FORGOT_PASSWORD: {
        message: 'Email sent successfully',
        statusCode: HttpStatus.OK,
    },
    VERIFY_EMAIL: {
        message: 'Email verified successfully',
        statusCode: HttpStatus.OK,
    },
    RESEND_EMAIL: {
        message: 'Email resent successfully',
        statusCode: HttpStatus.OK,
    },
    RESET_PASSWORD: {
        message: 'Password updated successfully',
        statusCode: HttpStatus.OK,
    },
    REFRESH_TOKEN: {
        message: 'Token generated successfully',
        statusCode: HttpStatus.OK,
    },
    VERIFY_LINK: {
        message: 'Link Verified successfully',
        statusCode: HttpStatus.OK,
    },
    UPDATE_STATUS: {
        message: 'status update successfully',
        statusCode: HttpStatus.OK,
    },
    CANCEL_MEMBERSHIP: {
        message: 'membership cancelled successfully',
        statusCode: HttpStatus.OK,
    },
    VIEW_MEMBERSHIP: {
        message: 'membership details',
        statusCode: HttpStatus.OK,
    },
    CHANGE_EMAIL_REQUEST: {
        message:
            'Change Email Request Successful. Go to Current Email to Approve.',
        statusCode: HttpStatus.OK,
    },
    EMAIL_CHANGE_APPROVED: {
        message:
            'Change Email Request Approved. Go To new email to change email.',
        statusCode: HttpStatus.OK,
    },
    EMAIL_UPDATED: {
        message: 'Email Changed Successfully',
        statusCode: HttpStatus.OK,
    },
    LOAD_BITS: {
        message: 'Payment Intent Created to load bits',
        statusCode: HttpStatus.OK,
    },
    SEARCH_USERNAME: {
        message: 'Search User Name Successful',
        statusCode: HttpStatus.OK,
    },
    ADMIN_TRANSACTION_HISTORY: {
        message: 'Get Transaction History for Admin Successful',
        statusCode: HttpStatus.OK,
    },
    Action_summary: {
        message: 'action summary',
        statusCode: HttpStatus.OK,
    },
    NOTIFICATION_SETTING: {
        message: 'notification setting',
        statusCode: HttpStatus.OK,
    },
    UPDATE_NOTIFICATION_SETTING: {
        message: 'update notification setting',
        statusCode: HttpStatus.OK,
    },
    NEXT_CHECKOUT_STATUS: {
        message: 'next checkout status',
        statusCode: HttpStatus.OK,
    },
    SET_LOCATION: {
        message: 'set user location',
        statusCode: HttpStatus.OK,
    },
    MEMBER_IN_YOU_AREA: {
        message: 'list of members in your area',
        statusCode: HttpStatus.OK,
    },
};
