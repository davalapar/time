## @davalapar/time

time utils, convenience wrapper for luxon

#### Usage

```sh
yarn add @davalapar/time
```

- time.tz(tz?) - gets / sets time zone
  - optional `tz` time zone parameter
- time.now() - gets current unix timestamp in milliseconds
- time.iso(ts?) - gets current iso format
  - optional `ts` timestamp parameter
- time.rfc(ts?) - gets current rfc2822 format
  - optional `ts` timestamp parameter
- time.http(ts?) - gets current http format
  - optional `ts` timestamp parameter
- time.fmt(fmt, ts?) - gets current custom format
  - required `fmt` format parameter
  - optional `ts` timestamp parameter

```js
const time = require('@davalapar/time');

console.log(time.tz('Asia/Manila'));
console.log(time.now(1575683330429));
console.log(time.iso(1575683330429));
console.log(time.rfc(1575683330429));
console.log(time.http(1575683330429));
console.log(time.fmt('EEE, MMM d, yyyy hh:mm:ss a', 1575683330429));
```

#### References

- https://moment.github.io/luxon/docs/
- https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens

#### License

MIT | @davalapar