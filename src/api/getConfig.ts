//import { EnvironmentConfig } from '../models';
import { EnvironmentConfig } from '../models';
import configStore from './config-store';

/**
 * Retrieves stored user data values from env variables or configstore,
 * with env variables taking precedent
 */
export default function getConfig(): EnvironmentConfig {
  const environmentConfig: EnvironmentConfig = {
    apiKey: process.env.D360_API_KEY || configStore.get('apiKey'),
    apihubUrl: process.env.D360_APIHUB_URL || configStore.get('apihubUrl')
  }
  return environmentConfig;
}




export function getApiHubUrl(): string {
  return process.env.D360_APIHUB_URL || configStore.get('apihubUrl');
}

export function getAPIKey(): string {
  return process.env.D360_API_KEY || configStore.get("apiKey");
}