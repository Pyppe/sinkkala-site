import React from 'react'


const Footer = ({ code, active }) => {
  const props = {height: active ? 20 : 16, className: "flag"};
  return (
    <div className="container footer">
      <div>
        <i className="fa fa-lg fa-map-marker" /> Sinkkalantie 29, 06500 Porvoo
      </div>
      <div>
        <i className="fa fa-phone" /> <a href="tel:+358 40 821 7021">+358 40 821 7021</a>
      </div>
      <div>
        <a href="https://www.facebook.com/Sinkkala-Bed-Breakfast-458129604293038/" target="_blank">
          <i className="fa fa-lg fa-facebook-square" /> Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
