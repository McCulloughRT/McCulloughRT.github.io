import React from 'react';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';

export default function Navigation(props) {
  const bgColor = props.waypointPassed ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0)';
  const txColor = props.waypointPassed ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)';
  return (
    <nav className='navbar navbar-default navbar-fixed-top' style={{ backgroundColor: bgColor }}>
      <div className='container-fluid'>
        {/* Brand and toggle get grouped for mobile display */}
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
            <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars'></i>
          </button>
          <a className='navbar-brand page-scroll' onClick={ () => TweenLite.to(window, .8, {scrollTo: '#page-top'})} style={{ color: txColor, cursor: 'pointer' }}>Ryan McCullough</a>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */}
        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a className='page-scroll' style={{ color: txColor, cursor: 'pointer' }} onClick={ () => TweenLite.to(window, .8, {scrollTo: '#work-wrapper'})}>Work</a></li>
            <li><a className='page-scroll' style={{ color: txColor, cursor: 'pointer' }} onClick={ () => TweenLite.to(window, .8, {scrollTo: '#me'})}>About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
