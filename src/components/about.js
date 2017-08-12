import React from 'react';

const archText = `
  With a masters degree in Architecture and years of experience in design, detailing, and construction
  I'm comfortable with a wide variety of project sizes and construction types. This experience has also
  given me a keen sense for where inefficiencies in the process lie, and how emerging technologies can
  be used to counter them.
`;

const codingText = `
  Front-end React/Redux web apps, API servers, C# desktop applications
  for architectural design and production machine learning systems; software engineering is in my blood.
  Leveraging the computer to automate the tedious, and illuminate the important, makes architectural projects
  more financially feasible, beautiful, and functional.
`;

const dataText = `
  A love for numbers and a background in statistics fuels a love for data analysis. Working with tools such as
  python, scikit-learn, tensorflow, and gis packages, I explore our urban structure. This analysis leads to
  insights that drive business decisions like ideal site selection, geometric optimization, and massive scale
  cost/yield analysis.
`;

export default function About(props) {
  return (
    <section id='about' style={ style.section }>
      <div className='container'>
        <div className='row' style={ style.headRow }>
          <div className='col-lg-8 col-lg-offset-2 text-center'>
            <p style={ style.heading }>What I Do</p>
            <p style={ style.subHeading }>Bringing the power of data science and new technologies to an age old industry</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <i className="fa fa-building-o" style={ style.fa }></i>
            <h4 style={ style.title }>Architecture</h4>
            <p style={ style.description }>{ archText }</p>
          </div>
          <div className='col-md-4 text-center'>
            <i className="fa fa-code" style={ style.fa }></i>
            <h4 style={ style.title }>Coding</h4>
            <p style={ style.description }>{ codingText }</p>
          </div>
          <div className='col-md-4 text-center'>
            <i className="fa fa-bar-chart" style={ style.fa }></i>
            <h4 style={ style.title }>Data & Research</h4>
            <p style={ style.description }>{ dataText }</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const style = {
  section: {
    position: 'relative',
    background: '#FFF',
    padding: '70px',
    fontFamily: 'Montserrat'
  },
  fa: {
    fontSize: '4em',
    color: '#45BEAA'
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: '800',
    color: '#2A3A3F'
  },
  subHeading: {
    fontSize: '1.3em',
    fontWeight: '300',
    color: '#2A3A3F'
  },
  headRow: {
    marginBottom: '50px'
  },
  title: {
    fontSize: '2em',
    fontWeight: '700',
    color: '#2A3A3F',
    marginTop: '25px',
    marginBottom: '25px'
  },
  description: {
    fontSize: '0.97em',
    fontWeight: '300',
    color: '#aaa',
    textAlign: 'left',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
}
