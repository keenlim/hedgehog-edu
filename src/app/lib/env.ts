// lib/env.ts
export const ENV =
  process.env.VERCEL_ENV || (process.env.NODE_ENV === 'production' ? 'production' : 'development');