import { defaultErrorConfig } from './config/default';
import { commonErrorConfig } from './config/common';
import { authErrorConfig } from './config/auth';

import { DEFAULT_ERROR } from './errors/default';
import { COMMON_ERROR } from './errors/common';
import { AUTH_ERROR } from './errors/auth';

export type ERROR = DEFAULT_ERROR | COMMON_ERROR | AUTH_ERROR;

export { DEFAULT_ERROR, COMMON_ERROR, AUTH_ERROR };

export const errorConfig = {
    ...defaultErrorConfig,
    ...commonErrorConfig,
    ...authErrorConfig,
};
