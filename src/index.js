import debounce from 'lodash.debounce';
import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import countryTemplate from './templates/countryTemplate.hbs';
import countryListTemplate from './templates/countryListTemplate.hbs';
import './sass/main.scss';
import { refs } from './js/refs';
// import fetchCountries from './js/fetchCountries';

defaults.styling = 'material';
defaults.icons = 'material';

refs.inputRef.addEventListener('input', e => {
  if (e.target.value === '') {
    deleteMarkup();
    InputError();
  }

  debouncedFetchCountries(e.target.value);
});

const debouncedFetchCountries = debounce(function fetchCountries(countryName) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      if (response.status === 404) {
        return;
      }

      return response.json();
    })

    .then(obj => {
      if (obj.length > 10) {
        return refineRequest();
      } else {
        refs.contentContainerRef.innerHTML = countryListTemplate(obj);
      }

      if (obj.length < 2) {
        refs.contentContainerRef.innerHTML = countryTemplate(obj);
      }
    })
    .catch(error => {
      InputError();
    });
}, 500);

function refineRequest() {
  deleteMarkup();
  alert({
    text: 'Too many matches found. Please enter more specific query!',
    sticker: false,
    delay: 1000,
  });
}

export function InputError() {
  error({
    text: 'Wrong entry or country not found!',
    sticker: false,
    delay: 1000,
  });
}

function deleteMarkup() {
  refs.contentContainerRef.innerHTML = '';
}
