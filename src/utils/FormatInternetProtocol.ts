export function FormatInternetProtocol(internet_protocol: number) {
  const toStringInternetProtocol = String(internet_protocol);
  const formattedInternetProtocol = toStringInternetProtocol.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})/,
    "$1.$2.$3.$4"
  );
  return formattedInternetProtocol;
}