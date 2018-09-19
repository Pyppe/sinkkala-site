import React from 'react'
import { graphql } from 'gatsby'
import RoomsAndImagesPage from '../../components/RoomsAndImagesPage'

export default (props) => <RoomsAndImagesPage {...props} />;

export const query = graphql`
  query PhotoQueryFi {
    ...sinkkalaPhotos
  }
`