import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import { deleteMarkup } from '../js/markupCreator';
export function refineRequest() {
  deleteMarkup();
  alert({
    text: 'Too many matches found. Please enter more specific query!',
    sticker: false,
    delay: 2000,
  });
}

export function InputError() {
  error({
    text: 'Wrong entry or country not found!',
    sticker: false,
    delay: 2000,
  });
}
