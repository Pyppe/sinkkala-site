import React from 'react'
import Link from 'gatsby-link'
import {extractLanguageFromLocation} from '../utils'

const English = () => (
  <React.Fragment>
    <p>
    Sinkkala on mummola-tunnelmaa huokuva maalaistalo keskellä vehreää porvoolaista
    maalaismaisemaa. Laajaa pihapiiriä varjostavat ikivanhat puut. Pihaa reunustavat talousrakennukset
    luovat sille oman rauhoitetun maailmansa. Naapurit sijaitsevat lähellä, mutta silti lähes näkymättömissä.
    Lapsille ja lapsenmielisille on pihalla tilaa temmeltää.
    </p>
    <h2>Cosy accommodation in Porvoo</h2>
    <p>
      The Bed and Breakfast Sinkkala is open all year round. You may choose to stay just for one night,
      or a longer period of time. The beds are made for you, and you can enjoy the breakfast in the
      kitchen at your convenience. We offer a free wireless Internet access. The radio and TV with
      the DVD-player are available in the common area. It is also possible to rent the whole house
      for you and your company to enjoy.
    </p>
    <p>
      It is easy to arrive at Bed and Breakfast Sinkkala. The main road (#55) is just about 500 meters
      away and the city of Porvoo is only 10 kilometers away. Helsinki, the capital city of Finland,
      is at distance of 60 kilometers. You’ll find more detailed information and a map
      from the <Link to="/en/contact/">Contact</Link>-page.
      If you are looking for a cosy accommodation in Porvoo, the Bed and Breakfast Sinkkala is the place to stay!
    </p>
    <p>Welcome to enjoy the good ol’ granny’s style accomodation!</p>
  </React.Fragment>
);

const Finnish = () => (
  <React.Fragment>
    <p>
      Sinkkala on mummola-tunnelmaa huokuva maalaistalo keskellä vehreää porvoolaista
      maalaismaisemaa. Laajaa pihapiiriä varjostavat ikivanhat puut. Pihaa reunustavat talousrakennukset
      luovat sille oman rauhoitetun maailmansa. Naapurit sijaitsevat lähellä, mutta silti lähes näkymättömissä.
      Lapsille ja lapsenmielisille on pihalla tilaa temmeltää.
    </p>
    <h2>Mummola-majoitusta Porvoossa</h2>
    <p>
      Porvoossa sijaitseva Sinkkala tarjoaa kodikasta majoitusta joko aamiaisen kera tai ilman.
      Makuuhuoneita on ainoastaan neljä, joten talo sopii mainiosti rauhaa rakastaville ja kodikkaasta
      majoituksesta nauttiville vieraille. Olette tervetulleita viipymään Sinkkalassa joko yhden tai useamman
      yön tai jopa viikon. Vuoteet on sijattu valmiiksi ja halutessanne aamiaistarvikkeet löytyvät keittiöstä,
      jotta voitte nauttia aamiaisen silloin, kun teille parhaiten sopii.
    </p>
    <p>
      Talon voi vuokrata myös kokonaan omaan käyttöön mökkinä joko yhdeksi yöksi, viikoksi tai
      pidemmäksikin aikaa. Sinkkala on käytettävissä ympäri vuoden.
    </p>
    <p>
      Sinkkala sijaitsee Uudellamaalla Porvoossa, noin 10 km päässä Porvoon keskustasta.
      Päätie (tie n:o 55) on noin 500 metrin päässä ja Helsinkiin matkaa on noin 60 km.
      Katso tarkemmat tiedot <Link to='/fi/yhteystiedot/'>Yhteystiedot</Link>-sivulta.
    </p>
    <p>
      Olette sydämellisesti tervetulleita nauttimaan todella erilaisesta,
      kodinomaisesta ja lämminhenkisestä majoituksesta.
    </p>
    <p>
      Tervetuloa kylään!
    </p>
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

