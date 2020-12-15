import Moment from 'moment';

export function getDateTimeString(date: Date): string {
  return Moment(date).format('LLL');
}
