#!/usr/bin/env node
import { getTaxSummary, fetchLatestTaxConfig } from './index';

async function run() {
  const config = await fetchLatestTaxConfig();
  const summary = getTaxSummary(config);

  console.log('--- Rwanda Tax Details (Latest) ---');
  console.log(`VAT: ${summary.vat}`);
  console.log(`RSSB Pension: ${summary.rssb.pension}`);
  console.log(`Maternity Fund: ${summary.rssb.maternity}`);
  console.log(`Casual Laborer PAYE: ${summary.casualPAYE}`);
  console.log(`WHT (Standard): ${summary.wht.standard}`);
  console.log(`WHT (Public Tender): ${summary.wht.publicTender}`);
  console.log('\n--- PAYE Brackets (Monthly) ---');
  summary.payeBands.forEach((band) => console.log(`- ${band}`));
  console.log('---------------------------------');
}

run();
