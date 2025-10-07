/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  readonly VITE_ENVIRONMENT: string
  readonly VITE_S3_BUCKET_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}