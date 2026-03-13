#!/usr/bin/env node
import { getTaxSummary, fetchLatestTaxConfig } from './index';

async function run() {
  const config = await fetchLatestTaxConfig();
  const summary = getTaxSummary(config);

  console.log('--- Rwanda Tax Details (Latest) ---');
  console.log(`VAT: ${summary.display.vat}`);
  console.log(`RSSB Pension: ${summary.display.rssb.pension}`);
  console.log(`Maternity Fund: ${summary.display.rssb.maternity}`);
  console.log(`Casual Laborer PAYE: ${summary.display.casualPAYE}`);
  console.log(`WHT (Standard): ${summary.display.wht.standard}`);
  console.log(`WHT (Public Tender): ${summary.display.wht.publicTender}`);
  console.log('\n--- PAYE Brackets (Monthly) ---');
  summary.display.payeBands.forEach((band) => console.log(`- ${band}`));
  console.log('---------------------------------');
}

run();
