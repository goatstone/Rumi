/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_URL?: string; // example custom env var
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
