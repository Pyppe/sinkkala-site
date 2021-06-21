import React from 'react'
import _ from 'lodash'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Lightbox from 'react-images'
import Layout from "./layout"
import {extractLanguageFromLocation} from '../utils'

const i18n = {
  textA: {
    fi: `
      <p>
        Sinkkalassa on neljä makuuhuonetta, joten taloon mahtuu majoittumaan suurempikin seurue. Silti
        jokaiselle on omaa rauhaa ja yksityisyyttä niin halutessaan. Jokainen huone kertoo esineillään omaa
        tarinaansa perheen historiasta. Moni esineistä on matkannut pitkän ja vaivalloisenkin matkan
        päätyäkseen lopulta Sinkkalaan, Porvooseen. Juuri nämä esineet luovat taloon oman tunnelmansa.
        
      </p>
      <p>
        Makuuhuoneista kaksi sijaitsee alakerrassa ja kaksi yläkerrassa.
      </p>
      <h4>Alakerran kamarit</h4>
      <p>
        Alakerran Pikkukamarissa olevat mummon morsiuspiironki, vanhat valokuvat, seinäkello ja uuni
        luovat entisaikojen tunnelmaa. Isokamarissa on kahden erillisen vuoteen lisäksi myös 120 cm leveä
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
        Yläkerran Peräkamarin seiniä koristavat talon entisen emännän hiihtopalkintoina saamat taulut ja
        peili. Tyttöjen huone on suuri 24 m² huone, missä kahden vuoteen lisäksi on sijattavissa vuoteet
        lapsille vuodesohvasta. Yhteisenä oleskelutilana on yläkerrassa aula, missä voi lueskella tai katsella
        tv:tä puuseppäisännän rakentamissa nojatuoleissa.
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
        Keittiö on remontoitu syksyllä 2019 talon henkeä kunnioittaen. Sieltä löytyvät tarvittavat välineet
        ruuanlaittoon ja tarjoiluun. Astioita ja ruokailuvälineitä löytyy vähintään 15 henkilölle. Tuvan ison
        pöydän ääreen mahtuu ruokailemaan suurempikin seurue. Valoisan verannan pöydän ääressä
        aamiainen maistuu hyvältä seuratessa elämää pihapuissa ja ympäröivillä pelloilla.
      </p>
    `,
    en: `
      <h4>Kitchen downstairs and sunny porch</h4>
      <p>
        In the kitchen all the necessary utensils and tableware are available for preparing a meal.
        You may enjoy your meal either in the romantic cabin
        — spacious enough to accommodate even a larger family — or at the sunny porch.
      </p>
    `
  },
  textD: {
    fi: `
      <h4>Piha ja sauna</h4>
      <p>
        Piha on iso, mutta turvallinen. Ikivanhojen, todella suurten puiden varjossa voi istuskella grillaten
        tai muuten vaan nautiskellen maalaismaisemasta. Pihapiirissä sijaitseva perinteinen, vaatimaton
        maalaissauna antaa makoisat löylyt. Asukkaiden käytössä on myös polkupyöriä ja
        pihaleikkivälineitä. Talvisin yhdyslatu kulkee kylän hiihtoreiteille melkeinpä rappusten edestä,
        tietenkin lumitilanteesta riippuen.
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

const ImageThumbnails = ({images, onClickImage}) => (
  <div className="row thumbnails">
    {_.map(images, (img) => {
      const colSize = (_.size(images) % 4 === 0 || _.size(images) > 6) ? 3 : 4;
      return (
        <div className={`col-lg-${colSize} col-sm-6`} key={img.src}>
          <div className="clickable" onClick={() => onClickImage(img.index)}>
            <Image
              sizes={img}
              imgStyle={{transition: null}}
            />
            {img.caption &&
              <div className="caption">{img.caption}</div>
            }
          </div>
        </div>
      );
    })}
  </div>
);

const IMAGE_CAPTIONS = {
  // A
  'A.alakerran_pikkukamari': ['Alakerran pikkukamari', 'Little chamber downstairs'],
  'A.alakerran_isokamari': ['Alakerran isokamari', 'Larger bedroom downstairs'],
  // B
  'B.ylakerran_perakamari': ['Yläkerran peräkamari', 'Back chamber upstairs'],
  'B.ylakerran_tyttojen_huone': ['Yläkerran tyttöjen huone', 'The girls’ chamber upstairs'],
  'B.ylakerran_oleskelutila': ['Yläkerran oleskelutila', 'Common lounge area upstairs'],
  // C
  'C.keittio': ['Keittiö', 'Kitchen'],
  'C.tupa': ['Tupa', 'Cabin'],
  'C.veranta': ['Veranta', 'Sunny porch'],
  'C.alakerran_wc': ['Alakerran WC', 'Bathroom downstairs'],
  'C.kellarin_wc': ['Kellarin WC', 'Bathroom in the basement'],
  // D
  'D.etupiha': ['Sinkkalan iso piha', `Sinkkala's spacious yard`],
  'D.grilli': ['Grillipaikka', `Outside grill`],
  'D.takapiha': ['Sinkkalan takapiha', `Sinkkala's backyard`],
  'D.hiekkalaatikko': ['Hiekkalaatikko leikkejä varten', 'Sandbox for children to play'],
  'D.ulkosauna': ['Ulkosauna', 'Outside sauna'],
  'D.sauna': ['Ulkosauna', 'Outside sauna'],
  'D.saunan_pukuhuone': ['Saunan pukuhuone', 'Dressing room'],
};

class RoomsAndImagesPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    const language = extractLanguageFromLocation(props.location);
    const images = _.map(
      _.sortBy(
        _.map(this.props.data.photos.edges, n => {
          const img = n.node.childImageSharp.fullSizes;
          const name = _.last(img.src.split('/'));
          const group = name.split('.')[0];
          const id = name.split('-')[0];
          const index = _.indexOf(_.keys(IMAGE_CAPTIONS), id);
          const caption = _.get(_.get(IMAGE_CAPTIONS, id, []), language === 'fi' ? 0 : 1);
          return { ...img, group, index, caption };
        }),
        'index'
      ),
      (x, index) => ({...x, index})
    );
    console.log(images);
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
        />
      </React.Fragment>
    );

    return (
      <Layout {...this.props}>
        <BlockOfTextAndImages group='A' />
        <BlockOfTextAndImages group='B' />
        <BlockOfTextAndImages group='C' />
        <BlockOfTextAndImages group='D' />

        <Lightbox
          images={
            _.map(images, img => ({
              ...img,
              srcSet: _.map(img.srcSet.split(','), _.trim),
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
      </Layout>
    );
  }
}


export default RoomsAndImagesPage;

export const sinkkalaPhotosFragment = graphql`
  fragment sinkkalaPhotos on Query {
    photos: allFile(filter: { absolutePath: { regex: "/photos/" } }) {
      edges {
        node {
          childImageSharp {
            fullSizes: fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
