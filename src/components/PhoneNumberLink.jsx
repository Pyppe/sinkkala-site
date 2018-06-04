import React from 'react'
import { phoneNumber } from '../utils';

const PhoneNumberLink = () => <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>;

export default PhoneNumberLink;
