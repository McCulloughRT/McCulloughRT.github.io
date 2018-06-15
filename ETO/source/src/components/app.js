// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactMap from '../containers/ReactMap';
import Interface from '../containers/Interface';

const TOKEN = 'pk.eyJ1IjoicnlhbnRtIiwiYSI6ImNpaDgycjExZzB0NDR1MWtpbWdkeDhxbmIifQ.AamjhGik8yPxK5V71kzHdw';
// const LONG = -122.66661759147235;
// const LAT = 45.51886025215052;
// const ZOOM = 14.26;
const STYLE_ID = 'ryantm/cjig5j3r83p372so7maj4wgge';

export default class App extends Component {

  render() {
    return (
      <div>
        <Interface />
        <ReactMap
          token= { TOKEN }
          // longitude= { LONG }
          // latitude= { LAT }
          // zoom= { ZOOM }
          showPopUp= { true }
          styleID = { STYLE_ID }
        />
      </div>
    );
  }
}
