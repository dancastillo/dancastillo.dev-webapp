import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

export const ENV_VARS = {
  API_URL: 'API_URL',
  LOCAL_DEVELOPMENT: 'LOCAL_DEVELOPMENT',
} as const

export function getEnv(key: string): string {
  const env = process.env[key]
  if (!env) {
    throw new Error(`Missing environment variable ${key}`)
  }

  return env
}
