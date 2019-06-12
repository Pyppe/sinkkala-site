import React from 'react'
import {Link} from 'gatsby'
import Layout from './layout'
import {extractLanguageFromLocation} from '../utils'

const i18n = {
  roomForTwo: {
    fi: '2 hengen huone',
    en: 'Double room'
  },
  roomForOne: {
    fi: '1 hengen huone',
    en: 'Single room',
  },
  roomForFamily: {
    fi: 'Perhehuone',
    en: 'Family room',
  },
  startingAt: price => ({
    fi: `alkaen ${price} €`,
    en: `starting at ${price} €`,
  }),
};

const PricesPage = (props) => {
  const language = extractLanguageFromLocation(props.location);
  return (
    <Layout {...props}>
      <div className="row">
        <div className="col-lg-6">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>{i18n.roomForTwo[language]}</th>
                <td>{i18n.startingAt(65)[language]}</td>
              </tr>
              <tr>
                <th>{i18n.roomForOne[language]}</th>
                <td>{i18n.startingAt(45)[language]}</td>
              </tr>
              <tr>
                <th>{i18n.roomForFamily[language]}</th>
                <td>{i18n.startingAt(85)[language]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-6">
          <ul>
            {language === 'fi' ?
              <React.Fragment>
                <li>Majoituksen hintaan sisältyvät liinavaatteet, pyyhkeet, langaton Internet-yhteys sekä kahvi ja tee.</li>
                <li>Tarvikkeet omatoimiseen aamiaiseen 7 €/hlö.</li>
                <li>Varaa majoitus ottamalla meihin yhteyttä. Yhteystiedot löydät <Link to="/fi/yhteystiedot">täältä</Link>.</li>
                <li>Maksutapana käteinen tai MobilePay.</li>
                <li>Pidemmät ajanjaksot vkl/vko sopimuksen mukaan. Avoinna ympäri vuoden.</li>
              </React.Fragment>
              :
              <React.Fragment>
                <li>Accommodation prices include bed linens, towels, WiFi, and coffee & tea.</li>
                <li>Supplies for making your own breakfast:  7€/person.</li>
                <li>Contact us to book your accommodation in Porvoo. The contact details can be seen <Link to="/en/contact">here</Link>.</li>
                <li>Payment with cash or MobilePay.</li>
                <li>Ask for an offer for longer periods of time (e.g. a weekend or a whole week). Open all year round.</li>
              </React.Fragment>
            }
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PricesPage;
