import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.min.css'
import '../styles/main.scss'

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import {extractLanguageFromLocation} from '../utils'
import cover from '../images/cover.jpg'

const Layout = (props) => {
  const { children, data, location } = props;
  const {siteMetadata} = data.site;
  const language = extractLanguageFromLocation(location);
  console.log(data.headerImage);
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{lang: language}}
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: 'Bed and Breakfast, near Porvoo' },
          { name: 'keywords', content: 'bed and breakfast, porvoo' }
        ]}
      >
       <meta name="og:image" content={siteMetadata.baseUrl + cover} />
      </Helmet>
      <Jumbotron title='Sinkkala' headerImage={data.headerImage} />
      <Navbar
        siteTitle={siteMetadata.title}
        language={language}
        currentPath={location.pathname}
      />
      <div className="container mainContent">
        {children()}
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query MainQuery {
    headerImage: imageSharp(id: { regex: "/cover/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
    site {
      siteMetadata {
        title
        baseUrl
      }
    }
  }
`
