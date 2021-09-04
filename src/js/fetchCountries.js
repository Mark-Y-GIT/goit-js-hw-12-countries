// import { refs } from './refs';
// import InputError from '../index';
// import { defaults } from '@pnotify/core';

// export function fetchCountries(countryName) {
//   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then(response => {
//       if (response.status === 404) {
//         return;
//       }

//       return response.json();
//     })

//     .then(obj => {
//       if (obj.length > 10) {
//         return refineRequest();
//       } else {
//         refs.contentContainerRef.innerHTML = countryListTemplate(obj);
//       }

//       if (obj.length < 2) {
//         refs.contentContainerRef.innerHTML = countryTemplate(obj);
//       }
//     })
//     .catch(error => {
//       InputError();
//     });
// }

// fetchCountries();
