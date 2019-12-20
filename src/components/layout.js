import React from 'react'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.min.css'
import '../styles/main.scss'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import {extractLanguageFromLocation} from '../utils'
import cover from '../images/cover.jpg'

const Layout = (props) => {
  const { children, location } = props;
  const language = extractLanguageFromLocation(location);
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{lang: language}}>
        <title>Sinkkala cottage</title>
        <meta name="description" content="Bed and Breakfast, near Porvoo" />
        <meta name="keywords" content="porvoo, sinkkala, bed and breakfast, accommodation, hostel, majoitus, mökki" />
        <meta name="og:image" content={'https://www.sinkkala.fi' + cover} />
      </Helmet>
      <Jumbotron language={language} />
      <Navbar
        language={language}
        currentPath={location.pathname}
      />
      <div className="container mainContent">
        {children}
      </div>
      <Footer language={language} />
    </React.Fragment>
  );
};

export default Layout
