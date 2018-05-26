import React from 'react'

const Jumbotron = ({title}) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">
           Bed and Breakast &mdash; Aamiaismajoitusta Porvoossa
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
