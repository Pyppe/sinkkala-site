import React from 'react'
import Link from 'gatsby-link'
import {extractLanguageFromLocation} from '../utils'

const i18n = {
  intro: {
    fi: `Varaa unohtumaton aamiaismajoitus ottamalla meihin yhteyttä.
         Maalaistalon yhteystiedot löydät alla olevasta taulukosta.`,
    en: `The contact information of the Bed & Breakfast Sinkkala is available in the table below.
         Please feel free to contact us to book your accommodation in Porvoo!`
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

const ContactPage = ({location}) => {
  const language = extractLanguageFromLocation(location);

  return (
    <div className="row">
      <div className="col-lg-6">
        <blockquote className="blockquote">
          <p>{i18n.intro[language]}</p>
        </blockquote>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>{i18n.phone[language]}</th>
              <td>+358 40 821 7021</td>
            </tr>
            <tr>
              <th>{i18n.email[language]}</th>
              <td><a href="mailto:sinkkala@sinkkala.fi">sinkkala@sinkkala.fi</a></td>
            </tr>
            <tr>
              <th>{i18n.address[language]}</th>
              <td>Sinkkalantie 29, 06500 Porvoo</td>
            </tr>
            <tr>
              <th>{i18n.socialMedia[language]}</th>
              <td>
                <a href="https://www.facebook.com/Sinkkala-Bed-Breakfast-458129604293038/" target="_blank">
                  Facebook <i className="fa fa-facebook-square" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-lg-6">
        <iframe
          className="bordered"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125868.86644490593!2d25.45051031553027!3d60.46665717337106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12f3173399a03240!2sBed+and+Breakfast+Sinkkala!5e0!3m2!1sen!2sfi!4v1527352794481"
          allowFullScreen
          style={{height: 400, width: '100%'}}
        />
      </div>
    </div>
  );
};

export default ContactPage;
