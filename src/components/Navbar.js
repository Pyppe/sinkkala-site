import React from 'react'
import _ from 'lodash'
import {Link} from 'gatsby'
import Flag from './Flag'

const PageLink = ({to, children, active}) => (
  <li className={'nav-item' + (active ? ' active' : '')}>
    <Link className="nav-link" to={to}>{children}</Link>
  </li>
);

const navigation = {
  fi: {
    'Etusivu'          : '/',
    'Huoneet ja kuvat' : '/fi/huoneet-ja-kuvat/',
    'Yhteystiedot    ' : '/fi/yhteystiedot/',
  },
  en: {
    'Front page'       : '/en/frontpage/',
    'Rooms and images' : '/en/rooms-and-images/',
    'Contact'          : '/en/contact/',
  }
};

const isSamePage = (a, b) => {
  const re = new RegExp('/+$');
  return a.replace(re, '') === b.replace(re, '');
};

const determineLinkForAnotherLanguage = (language, currentPath, currentLanguage) => {
  const paths = _.values(navigation[currentLanguage]);
  const idx = _.findIndex(paths, (path, idx) => {
    return (idx === 0 && path === currentPath) || _.startsWith(path, currentPath);
  });
  return _.values(navigation[language])[idx];
};

const currentTitle = (language, path) => (
  _.findKey(navigation[language], k => isSamePage(k, path))
);

const LanguagePageLinks = ({currentPath, currentLanguage}) => (
  <React.Fragment>
    {_.map(_.keys(navigation), lang => {
      const active = lang === currentLanguage;
      const link = active ? currentPath : determineLinkForAnotherLanguage(lang, currentPath, currentLanguage);
      const text = lang === 'fi' ? 'Suomeksi' : 'In English';
      return (
        <PageLink key={lang} to={link} active={active}>
          <span className="d-md-none">{text}&nbsp;&nbsp;</span> <Flag code={lang} active={active} />
        </PageLink>
      );
    })}
  </React.Fragment>
);

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }
  render() {
    const { language, currentPath } = this.props;
    const {isOpen} = this.state;
    return (
      <nav id="topbar" className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <span className="navbar-brand">{currentTitle(language, currentPath)}</span>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => {
              this.setState({isOpen: !this.state.isOpen});
            }}
          >
            <i className="fa fa-bars hamburger"></i>
          </button>

          <div className={`navbar-collapse ${isOpen ? '' : 'collapse'}`}>
            {/* Left side */}
            <ul className="navbar-nav mr-auto">
              {_.map(navigation[language], (path, name) => (
                <PageLink key={path} to={path} active={isSamePage(path, currentPath)}>{name}</PageLink>
              ))}
            </ul>
            {/* Right side */}
            <ul className="navbar-nav mr-right">
              <LanguagePageLinks currentLanguage={language} currentPath={currentPath} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
