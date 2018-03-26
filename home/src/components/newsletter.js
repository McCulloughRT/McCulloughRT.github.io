import React from 'react';

export default function About(props) {
  const { archText, codingText, dataText } = props.text;
  return (
    <section id='newsletter' style={ style.section }>
      <div className='container'>
        <div className='row' style={ style.headRow }>
          <div className='col-lg-8 col-lg-offset-2 text-center'>
            <p style={ style.heading }>Newsletter: Build the Future</p>
            <p style={ style.subHeading }>Sign up for my newletter for weekly briefs of what's interesting at the intersection of technology and the built environment!</p>
          </div>
        </div>
        <div className='col-md-12 text-center' id='subscribeBtn'>
          <a href='http://eepurl.com/do4KDf' target='_blank' className='btn btn-default default-override' style={{ ...style.subscribe, marginRight: '20px' }}>Subscribe</a>
          <a href='https://us17.campaign-archive.com/home/?u=e5cfc6c4abd932f2ccb1ceec4&id=c252272ed8' target='_blank' className='btn btn-default default-override' style={{ ...style.subscribe, marginLeft: '20px' }}>Archive</a>
        </div>
        {/* <div className='row'>
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
        </div> */}
      </div>
    </section>
  );
}

const style = {
  subscribe: {
    // backgroundColor: '#DDD',
    borderRadius: '5px',
    fontSize: '1.5em',
    fontWeight: '300'
  },
  section: {
    position: 'relative',
    background: '#FFF',
    // padding: '70px',
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
    marginBottom: '20px'
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
