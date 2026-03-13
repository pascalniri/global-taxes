#!/usr/bin/env node
import { getTaxSummary } from './index';

const summary = getTaxSummary();

console.log('--- Rwanda Tax Details (2024) ---');
console.log(`VAT: ${summary.vat}`);
console.log(`RSSB Pension: ${summary.rssb.pension}`);
console.log(`Maternity Fund: ${summary.rssb.maternity}`);
console.log(`Casual Laborer PAYE: ${summary.casualPAYE}`);
console.log(`WHT (Standard): ${summary.wht.standard}`);
console.log(`WHT (Public Tender): ${summary.wht.publicTender}`);
console.log('\n--- PAYE Brackets (Monthly) ---');
summary.payeBands.forEach((band) => console.log(`- ${band}`));
console.log('---------------------------------');
