import Moment from 'moment';

export function getDateTimeString(date: Date): string {
  return Moment(date).format('LLL');
}

export function getDiffDay(date1: Date, date2: Date): number {
  return Moment(date1).diff(Moment(date2), 'days');
}
