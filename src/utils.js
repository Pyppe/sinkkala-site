import _ from 'lodash';

export const extractLanguageFromLocation = (location) => {
  const m = location.pathname.match(new RegExp('/(\\w+)/.+', 'i'));
  return _.size(m) === 2 ? m[1] : 'fi';
};

export const emailAddress = 'sinkkala@gmail.com';
export const phoneNumber = '+358 40 821 7021';
export const streetAddress = 'Sinkkalantie 29, 06500 Porvoo';
export const facebookPageUrl = 'https://www.facebook.com/Sinkkala-Bed-Breakfast-458129604293038/';
