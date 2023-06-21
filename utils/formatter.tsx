import moment from 'moment';

/**
 * Formats the given date as a string in the format 'Month Day, Year'.
 * If the date is null or undefined, returns '-'.
 * @param date The date to format.
 * @returns The formatted date string in the 'Month Day, Year' format or '-' if the date is null or undefined.
 */
const _formatDate = (date: string | null | undefined): string => {
  if (date !== null && date !== undefined) {
    return moment(date).format('MMMM D, YYYY');
  }
  return '-';
};

export { _formatDate };