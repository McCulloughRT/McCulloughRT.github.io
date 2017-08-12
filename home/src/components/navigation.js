import React from 'react';

export default function Navigation(props) {
  return (
    <nav id='mainNav' className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        {/* Brand and toggle get grouped for mobile display */}
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
            <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars'></i>
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>Ryan McCullough</a>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */}
        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a className='page-scroll' href='http://mcculloughrt.github.io'>About</a></li>
            <li><a className='page-scroll' href='http://mcculloughrt.github.io/portfolio'>Portfolio</a></li>
            <li><a className='page-scroll' href='http://mcculloughrt.github.io/contact'>Contact</a></li>
            <li><a className='page-scroll' href='http://mcculloughrt.github.io/github'>GitHub</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
