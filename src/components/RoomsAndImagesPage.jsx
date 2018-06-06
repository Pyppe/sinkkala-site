import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import Lightbox from 'react-images'
import {extractLanguageFromLocation} from '../utils'

const i18n = {
  textA: {
    fi: `
      <p>
        Sinkkalassa on ainoastaan neljä makuuhuonetta, joten talossa vallitsee rauhallinen ja kodikas tunnelma.
        Jokainen huone kertoo esineillään omaa tarinaansa perheen historiasta. Moni esineistä on matkannut
        pitkän ja vaivalloisenkin matkan päätyäkseen lopulta Sinkkalaan, Porvooseen. Juuri nämä esineet luovat
        taloon oman tunnelmansa.
      </p>
      <p>
        Makuuhuoneista kaksi sijaitsee alakerrassa ja kaksi yläkerrassa.
      </p>
      <p>
        Alakerran Pikkukamarissa olevat mummon morsiuspiironki, vanhat valokuvat, seinäkello ja käytössä oleva
        uuni luovat entisaikojen tunnelmaa. Isokamarissa on kahden erillisen vuoteen lisäksi myös 120 cm leveä
        vuode, joten huoneeseen mahtuu esimerkiksi nelihenkinen perhe.
      </p>
    `,
    en: `
      <p>
        The interior of the house is telling about the history of families once lived there.
        Many of the household items have traveled a long way to finally end up in Sinkkala, Porvoo.
        These items create an unique atmosphere, which has been liked very much by many of our guests.
      </p>
      <p>
        The Bed &amp; Breakfast Sinkkala offers two bedrooms available for the guests.
        The small chamber includes a large double bed, which can also be split into two separate beds if needed.
        Grandma’s bridal bureau, old photographs, wall clock and the oven create a warm, fuzzy feeling of
        the good ol’ times.
      </p>
      <p>
        The larger bedroom includes two separate normal-sized beds, and one larger bed (120cm of diameter)
        having space for a family of four. The door between the two bedrooms can also be kept open if all
        the guests are from the same entourage.
      </p>
    `
  },
  textB: {
    fi: `
      <p>
        Yläkerran Peräkamarin seiniä koristavat talon entisen emännän hiihtopalkintoina saamat taulut ja peili.
        Tyttöjen huone on suuri 24 m² huone, missä kahden vuoteen lisäksi on sijattavissa vuoteet lapsille
        vuodesohvasta. Yhteisenä oleskelutilana on yläkerrassa aula, missä voi lueskella tai katsella tv:tä
        puuseppäisännän rakentamissa nojatuoleissa.
      </p>
    `,
    en: '',
  },
  textC: {
    fi: `
      <p>
        Keittiö on kaikkien majoittujien käytössä ja sieltä löytyvät tarvittavat välineet omatoimiseen
        ruuanlaittoon. Halutessanne voitte tilata aamiaistarvikkeet valmiiksi ja nauttia ne, silloin kun teille
        parhaiten sopii. Tuvan ison pöydän ääreen mahtuu ruokailemaan suurempikin seurue. Valoisan
        verannan pöydän ääressä aamiainen maistuu hyvältä seuratessa elämää pihapuissa ja ympäröivillä
        pelloilla.
      </p>
    `,
    en: `
      <p>
        Breakfast items can be found from the kitchen. For preparing a meal all the necessary kitchen
        utensils and tableware are available. You may enjoy your meal either in the romantic cabin
        or at the sunny porch. The yard grill can also be used by the guests.
      </p>
    `
  },
  textD: {
    fi: `
      <p>
        Piha on iso, mutta turvallinen. Ikivanhojen puiden varjossa voi istuskella grillaten tai muuten vaan
        nautiskellen maalaismaisemasta. Pihapiirissä sijaitseva perinteinen, vaatimaton sauna lämpiää
        sopimuksen mukaan. Asukkaiden käytössä on myös polkupyöriä ja pihaleikkivälineitä. Talvisin
        yhdyslatu kulkee kylän hiihtoreiteille melkeinpä rappusten edestä, tietenkin lumitilanteesta riippuen.
      </p>
    `,
    en: `
      <p>
        The yard is spacious, and incorporates a small sauna. The usage can be agreed in advance.
        In addition, guests may use the household bicycles. In the winter,
        a cross-country ski trail comes practically right up to the front door &mdash;
        depending on the amount of snow, of course.
      </p>
    `
  }
};

const ImageThumbnails = ({images, onClickImage}) => (
  <div className="row thumbnails">
    {_.map(images, (img) => {
      const caption = determineImageCaption(img);
      return (
        <div className="col-lg-4 col-md-6" key={img.src}>
          <a onClick={() => onClickImage(img.index)}>
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
    case 'Sinkkala_01':
      return 'Tässä esimerkki kuvan otsikosta.';
  }
  return undefined;
};

class RoomsAndImagesPage extends React.Component {
  constructor(props) {
    super(props);
    const images = _.map(
      _.sortBy(
        _.map(this.props.data.photos.edges, n => {
          const img = n.node.childImageSharp.fullSizes;
          const group = _.last(img.src.split('/')).split('.')[1];
          return {
            ...img,
            group
          };
        }),
        'src'
      ),
      (x, index) => ({...x, index})
    );
    this.state = {
      isLightboxOpen: false,
      currentImageIndex: 0,
      images,
    };
  }
  render() {
    const language = extractLanguageFromLocation(this.props.location);
    const photoNodes = this.props.data.photos.edges;
    const {images} = this.state;

    const BlockOfTextAndImages = ({group}) => (
      <React.Fragment>
        <div dangerouslySetInnerHTML={{'__html': i18n[`text${group}`][language]}} />
        <ImageThumbnails
          images={_.filter(images, {group})}
          onClickImage={currentImageIndex => {
            this.setState({currentImageIndex, isLightboxOpen: true});
          }}
        />
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <BlockOfTextAndImages group='A' />
        <BlockOfTextAndImages group='B' />
        <BlockOfTextAndImages group='C' />
        <BlockOfTextAndImages group='D' />

        <Lightbox
          images={
            _.map(images, img => ({
              ...img,
              srcSet: _.map(img.srcSet.split(','), _.trim),
              caption: determineImageCaption(img),
            }))
          }
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
