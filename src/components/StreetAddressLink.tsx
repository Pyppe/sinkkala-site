import React from 'react'
import { streetAddress } from '../utils';

const StreetAddressLink = () => <a href={`https://www.google.com/maps/place/${encodeURIComponent(streetAddress)}`}>{streetAddress}</a>;

export default StreetAddressLink;
