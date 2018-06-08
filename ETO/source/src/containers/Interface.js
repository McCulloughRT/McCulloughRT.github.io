import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import debounce from 'debounce';

import { changeViz, changeValue } from '../actions/index';

class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solarCoverage: this.props.userInt.get('solarCoverage'),
      solarEfficiency: this.props.userInt.get('solarEfficiency'),
      eui: this.props.userInt.get('eui'),
      minRentBurden: this.props.userInt.get('minRentBurden')
    }

    this.handleChange = this.handleChange.bind(this);
    this.changed = debounce(this.props.changeValue, 750);
  }

  handleChange(event, type) {
    const val = event.target.value;
    this.setState({ [type]: parseFloat(val) }, () => {
      this.changed(val, type);
    })
  }

  presetChange(event, type) {
    let val;
    if(event.target.checked) {
      val = presets[type];
    } else {
      val = null;
    }
    this.props.changeValue(val, 'zones');
  }

  render() {
    const solarCoverage = this.props.userInt.get('solarCoverage');
    const solarEfficiency = this.props.userInt.get('solarEfficiency');
    const eui = this.props.userInt.get('eui');
    const minRentBurden = this.props.userInt.get('minRentBurden');

    const chkboxes = Object.keys(presets).map(preset => {
      return (
        <div style={{ float:'left', marginLeft: '10px' }} key={ 'preset_' + preset }>
          <input
            type='checkbox'
            onChange={ (e) => this.presetChange(e, preset) }/> { preset }
        </div>
      );
    });

    return (
      <div id='ui' style={ style.ui }>
        <div style={ style.header }>Adjust Assumptions:</div>
        <div style={ style.zoneContainer } id='zone_presets'>
          { chkboxes }
        </div>
        <div>
          <div style={ style.sliderContainer}>
            <div>PV Coverage of Lot Area: { this.state.solarCoverage } %</div>
            <input type="range" min='0' max='100' value={ this.state.solarCoverage } step='5' className="form-control-range" id="solarCoverage" onChange={ (e) => this.handleChange(e, 'solarCoverage') } />
          </div>
          <div style={ style.sliderContainer}>
            <div>Power of Solar Panel: { this.state.solarEfficiency } Watt/SF</div>
            <input type="range" min='10' max='20' value={ this.state.solarEfficiency } step='0.5' className="form-control-range" id="solarEfficiency" onChange={ (e) => this.handleChange(e, 'solarEfficiency') } />
          </div>
          <div style={ style.sliderContainer}>
            <div>Anticipated EUI: { this.state.eui } kBTU/sf/yr</div>
            <input type="range" min='1' max='100' value={ this.state.eui } step='1' className="form-control-range" id="eui" onChange={ (e) => this.handleChange(e, 'eui') } />
          </div>
          <div style={ style.sliderContainer}>
            <div>Minimum Amount of Rent Burden: { this.state.minRentBurden } %</div>
            <input type="range" min='0' max='100' value={ this.state.minRentBurden } step='5' className="form-control-range" id="minRentBurden" onChange={ (e) => this.handleChange(e, 'minRentBurden') } />
          </div>
        </div>
        {/* static color legend: */}
        <div className='container' style={ style.legendBox }>
          <div style={ style.legendGradient }></div>
          <div className='row'>
            <div id='leftTxt' className='col-md-6' style={{ text: 'align-left'}}>Low</div>
            <div id='rightTxt' className='col-md-6' style={{ text: 'align-right'}}>High</div>
          </div>
        </div>
        <div style={ style.reminder }>Click on a building for more information!</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeViz: changeViz,
    changeValue: changeValue
  },dispatch);
}
function mapStateToProps(state) {
  return{
    userInt: state.userInterface
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Interface);

const presets = {
  // SingleFam: ['RF','R20','R10','R7','R5','R2.5'],
  MultiFam: ['RH','RX','CN1','CN2','CO1','CO2','CM','CS','CG','CX','EX'],
  Office: ['CN2','CO1','CO2','CS','CG','CX','EX'],
  Retail: ['CN2','CS','CG','CX','EX'],
  Industrial: ['EG1','EG2','EX','IG1','IG2','IH']
};

const style = {
  zoneContainer: {
    marginBottom: '20px',
    height: '19px'
  },
  sliderContainer: {
    marginBottom: '10px',
    marginTop: '10px'
  },
  ui: {
    zIndex: 2,
    position: 'absolute',
    top: '20px',
    right: '20px',
    borderRadius: '7px',
    width: '350px',
    background: 'white',
    padding: '15px'
  },
  legendBox: {
    zIndex: 2,
    background: 'rgba(200,200,200,.55)',
    height: '55px',
    width: '100%',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '5px',
    fontSize: 'x-small',
    marginTop: '30px'
  },
  legendGradient: {
    height: '10px',
    width: '100%',
    background: 'linear-gradient(to right, #f7fbff, #084594)',
    borderRadius: '10px',
    marginBottom: '5px'
  },
  header: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  reminder: {
    fontSize: 'x-small',
    marginTop: '10px',
    marginLeft: '10px'
  }
};
