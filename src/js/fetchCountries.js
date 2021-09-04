export default function fetchCountries(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(
    response => {
      if (response.status === 404) {
        return;
      }
      return response.json();
    },
  );
}
