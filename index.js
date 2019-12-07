const luxon = require('luxon');

luxon.Settings.defaultZoneName = 'UTC';

module.exports = {
  now: () => luxon.DateTime.local().toMillis(),
  tz: (tz) => {
    if (tz !== undefined) {
      if (typeof tz !== 'string' || luxon.DateTime.local().setZone(tz).isValid === false) {
        throw Error('time.tz(tz?) :: Invalid parameter "tz"');
      }
      luxon.Settings.defaultZoneName = tz;
    }
    return luxon.Settings.defaultZoneName;
  },
  iso: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.iso(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toISO();
    }
    return luxon.DateTime.local().toISO();
  },
  isoDate: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.isoDate(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toISODate();
    }
    return luxon.DateTime.local().toISODate();
  },
  isoWeekDate: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.isoWeekDate(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toISOWeekDate();
    }
    return luxon.DateTime.local().toISOWeekDate();
  },
  isoTime: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.isoTime(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toISOTime();
    }
    return luxon.DateTime.local().toISOTime();
  },
  rfc: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.rfc(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toRFC2822();
    }
    return luxon.DateTime.local().toRFC2822();
  },
  http: (ts) => {
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.http(ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toHTTP();
    }
    return luxon.DateTime.local().toHTTP();
  },
  fmt: (fmt, ts) => {
    if (typeof fmt !== 'string') {
      throw Error('time.fmt(fmt, ts?) :: Invalid parameter "fmt"');
    }
    if (ts !== undefined) {
      if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
        throw Error('time.fmt(fmt, ts?) :: Invalid parameter "ts"');
      }
      return luxon.DateTime.fromMillis(ts).toFormat(fmt);
    }
    return luxon.DateTime.local().toFormat(fmt);
  },
  fromNow: (ts) => {
    if (ts === undefined) {
      throw Error('time.fromNow(ts) :: Missing parameter "ts"');
    }
    if (typeof ts !== 'number' || Number.isNaN(ts) === true) {
      throw Error('time.fromNow(ts) :: Invalid parameter "ts"');
    }
    return luxon.DateTime.fromMillis(ts).toRelative();
  },
  fromTime: (tsFrom, tsTo) => {
    if (tsFrom === undefined || tsTo === undefined) {
      throw Error('time.fromTime(tsFrom, tsTo) :: Missing parameter "tsFrom" or "tsTo"');
    }
    if (typeof tsFrom !== 'number' || Number.isNaN(tsFrom) === true) {
      throw Error('time.fromTime(tsFrom, tsTo) :: Invalid parameter "tsFrom"');
    }
    if (typeof tsTo !== 'number' || Number.isNaN(tsTo) === true) {
      throw Error('time.fromTime(tsFrom, tsTo) :: Invalid parameter "tsTo"');
    }
    return luxon.DateTime.fromMillis(tsTo).toRelative({ base: luxon.DateTime.fromMillis(tsFrom) });
  },
};
