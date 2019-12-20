import React from 'react'
import {Link} from 'gatsby'
import Layout from "./layout"
import {extractLanguageFromLocation} from '../utils'

const Finnish = () => (
  <React.Fragment>
    <p>
      Sinkkala on mummola-tunnelmaa huokuva maalaistalo keskellä vehreää porvoolaista maalaismaisemaa.
      Laajaa pihapiiriä varjostavat ikivanhat puut.
      Pihaa reunustavat talousrakennukset luovat sille oman rauhoitetun maailmansa.
      Naapurit sijaitsevat lähellä, mutta silti lähes näkymättömissä.
      Lapsille ja lapsenmielisille on pihalla tilaa temmeltää.
    </p>
    <h2>Mummola-majoitusta Porvoossa</h2>
    <p>
      Sinkkala tarjoaa kodikasta majoitusta Porvoossa.
      Makuuhuoneita on ainoastaan neljä, joten talo sopii mainiosti rauhaa rakastaville ja kodikkaasta majoituksesta nauttiville vieraille.
      Olette tervetulleita viipymään Sinkkalassa joko yhden tai useamman yön tai jopa viikon.
    </p>
    <p>
      {/* TODO: THIS IN ENGLISH */}
      Talo on kokonaisuudessaan käytettävissänne ja makuuhuoneisiin mahtuu yöpymään isompikin seurue.
      Liinavaatteet ja pyyhkeet voitte tuoda tullessanne tai erillisestä maksusta vuoteet on sijattu valmiiksi.
      Myöskään loppusiivouksesta ei tarvitse välttämättä huolehtia, vaan lisämaksusta teemme senkin puolestanne.
    </p>
    <p>
      Sinkkala sijaitsee Uudellamaalla Porvoossa, noin 10 km päässä Porvoon keskustasta.
      Päätie (tie n:o 55) on noin 500 metrin päässä ja Helsinkiin matkaa on noin 60 km.
      Katso tarkemmat tiedot <Link to='/fi/yhteystiedot/'>Yhteystiedot</Link>-sivulta.
    </p>
    <p>
      Olette sydämellisesti tervetulleita nauttimaan todella erilaisesta, kodinomaisesta ja lämminhenkisestä majoituksesta.
    </p>
    <p>
      Tervetuloa kylään!
    </p>
  </React.Fragment>
);

const English = () => (
  <React.Fragment>
    <p>
      Sinkkala is a cottage with good ol’ granny’s atmosphere, located in the green countryside of Porvoo.
      The large yard is shaded by aged trees, and surrounded by the old household constructions creating its own peaceful setting.
      The neighbors are close, but far enough for privacy.
      The garden is relaxing and spacious for children to play and run around.
    </p>
    <h2>Cosy accommodation in Porvoo</h2>
    <p>
      Sinkkala offers cozy accommodation in Porvoo.
      There are only four bedrooms, so the house is ideal for those who value peace and quiet.
      You are most welcome to stay in Sinkkala either for just one or two days, or even weeks.
    </p>
    <p>
      Sinkkala is located in Uusimaa, Porvoo, about 10 km from the center of Porvoo.
      The main road (road 55) is about 500 meters away and Helsinki is about 60 km away.
      You’ll find more detailed information and a map from the <Link to="/en/contact/">Contact</Link>-page.
    </p>
    <p>Welcome to enjoy the good ol’ granny’s style accomodation!</p>
  </React.Fragment>
);

const FrontPage = (props) => {
  const {location} = props
  const language = extractLanguageFromLocation(location);
  return (
    <Layout {...props}>
      {language === 'fi' ? <Finnish/> : <English/>}
      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item bordered"
              src="https://www.youtube.com/embed/mlXhfW7d96k?rel=0&amp;showinfo=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="Sinkkala BB"
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-md-1"/>
      </div>
    </Layout>
  );
}

export default FrontPage;

