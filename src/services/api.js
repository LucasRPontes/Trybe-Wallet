export default async function fetchApi() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currency = await response.json();
  return currency;
}
