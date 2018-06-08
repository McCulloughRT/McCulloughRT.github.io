const fs = require('fs');
const turf = require('@turf/turf');
// const turfHelpers = require('@turf/helpers');
// const booleanPointInPolygon = require('@turf/boolean-point-in-polygon');
// const centerOfMass = require('@turf/center-of-mass');

const blockgroups = JSON.parse(fs.readFileSync('./exploded_blockgroups.geojson')).features;
const lots = JSON.parse(fs.readFileSync('./exploded_lots.geojson')).features;

for (var i = 0; i < lots.length; i++) {
	const lot = lots[i];
	const center = turf.centerOfMass(lot);
	for (var j = 0; j < blockgroups.length; j++) {
		const blockgrp = blockgroups[j];
		if(turf.booleanPointInPolygon(center, blockgrp)){
			lot.properties.rentBurden = blockgrp.properties.HD01_VD01;
		}
	}
}

const undefCount = lots.filter(lot => lot.properties.rentBurden === undefined).length;
const nullCount = lots.filter(lot => lot.properties.rentBurden === null).length;
console.log('Total: ' + lots.length);
console.log('Undefined: ' + undefCount);
console.log('Null: ' + nullCount);

fs.writeFileSync('./lotsWithRentBurden.geojson', JSON.stringify(lots));
console.log('All done!');

