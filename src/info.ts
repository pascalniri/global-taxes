import { DEFAULT_TAX_CONFIG_2024, TaxConfig, TaxBands } from './types';
import { VAT_RATE_RW } from './index';

export interface TaxInfoSummary {
  year: number;
  display: {
    payeBands: string[];
    rssb: {
      pension: string;
      maternity: string;
    };
    wht: {
      standard: string;
      publicTender: string;
      import: string;
    };
    casualPAYE: string;
    vat: string;
  };
  raw: {
    payeBands: TaxBands[];
    rssbRate: number;
    maternityRate: number;
    vatRate: number;
    whtRates: {
      standard: number;
      publicTender: number;
      import: number;
    };
  };
}

/**
 * Returns a structured summary of the tax rates and bands, including 
 * both raw numeric data and human-readable strings.
 * @param config Optional tax configuration
 * @returns A structured summary of tax rules
 */
export function getTaxSummary(config: TaxConfig = DEFAULT_TAX_CONFIG_2024): TaxInfoSummary {
  return {
    year: 2024,
    display: {
      payeBands: config.payeBands.map((band: TaxBands) => {
        const maxStr = band.max ? ` to ${band.max.toLocaleString()} Rwf` : ' and above';
        return `${band.min.toLocaleString()}${maxStr}: ${band.rate * 100}%`;
      }),
      rssb: {
        pension: `${config.rssbRate * 100}% (Employee) + ${config.rssbRate * 100}% (Employer)`,
        maternity: `${config.maternityRate * 100}% (Employee) + ${config.maternityRate * 100}% (Employer)`,
      },
      wht: {
        standard: '15%',
        publicTender: '3%',
        import: '5%',
      },
      casualPAYE: '0% up to 60,000 Rwf, then 15% flat rate',
      vat: `${VAT_RATE_RW * 100}%`,
    },
    raw: {
      payeBands: config.payeBands,
      rssbRate: config.rssbRate,
      maternityRate: config.maternityRate,
      vatRate: VAT_RATE_RW,
      whtRates: {
        standard: 0.15,
        publicTender: 0.03,
        import: 0.05,
      },
    },
  };
}
