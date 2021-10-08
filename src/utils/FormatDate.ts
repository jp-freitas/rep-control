export function FormatDate(date: Date) {
  const dateToDate = new Date(date);
  const parsedDate = new Intl.DateTimeFormat('pt-BR').format(dateToDate);
  return parsedDate;
}