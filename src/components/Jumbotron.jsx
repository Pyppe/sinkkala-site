import React from 'react'

const Jumbotron = ({title, language}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1>Sinkkala{language === 'en' && ' cottage'}</h1>
      <p className="lead">
        {language === 'fi' ?
          'Mummola-majoitusta Porvoossa'
          :
          'Cosy accommodation in Porvoo'
        }
      </p>
    </div>
  </div>
);

export default Jumbotron;
