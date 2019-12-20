import React from 'react'
import Layout from './layout'
import {extractLanguageFromLocation} from '../utils'

const priceUrl = lang =>
  lang === 'fi'
    ? 'https://www.nettimokki.com/porvoo/9597'
    : 'https://www.nettimokki.com/en/porvoo/9597'

const PricesPage = (props) => {
  const language = extractLanguageFromLocation(props.location);
  const url = priceUrl(language)
  return (
    <Layout {...props}>
      {language === 'fi'
        ? <p>Hinnat ja varaustilanteen löydät osoitteesta <a href={url} target="_blank">Nettimökki.com</a></p>
        : <p>Prices and reservations can be found in <a href={url} target="_blank">Nettimokki.com</a></p>
      }
    </Layout>
  );
};

export default PricesPage;
