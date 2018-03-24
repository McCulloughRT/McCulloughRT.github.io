import React,{Component} from 'react';
import { json as requestJson } from 'd3-request';
import Waypoint from 'react-waypoint';

import Navigation from './navigation';
import HeroHeader from './hero_header';
import About from './about';
import Portfolio from './Portfolio';
import Me from './me';
import Newsletter from './newsletter';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        projects: [],
        about: {},
        me: {},
        waypointPassed: false
      };

      this._updateDimensions = this._updateDimensions.bind(this);
      this._orientationChange = this._orientationChange.bind(this);
      this._onLeaveHandler = this._onLeaveHandler.bind(this);
      this._onEnterHandler = this._onEnterHandler.bind(this);
    }

    _onLeaveHandler() {
      this.setState({
        waypointPassed: true
      });
    }

    _onEnterHandler() {
      this.setState({
        waypointPassed: false
      });
    }

    _orientationChange() {
      const newHeight = window.innerHeight;
      const newWidth = window.innerWidth;
      this.setState({ windowHeight: newHeight, windowWidth: newWidth });
    }

    _updateDimensions() {
      const newHeight = window.innerHeight;
      const newWidth = window.innerWidth;
      if (window.orientation !== undefined) return;
      this.setState({ windowHeight: newHeight, windowWidth: newWidth });
    }

    componentWillMount() {
      this._updateDimensions();
    }

    componentDidMount() {
      window.addEventListener('resize', this._updateDimensions);
      window.addEventListener('orientationchange', this._orientationChange);
      requestJson('https://raw.githubusercontent.com/McCulloughRT/McCulloughRT.github.io/master/home/data/projects.json', (error, response) => {
        if(error) console.log(error);
        this.setState({ projects: response });
      });
      requestJson('https://raw.githubusercontent.com/McCulloughRT/McCulloughRT.github.io/master/home/data/about.json', (error, response) => {
        if(error) console.log(error);
        this.setState({ about: response });
      });
      requestJson('https://raw.githubusercontent.com/McCulloughRT/McCulloughRT.github.io/master/home/data/me.json', (error, response) => {
        if(error) console.log(error);
        this.setState({ me: response });
      });
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._updateDimensions);
      window.removeEventListener('orientationchange', this._orientationChange);
    }

    render() {
        const { windowHeight, windowWidth, projects, about, me, waypointPassed } = this.state;

        return (
          <div>
            <Navigation waypointPassed={ waypointPassed } />
            <HeroHeader height={ windowHeight } width={ windowWidth }/>
            <Waypoint onLeave={ this._onLeaveHandler } onEnter={ this._onEnterHandler}/>
            <Newsletter text={ about }/>
            <Portfolio width={ windowWidth } items={ projects }/>
            <Me text={ me }/>
          </div>
        );
    }
}

const style = {
  hero: {
    textAlign: 'center',
    background: 'red',
    minHeight: '100%'
  }
};
