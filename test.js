/* eslint-disable no-console */

const time = require('./index');

console.log(time.tz('Asia/Manila')); // Asia/Manila
console.log('now:', time.now()); // 1575683707993
console.log('iso:', time.iso(1575683330429)); // 2019-12-07T09:48:50.429+08:00
console.log('rfc:', time.rfc(1575683330429)); // Sat, 07 Dec 2019 09:48:50 +0800
console.log('http:', time.http(1575683330429)); // Sat, 07 Dec 2019 01:48:50 GMT
console.log('sql:', time.sql(1575683330429)); // 2019-12-07 09:48:50.429 +08:00
console.log('fmt:', time.fmt('EEE, MMM d, yyyy hh:mm:ss a', 1575683330429)); // Sat, Dec 7, 2019 09:48:50 AM
console.log(time.fromNow(time.now() - 5000)); // 5 seconds ago
console.log(time.fromNow(time.now() + 5000)); // in 5 seconds
console.log(time.fromTime(time.now() - 5000, time.now() + 5000)); // in 10 seconds
console.log(time.fromISO(time.iso(1575683330429))); // 1575683330429
console.log(time.fromRFC(time.rfc(1575683330429))); // 1575683330000
console.log(time.fromHTTP(time.http(1575683330429))); // 1575683330000
console.log(time.fromSQL(time.sql(1575683330429))); // 1575683330429
console.log(time.fromSQL('2019-12-07 09:48:50 +08:00')); // 1575683330000
