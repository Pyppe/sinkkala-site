import React from 'react'

// https://github.com/hjnilsson/country-flags/tree/master/svg
const Flag = ({ code, active }) => {
  const props = {height: active ? 20 : 16, className: "flag"};
  switch (code) {
    case 'fi':
      return (
        <svg viewBox="0 0 1800 1100" {...props}>
          <rect width="1800" height="1100" fill="#fff" />
          <rect width="1800" height="300" y="400" fill="#003580" />
          <rect width="300" height="1100" x="500" fill="#003580" />
        </svg>
      );
    case 'en':
      return (
        <svg viewBox="0 0 60 30" {...props}>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
        </svg>
      );
    default:
      return null;
  }
};

export default Flag;
