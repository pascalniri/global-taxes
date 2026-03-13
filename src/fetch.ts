import { TaxConfig, DEFAULT_TAX_CONFIG_2024 } from './types';
const REMOTE_RATES_URL = 'https://raw.githubusercontent.com/pascalniri/rwanda-taxes/main/rates.json';

/**
 * Fetches the latest tax configurations from the central GitHub repository.
 * Falls back to built-in 2024 config if the fetch fails.
 * @returns The latest tax configuration
 */
export async function fetchLatestTaxConfig(): Promise<TaxConfig> {
  try {
    const response = await fetch(REMOTE_RATES_URL);
    if (!response.ok) throw new Error('Failed to fetch remote rates');
    const remoteConfig = await response.json();
    return remoteConfig as TaxConfig;
  } catch (error) {
    console.warn('Rwanda-Taxes: Falling back to built-in rates due to fetch error.');
    return DEFAULT_TAX_CONFIG_2024;
  }
}
