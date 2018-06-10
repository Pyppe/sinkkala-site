import React from 'react'
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
      <p>Makuuhuoneista kaksi sijaitsee alakerrassa ja kaksi yläkerrassa.</p>
      <h4>Alakerran kamarit</h4>
      <p>
        Alakerran Pikkukamarissa olevat mummon morsiuspiironki, vanhat valokuvat, seinäkello ja käytössä oleva
        uuni luovat entisaikojen tunnelmaa.
        Isokamarissa on kahden erillisen vuoteen lisäksi myös 120 cm leveä
        vuode, joten huoneeseen mahtuu esimerkiksi nelihenkinen perhe.
      </p>
    `,
    en: `
      <p>
        Bed &amp; Breakfast Sinkkala has only four separate bedrooms, making the atmosphere peaceful and cosy.
        The interior of the house tells stories of the people who once lived there.
        Many of the household items have travelled a long way to finally end up in Sinkkala, Porvoo.
        These items create an unique atmosphere, which has been well-liked by many of our guests.
      </p>
      <p>Two of the bedrooms are downstairs, and two upstairs.</p>
      <h4>Chambers downstairs</h4>
      <p>
        Downstairs in the small chamber we have Grandma’s bridal bureau, old photographs, wall clock,
        and an oven creating a warm, fuzzy feeling of the good ol’ times.
        The larger bedroom includes two separate normal-sized beds, and one larger bed (width 120cm),
        having space for a family of four.
      </p>
    `
  },
  textB: {
    fi: `
      <h4>Yläkerta</h4>
      <p>
        Yläkerran Peräkamarin seiniä koristavat talon entisen emännän hiihtopalkintoina saamat taulut ja peili.
        Tyttöjen huone on suuri 24 m² huone, missä kahden vuoteen lisäksi on sijattavissa vuoteet lapsille
        vuodesohvasta. Yhteisenä oleskelutilana on yläkerrassa aula, missä voi lueskella tai katsella tv:tä
        puuseppäisännän rakentamissa nojatuoleissa.
      </p>
    `,
    en: `
      <h4>Upstairs</h4>
      <p>
        Upstairs in the back chamber, the walls are decorated with a mirror and paintings
        won by Grandma in old cross-country skiing competitions. The girls’ chamber is spacious 24 m² room,
        where we have two beds and an extra sofa bed.
        In upstairs we also have a common lounge area, where you may read or watch television in chairs
        built by Grandpa himself.
      </p>
    `,
  },
  textC: {
    fi: `
      <h4>Alakerran keittiö ja veranta</h4>
      <p>
        Keittiö on kaikkien majoittujien käytössä ja sieltä löytyvät tarvittavat välineet omatoimiseen ruuanlaittoon.
        Halutessanne voitte tilata aamiaistarvikkeet valmiiksi ja nauttia ne, silloin kun teille parhaiten sopii.
        Tuvan ison pöydän ääreen mahtuu ruokailemaan suurempikin seurue.
        Valoisan verannan pöydän ääressä aamiainen maistuu hyvältä seuratessa elämää pihapuissa
        ja ympäröivillä pelloilla.
      </p>
    `,
    en: `
      <h4>Kitchen downstairs and sunny porch</h4>
      <p>
        Breakfast items can be found from the kitchen,
        where all the necessary utensils and tableware are available for preparing a meal.
        You can order breakfast ingredients to be ready for your convenience.
        You may enjoy your meal either in the romantic cabin
        — spacious enough to accommodate even a larger family — or at the sunny porch.
      </p>
    `
  },
  textD: {
    fi: `
      <h4>Piha ja sauna</h4>
      <p>
        Piha on iso, mutta turvallinen. Ikivanhojen puiden varjossa voi istuskella grillaten tai muuten vaan
        nautiskellen maalaismaisemasta. Pihapiirissä sijaitseva perinteinen, vaatimaton sauna lämpiää
        sopimuksen mukaan. Asukkaiden käytössä on myös polkupyöriä ja pihaleikkivälineitä. Talvisin
        yhdyslatu kulkee kylän hiihtoreiteille melkeinpä rappusten edestä, tietenkin lumitilanteesta riippuen.
      </p>
    `,
    en: `
      <h4>Yard and sauna</h4>
      <p>
        The yard is spacious, yet perfectly safe for children to play around.
        You can relax in the shades of ancient trees within the yard, or perhaps use the grill
        to prepare some food outside.
        We also have a traditional, modest sauna close by the main building (usage can be agreed in advance).
        The guests are also free to use bicycles and other equipment found from the house.
        In the winter, a cross-country ski trail comes practically right up to the front door —
        depending on the amount of snow, of course.
      </p>
    `
  }
};

const ImageThumbnails = ({images, onClickImage, language}) => (
  <div className="row thumbnails">
    {_.map(images, (img) => {
      const caption = determineImageCaption(img, language);
      const colSize = (_.size(images) % 4 === 0) ? 3 : 4;
      return (
        <div className={`col-lg-${colSize} col-sm-6`} key={img.src}>
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

const determineImageCaption = ({src}, language) => {
  const name = _.head(_.last(src.split('/')).split('-'));
  const names = {
    'sinkkala.A.01': ['Alakerran pikkukamari', 'Little chamber downstairs'],
    'sinkkala.A.02': ['Alakerran isokamari', 'Larger bedroom downstairs'],
    'sinkkala.B.01': ['Yläkerran peräkamari', 'Back chamber upstairs'],
    'sinkkala.B.02': ['Yläkerran tyttöjen huone', 'The girls’ chamber upstairs'],
    'sinkkala.B.03': ['Yläkerran oleskelutila', 'Common lounge area upstairs'],
    'sinkkala.C.01': ['Keittiö', 'Kitchen'],
    'sinkkala.C.02': ['Tupa', 'Cabin'],
    'sinkkala.C.03': ['Veranta', 'Sunny porch'],
    'sinkkala.C.04': ['Alakerran vessa', 'Bathroom downstairs'],
    'sinkkala.C.05': ['Kellarin vessa', 'Bathroom in the basement'],
    'sinkkala.D.01': ['Sinkkalan iso piha', `Sinkkala's spacious yard`],
    'sinkkala.D.02': ['Hiekkalaatikko leikkejä varten', 'Sandbox for children to play'],
    'sinkkala.D.03': ['Ulkosauna', 'Outside sauna'],
    'sinkkala.D.04': ['Saunan pukuhuone', 'Dressing room'],
  };
  return _.get(_.get(names, name, []), language === 'fi' ? 0 : 1);
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
    const {images} = this.state;

    const BlockOfTextAndImages = ({group}) => (
      <React.Fragment>
        <div dangerouslySetInnerHTML={{'__html': i18n[`text${group}`][language]}} />
        <ImageThumbnails
          images={_.filter(images, {group})}
          onClickImage={currentImageIndex => {
            this.setState({currentImageIndex, isLightboxOpen: true});
          }}
          language={language}
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
              caption: determineImageCaption(img, language),
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
