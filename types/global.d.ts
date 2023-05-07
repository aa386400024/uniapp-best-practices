declare global {
  namespace NodeJS {
    interface Global {
      uniEnv: {
        ENV: string;
        TIMEOUT: number;
        BASE_URL: string;
        STORAGE_KEY: string;
      };
    }
  }
}

export {};
