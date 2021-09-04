import debounce from 'lodash.debounce';
import { defaults } from '@pnotify/core';

import {
  countryListMarkup,
  createCountryMarkup,
  deleteMarkup,
} from './js/markupCreator';
import './sass/main.scss';
import { refs } from './js/refs';
import { InputError, refineRequest } from './js/notification';
import fetchCountries from './js/fetchCountries';

defaults.styling = 'material';
defaults.icons = 'material';

const inputHandler = refs.inputRef.addEventListener(
  'input',
  debounce(() => {
    if (input.value === '') {
      deleteMarkup();
      InputError();
      return;
    }

    fetchCountries(input.value)
      .then(data => {
        if (data.length > 10) {
          return refineRequest();
        } else {
          countryListMarkup(data);
        }
        if (data.length < 2) {
          createCountryMarkup(data);
        }
      })
      .catch(error => InputError(console.log('Bad Request')));
  }, 500),
);
