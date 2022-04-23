import React from 'react'
import Layout from "./layout"
import {extractLanguageFromLocation, facebookPageUrl} from '../utils'
import EmailAddressLink from './EmailAddressLink'
import ExtLink from './ExtLink';
import PhoneNumberLink from './PhoneNumberLink'
import StreetAddressLink from './StreetAddressLink';

const i18n = {
  intro: {
    fi: (
      <>
        <p>
          Hinnat ja varaustilanteen löydät osoitteesta{' '}
          <ExtLink href="https://www.nettimokki.com/porvoo/9597">
            Nettimökki.com <i className="fa fa-external-link-square" />
          </ExtLink>
        </p>
        <p>
          Varaa unohtumaton majoitus ottamalla meihin yhteyttä.
          Maalaistalon yhteystiedot löydät alla olevasta taulukosta.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          Prices and reservations can be found in{' '}
          <ExtLink href="https://www.nettimokki.com/en/porvoo/9597" target="_blank">
            Nettimokki.com <i className="fa fa-external-link-square" />
          </ExtLink>
        </p>
        <p>
          The contact information of Sinkkala cottage is available below.
        </p>
      </>
    )
  },
  phone: {
    fi: 'Puhelinnumero',
    en: 'Phone number',
  },
  email: {
    fi: 'Sähköposti',
    en: 'E-mail',
  },
  address: {
    fi: 'Osoite',
    en: 'Address',
  },
  socialMedia: {
    fi: 'Sosiaalinen media',
    en: 'Social media',
  },
};

const ContactPage = (props) => {
  const language = extractLanguageFromLocation(props.location);

  return (
    <Layout {...props}>
      <div className="row">
        <div className="col-lg-6">
          {i18n.intro[language]}
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>{i18n.phone[language]}</th>
                <td><PhoneNumberLink/></td>
              </tr>
              <tr>
                <th>{i18n.email[language]}</th>
                <td><EmailAddressLink /></td>
              </tr>
              <tr>
                <th>{i18n.address[language]}</th>
                <td><StreetAddressLink /></td>
              </tr>
              <tr>
                <th>{i18n.socialMedia[language]}</th>
                <td>
                  <ExtLink href={facebookPageUrl}>
                    Facebook <i className="fa fa-facebook-square" />
                  </ExtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-6">
          <iframe
            className="bordered"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125868.86644490593!2d25.45051031553027!3d60.46665717337106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12f3173399a03240!2sBed+and+Breakfast+Sinkkala!5e0!3m2!1sen!2sfi!4v1527352794481"
            title="Sinkkala in Google Maps"
            allowFullScreen
            style={{height: 400, width: '100%'}}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
