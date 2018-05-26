import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav id="topbar" className="navbar navbar-expand-sm navbar-light">
    <div className="container">
      {/* Brand */}
      <img id="site-logo" src="/img/pyppe_selfie.jpg" alt="" />
      <a className="navbar-brand lang-fi" href="/">Pyppe.fi</a>
      <a className="navbar-brand lang-en" href="/frontpage/">Pyppe.fi</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars hamburger"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left side */}
        <ul className="navbar-nav mr-auto">
          <li className="lang-fi lifeStory nav-item"><a className="nav-link" href="/page-2/">Page 2</a></li>
        </ul>
        {/* Right side */}
        <ul className="navbar-nav mr-right">
          <li className="lang-en nav-item">
            <a href="/" className="change-lang nav-link">
              <img src="/img/flag/fi.png" /> Suomeksi
            </a>
          </li>
          <li className="lang-fi nav-item">
            <a href="/" className="change-lang nav-link">
              <img src="/img/flag/us.png" /> In English
            </a>
          </li>
          </ul>
      </div>
    </div>
  </nav>
)

export default Header
