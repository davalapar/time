/* eslint-disable no-console */

const time = require('./index');

console.log(time.tz('Asia/Manila')); // Asia/Manila
console.log(time.now()); // 1575683707993
console.log(time.iso(1575683330429)); // 2019-12-07T09:48:50.429+08:00
console.log(time.rfc(1575683330429)); // Sat, 07 Dec 2019 09:48:50 +0800
console.log(time.http(1575683330429)); // Sat, 07 Dec 2019 01:48:50 GMT
console.log(time.fmt('EEE, MMM d, yyyy hh:mm:ss a', 1575683330429)); // Saturday, Dec 7, 2019 09:48:50 AM
console.log(time.fromNow(time.now() - 5000)); // 5 seconds ago
console.log(time.fromNow(time.now() + 5000)); // in 5 seconds
console.log(time.fromTime(time.now() - 5000, time.now() + 5000)); // in 10 seconds
