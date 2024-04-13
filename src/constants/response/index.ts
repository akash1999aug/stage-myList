import { IResponseStatusMessage } from 'src/utils/response/response.interface';
import * as CommonResponse from './common_response.constants';
import * as UserResponse from './user_response.constants';

// Response action name
export const responseName = {
    ...CommonResponse.responseName,
    ...UserResponse.responseName,
};

// Response information
export const responseInfo: Record<string, IResponseStatusMessage> = {
    ...CommonResponse.responseInfo,
    ...UserResponse.responseInfo,
};
