import { refs } from './refs';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import countryTemplate from '../templates/countryTemplate.hbs';

export const countryListMarkup = template => {
  refs.contentContainerRef.innerHTML = countryListTemplate(template);
};

export const createCountryMarkup = template => {
  refs.contentContainerRef.innerHTML = countryTemplate(template);
};

export function deleteMarkup() {
  refs.contentContainerRef.innerHTML = '';
}
