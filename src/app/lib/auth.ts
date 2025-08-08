import { ENV } from './env';

export const MAGIC_CODE = process.env.MAGIC_CODE || "";
export const AUTH_COOKIE = `app_auth_${ENV}`;
export const AUTH_COOKIE_VALUE = "ok";