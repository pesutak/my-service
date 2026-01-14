#!/usr/bin/env node

const INTERVAL = parseInt(process.env.INTERVAL || '5000', 10);
const WHAT = process.env.WHAT || 'Hello World';

console.log(`Starting service - will log "${WHAT}" every ${INTERVAL}ms`);
// devel
// feature 1

setInterval(() => {
  console.log(WHAT);
}, INTERVAL);
