/* eslint no-use-before-define: 0 */
import { DateTime } from './luxon.js';

const time = () => {
  const { year } = DateTime.now();
  const { month } = DateTime.now();
  const { day } = DateTime.now();
  const { hour } = DateTime.now();
  const { minute } = DateTime.now();
  const { second } = DateTime.now();
  return `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
};

export default time;
