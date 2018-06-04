import React from 'react'
import PhoneNumberLink from './PhoneNumberLink';
import { streetAddress, facebookPageUrl } from '../utils';
import EmailAddressLink from './EmailAddressLink';

const Entry = ({icon, children}) => (
  <div className="entry">
    <i className={`fa fa-lg ${icon}`} /> {children}
  </div>
);

const Footer = ({ code, active }) => (
  <div className="container footer">
    <Entry icon="fa-map-marker">{streetAddress}</Entry>
    <Entry icon="fa-phone"><PhoneNumberLink/></Entry>
    <Entry icon="fa-envelope"><EmailAddressLink/></Entry>
    <Entry icon="fa-facebook-square"><a href={facebookPageUrl} target="_blank">Facebook</a></Entry>
    <div style={{clear:'both', marginBottom: '40px'}}/>
  </div>
);

export default Footer;
