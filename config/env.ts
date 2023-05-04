const ENV = process.env.NODE_ENV;
const DEV_BASE_URL = 'https://cat-fact.herokuapp.com';
const PROD_BASE_URL = 'https://production.example.com/api';
export const TIMEOUT = 5000
export const BASE_URL = ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;
export const STORAGE_KEY = '__my_app_storage__'; // 根据你的项目情况修改
