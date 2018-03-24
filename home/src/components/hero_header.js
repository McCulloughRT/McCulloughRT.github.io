import React, { Component } from 'react';
import Typist from 'react-typist';
import TweenLite from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';
const messages =  ['design buildings.','manage construction.','analyze data.','teach machines to learn.', 'make maps.', 'augment reality.'];

export default class HeroHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      typing: true,
      messageIdx: 0
    };

    this.doneTyping = this.doneTyping.bind(this);
  }

  doneTyping() {
    const currIdx = this.state.messageIdx;
    const newIdx = currIdx === (messages.length - 1) ? 0 : currIdx + 1;
    this.setState({ typing:false }, () => {
      setTimeout(() => this.setState({ typing: true, messageIdx: newIdx }), 2500);
    });
  }

  render() {
    const { typing, messageIdx } = this.state;
    const { height, width } = this.props;

    const wrapperStyle = { height: height + 'px' };
    const vidStyle = { position: 'absolute', overflow: 'hidden' };
    const vidWidth = (1280 * height) / 664;
    const vidHeight = (664 * width) / 1280;
    if (width > vidWidth) {
      vidStyle.height = String(vidHeight) + 'px';
      vidStyle.width = '100%';
    } else {
      vidStyle.height = '100%';
      vidStyle.width = String(vidWidth) + 'px';
      vidStyle.marginLeft = -((vidWidth - width) / 2);
    }

    return (
      <div id='wrapper' style={ wrapperStyle }>
        {/* <div className='imgHeader'></div> */}
        { width > 700 ?
          <div style={{ width: width, height: height, overflow: 'hidden', position: 'absolute' }}>
            <iframe scrolling='no' src='https://player.vimeo.com/video/229067695?autoplay=1&loop=1&background=1' frameBorder='0' style={ vidStyle }></iframe>
          </div>
          :
          <div></div>
        }
        <header style={ style.container }>
          <div className='header-content'>
            <div className='header-content-inner'>
              <div style={ style.heroHeading }>
                <span>Hi, I'm Ryan. I like to</span>
                { this.state.typing ?
                  <Typist onTypingDone={ this.doneTyping } cursor={{ show: true, blink: true }}>
                    <span>{ messages[messageIdx] }</span>
                  </Typist>
                  :
                  <div className='Typist'><span>{ messages[messageIdx] } <div className='Typist Cursor'>|</div></span></div>
                }
              </div>

              <div className='btn btn-primary btn-xl page-scroll' onClick={ () => TweenLite.to(window, .8, {scrollTo: '#work-wrapper'})} style={{ marginTop: '50px' }}>Browse Projects</div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const style = {
  container: {
    position: 'relative',
    background: 'rgba(42, 50, 63, 0.85)',
    height: '100%'
  },
  heroHeading: {
    fontSize: '2.9em',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    color: 'white'
  }
};
