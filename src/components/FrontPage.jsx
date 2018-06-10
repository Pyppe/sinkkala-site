import React from 'react'
import Link from 'gatsby-link'
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
      Porvoossa sijaitseva Sinkkala tarjoaa kodikasta majoitusta joko aamiaisen kera tai ilman.
      Makuuhuoneita on ainoastaan neljä, joten talo sopii mainiosti rauhaa rakastaville ja kodikkaasta majoituksesta nauttiville vieraille.
      Olette tervetulleita viipymään Sinkkalassa joko yhden tai useamman yön tai jopa viikon.
      Vuoteet on sijattu valmiiksi ja halutessanne aamiaistarvikkeet löytyvät keittiöstä,
      jotta voitte nauttia aamiaisen silloin, kun teille parhaiten sopii.
    </p>
    <p>
      Talon voi vuokrata myös kokonaan omaan käyttöön mökkinä joko yhdeksi yöksi, viikoksi tai pidemmäksikin aikaa.
      Sinkkala on käytettävissä ympäri vuoden.
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
      Sinkkala is a cottage with good ol’ granny’s atmosphere, located at the green countryside of Porvoo.
      The large yard is overshadowed by the aged trees, and surrounded by the old household constructions creating its own peaceful setting.
      The neighbors are close, but far enough for privacy.
      The garden is relaxing, and spacious for children to play and run around.
    </p>
    <h2>Cosy accommodation in Porvoo</h2>
    <p>
      Sinkkala, located in Porvoo, offers cozy accommodation with or without breakfast.
      There are only four bedrooms, so the house is ideal for those who value peace and quiet.
      You are most welcome to stay in Sinkkala either for just one or two days, or even weeks.
      Beds are made, and if you wish, breakfast items can be found in the kitchen at your pleasure.
    </p>
    <p>
      The whole house can also be rented for your own use as a cottage for either one night, one week or even longer.
      Sinkkala is open all year round.
    </p>
    <p>
      Sinkkala is located in Uusimaa, Porvoo, about 10 km from the center of Porvoo.
      The main road (road 55) is about 500 meters away and Helsinki is about 60 km away.
      You’ll find more detailed information and a map from the <Link to="/en/contact/">Contact</Link>-page.
    </p>
    <p>Welcome to enjoy the good ol’ granny’s style accomodation!</p>
  </React.Fragment>
);

const FrontPage = ({location}) => {
  const language = extractLanguageFromLocation(location);
  return (
    <div>
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
    </div>
  );
}

export default FrontPage;

