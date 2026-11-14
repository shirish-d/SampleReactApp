declare module "*.css";

declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_URL?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
