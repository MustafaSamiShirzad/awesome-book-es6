import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const updateTime = (navTime) => {
  const dt = DateTime.now();
  const monthName = dt.toLocaleString({ month: 'long' });
  const date = dt.day;
  const hour = dt.hour < 10 ? `0${dt.hour}` : dt.hour;
  const minute = dt.minute < 10 ? `0${dt.minute}` : dt.minute;
  const second = dt.second < 10 ? `0${dt.second}` : dt.second;
  const amPm = hour >= 12 ? 'pm' : 'am';
  navTime.innerHTML = `${monthName} ${date}th, ${hour}:${minute}:${second} ${amPm}`;
};

export { updateTime };