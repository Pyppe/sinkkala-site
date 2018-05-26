import _ from 'lodash';

export const extractLanguageFromLocation = (location) => {
  const m = location.pathname.match(new RegExp('/(\\w+)/.+', 'i'));
  return _.size(m) === 2 ? m[1] : 'fi';
};
