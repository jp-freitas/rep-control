import { parseISO, format } from 'date-fns';

export function FormatDate(date: Date) {
  const parsedDateToString = String(date);
  const parsedDate = parseISO(parsedDateToString);
  const formattedDate = format(new Date(parsedDate), 'dd/MM/yyyy');
  return formattedDate;
}