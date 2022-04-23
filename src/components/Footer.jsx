import React from 'react'
import PhoneNumberLink from './PhoneNumberLink';
import { facebookPageUrl } from '../utils';
import EmailAddressLink from './EmailAddressLink';
import StreetAddressLink from './StreetAddressLink';
import ExtLink from './ExtLink';

const Entry = ({icon, children}) => (
  <div className="entry">
    <i className={`fa fa-lg ${icon}`} /> {children}
  </div>
);

const Footer = ({ code, active }) => (
  <div className="container footer">
    <Entry icon="fa-map-marker"><StreetAddressLink /></Entry>
    <Entry icon="fa-phone"><PhoneNumberLink/></Entry>
    <Entry icon="fa-envelope"><EmailAddressLink/></Entry>
    <Entry icon="fa-facebook-square"><ExtLink href={facebookPageUrl}>Facebook</ExtLink></Entry>
    <div style={{clear:'both', marginBottom: '40px'}}/>
  </div>
);

export default Footer;
