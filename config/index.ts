// config.ts
export const TIMEOUT = 5000;
export const STORAGE_KEY = "__my_app_storage__";
export const CUSTOM_HEADERS = {
  'Content-Type': 'application/json',
};
export const APP_TITLE = '企业级uni-app项目';

let baseURL = process.env.BASE_URL;

// #ifdef APP-PLUS
baseURL = "https://cat-fact.herokuapp.com";
// #endif

export const BASE_URL = baseURL;
