import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import Lightbox from 'react-images'
import {extractLanguageFromLocation} from '../utils'

const i18n = {
  bedrooms: {
    fi: `
      <p>
        Sinkkalassa on ainoastaan neljä makuuhuonetta, joten talossa vallitsee rauhallinen ja kodikas tunnelma.
        Jokainen huone kertoo esineillään omaa tarinaansa perheen historiasta . Moni esineistä on matkannut
        pitkän ja vaivalloisenkin matkan päätyäkseen lopulta Sinkkalaan, Porvooseen. Juuri nämä esineet luovat
        taloon oman tunnelmansa.
      </p>
      <p>
        Makuuhuoneista kaksi sijaitsee alakerrassa ja kaksi yläkerrassa.
      </p>
    `,
    en: '<p>TODO</p>'
  },
  restOfText: {
    fi: `
      <p>
        Alakerran Pikkukamarissa olevat mummon morsiuspiironki, vanhat valokuvat, seinäkello ja käytössä oleva
        uuni luovat entisaikojen tunnelmaa. Isokamarissa on kahden erillisen vuoteen lisäksi myös 120 cm leveä
        vuode, joten huoneeseen mahtuu esimerkiksi nelihenkinen perhe.
      </p>
      <p>
        Yläkerran Peräkamarin seiniä koristavat talon entisen emännän hiihtopalkintoina saamat taulut ja peili.
        Tyttöjen huone on suuri 24 m² huone, missä kahden vuoteen lisäksi on sijattavissa vuoteet lapsille
        vuodesohvasta. Yhteisenä oleskelutilana on yläkerrassa aula, missä voi lueskella tai katsella tv:tä
        puuseppäisännän rakentamissa nojatuoleissa.
      </p>
    `
  }
};

const ImageThumbnails = ({images, onClickImage}) => (
  <div className="row thumbnails">
    {_.map(images, (img, idx) => {
      const caption = determineImageCaption(img);
      return (
        <div className="col-lg-4 col-md-6" key={idx}>
          <a onClick={() => onClickImage(idx)}>
            <Image
              sizes={img}
              imgStyle={{transition: null}}
            />
            {caption &&
              <div className="caption">{caption}</div>
            }
          </a>
        </div>
      );
    })}
  </div>
);

const determineImageCaption = ({src}) => {
  const name = _.head(_.last(src.split('/')).split('-'));
  switch (name) {
    case 'pienikammari01':
      return 'TODO. Jotain hieno täällä.';
  }
  return undefined;
};

class RoomsAndImagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightboxOpen: false,
      currentImageIndex: 0,
    };
  }
  render() {
    const language = extractLanguageFromLocation(this.props.location);
    const photoNodes = this.props.data.photos.edges;
    const fullSizes = _.map(photoNodes, 'node.childImageSharp.fullSizes');
    const lightboxImages = _.map(fullSizes, n => ({
      ...n,
      srcSet: n.srcSet.split(',').map(_.trim),
      caption: determineImageCaption(n),
    }));
    return (
      <React.Fragment>
        <div dangerouslySetInnerHTML={{'__html': i18n.bedrooms[language]}} />
        <ImageThumbnails
          images={fullSizes}
          onClickImage={currentImageIndex => {
            this.setState({currentImageIndex, isLightboxOpen: true});
          }}
        />
        <div dangerouslySetInnerHTML={{'__html': i18n.restOfText[language]}} />

        <Lightbox
          images={lightboxImages}
          isOpen={this.state.isLightboxOpen}
          currentImage={this.state.currentImageIndex}
          onClickPrev={() => {
            this.setState({currentImageIndex: this.state.currentImageIndex - 1});
          }}
          onClickNext={() => {
            this.setState({currentImageIndex: this.state.currentImageIndex + 1});
          }}
          onClose={() => this.setState({isLightboxOpen: false})}
          onClickThumbnail={currentImageIndex => {
            this.setState({currentImageIndex});
          }}
          imageCountSeparator=' / '
          showThumbnails
        />
      </React.Fragment>
    );
  }
}


export default RoomsAndImagesPage;

export const sinkkalaPhotosFragment = graphql`
  fragment sinkkalaPhotos on RootQueryType {
    photos: allFile(filter: { id: { regex: "/photos/" } }) {
      edges {
        node {
          sourceInstanceName
          childImageSharp {
#            thumbnailSizes: sizes(maxWidth: 300) {
#              ...GatsbyImageSharpSizes
#            }
            fullSizes: sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
