import Immutable from 'immutable';
import { buildingData } from '../data/buildingData';

export default function StylesheetReducer(styleState = null, action) {
  if(styleState === null && action.type !== 'SET_STYLE') return styleState;
  switch(action.type){
    case 'SET_STYLE': {
      return Immutable.fromJS(action.payload);
    }

    case 'CHANGE_VALUE': {
      console.log('CHANGE_VALUE');
      const { val, type } = action.payload;
      const LAYER_ID = 'lotsareaburden-v102';
      const layerIdx = styleState.get('layers').findIndex(layer => layer.get('id') === LAYER_ID);

      switch(type) {
        case 'solarCoverage': {
          const newStyle = styleState.setIn(['layers', layerIdx, 'filter', 1, 1, 1, 1, 1, 2], (parseFloat(val) / 100));
          return newStyle;
          break;
        }
        case 'solarEfficiency': {
          const newStyle = styleState.setIn(['layers', layerIdx, 'filter', 1, 1, 1, 1, 2], (parseFloat(val)));
          return newStyle;
          break;
        }
        case 'eui': {
          const newStyle = styleState.setIn(['layers', layerIdx, 'filter', 1, 1, 2, 1, 1, 2], (parseFloat(val)));
          return newStyle;
          break;
        }
        case 'minRentBurden': {
          const newStyle = styleState.setIn(['layers', layerIdx, 'filter', 2, 2], (parseFloat(val)));
          return newStyle;
          break;
        }
        case 'zones': {
          let zones;
          if(val === null) {
            zones = true;
          } else {
            zones = val.map(e => ['==', ['get', 'd'], e]);
            zones.unshift('any');
          }

          const newStyle = styleState.setIn(['layers', layerIdx, 'filter', 3], zones);
          return newStyle;
          break;
        }
        default: {
          return styleState;
        }
      }
    }

    case 'UPDATE_FILTERS': {
      console.log('UPDATE_FILTERS');
      const LAYER_ID = 'lotsareaburden-v102';
      const layerIdx = styleState.get('layers').findIndex(layer => layer.get('id') === LAYER_ID);
      const { solarCoverage, solarEfficiency, eui, minRentBurden, zones } = action.payload;

      const filter = ['all',[
          '>',
          [
              '-',
              ['/', ['*', ['*',['to-number',['get','b']], (solarCoverage / 100)], solarEfficiency], 1000], // kW production
              ['/', ['/', ['*', ['*', ['to-number', ['get','b']], ['to-number', ['coalesce',['get','c'],1]]], eui], 3.412142], 8760] // kW consumption
          ],
          0
      ], ['>', ['to-number',['get','a']], minRentBurden], true];

      const newStyle = styleState.updateIn(['layers', layerIdx], property => {
        return property.set('filter', Immutable.fromJS(filter));
      });

      return newStyle;
    }

    case 'CHANGE_VIZ': {
      const LAYER_ID = 'buildings';
      const { minAge, maxAge, minUnits, maxUnits, minSqft, maxSqft } = buildingData;
      const { categoryStops, lightBlue, darkBlue } = buildingData;
      const layerIdx = styleState.get('layers').findIndex(layer => layer.get('id') === LAYER_ID);
      let paint = {}; // <= not a constant, dont use elsewhere in this scope

      switch(action.payload) {
        case 'age':
          paint.property = 'YEAR_BUILT';
          paint.type = 'exponential';
          paint.stops = [[minAge,lightBlue],[maxAge,darkBlue]]
          break;
        case 'sqft':
          paint.property = 'BLDG_SQFT';
          paint.type = 'exponential';
          paint.stops = [[minSqft,lightBlue],[maxSqft,darkBlue]]
          break;
        case 'units':
          paint.property = 'UNITS_RES';
          paint.type = 'exponential';
          paint.stops = [[minUnits,lightBlue],[maxUnits,darkBlue]]
          break;
        case 'use':
          paint.property = 'BLDG_USE';
          paint.type = 'categorical';
          paint.stops = categoryStops;
          break;
        default:
          paint = darkBlue;
      }

      const newStyle = styleState.updateIn(['layers', layerIdx, 'paint'], property => {
        return property.set('fill-extrusion-color', paint);
      });
      return newStyle
    }

    default: return styleState;
  }
}
