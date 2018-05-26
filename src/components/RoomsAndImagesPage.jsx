import React from 'react'
import Link from 'gatsby-link'
import {extractLanguageFromLocation} from '../utils'

const RoomsAndImagesPage = ({location}) => {
  const language = extractLanguageFromLocation(location);
  return (
    <p>TODO ({language})</p>
  );
};

export default RoomsAndImagesPage;
