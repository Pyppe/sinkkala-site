import React from 'react'
import { emailAddress } from '../utils';

const EmailAddressLink = () => <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;

export default EmailAddressLink;
