## @davalapar/time

time utils, convenience wrapper for luxon

#### Usage

```sh
yarn add @davalapar/time
```

- `time.tz(tz?)` - gets / sets time zone
  - optional `tz` time zone parameter
- `time.now()` - gets current unix timestamp
- `time.iso(ts?)` - gets current iso format
  - optional `ts` timestamp parameter
- `time.rfc(ts?)` - gets current rfc2822 format
  - optional `ts` timestamp parameter
- `time.http(ts?)` - gets current http format
  - optional `ts` timestamp parameter
- `time.sql(ts?)` - gets current sql format
  - optional `ts` timestamp parameter
- `time.fmt(fmt, ts?)` - gets current custom format
  - required `fmt` format parameter
  - optional `ts` timestamp parameter
- `time.fromNow(ts?)` - humanized format relative to now
  - optional `ts` timestamp parameter
- `time.fromTime(tsFrom, tsTo)` - humanized format relative to specified timestamp
  - required `tsFrom` timestamp parameter
  - required `tsTo` timestamp parameter
- `time.fromISO(str)` - iso string to unix timestamp
  - required `str` ISO string parameter
- `time.fromRFC(str)` - rfc2822 string to unix timestamp
  - required `str` rfc2822 string parameter
- `time.fromHTTP(str)` - http string to unix timestamp
  - required `str` http string parameter
- `time.fromSQL(str)` - sql string to unix timestamp
  - required `str` sql string parameter

```js
const time = require('@davalapar/time');
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
```

#### Notes

- unix timestamps (parameters and returned) are in milliseconds

#### References

- https://moment.github.io/luxon/docs/
- https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens

#### License

MIT | @davalapar