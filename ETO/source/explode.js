const fs = require('fs');
const turfHelpers = require('@turf/helpers');

const data = JSON.parse(fs.readFileSync('./solarLots.geojson')).features;

const exploded_data = [];
for (var i = 0; i < data.length; i++) {
	const feature = data[i];
	if(feature.geometry.type === 'Polygon') {
		exploded_data.push(feature);
	} else if(feature.geometry.type === 'MultiPolygon') {
		feature.geometry.coordinates.forEach(coords => {
			const newFeature = turfHelpers.polygon(coords, feature.properties);
			exploded_data.push(newFeature);
		});
	} else {
		continue;
	}
}

console.log(exploded_data.length);
console.log(data.length);

const featureCollection = {
	type: 'FeatureCollection',
	features: exploded_data
}

fs.writeFileSync('./exploded_lots.geojson', JSON.stringify(featureCollection));
console.log('All done!');