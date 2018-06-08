const fs = require('fs');

const multifamZones = ['RH','RX','CN1','CN2','CO1','CO2','CM','CS','CG','CX','EX'];
const solarEfficiency = 15; // watts per square foot
const targetEUI = 49.5; // KBtu/sf/yr
const kbtuTokwh = 0.293;

const lots = JSON.parse(fs.readFileSync('./baselots_v3-3.geojson')).features;
console.log(lots.length);

const multiFamLots = lots.filter(lot => {
	return multifamZones.includes(lot.properties.zone)
});
console.log(multiFamLots.length);

const solarPotential = [];

for (var i = multiFamLots.length - 1; i >= 0; i--) {
	const lot = multiFamLots[i];
	const solar_kW = (solarEfficiency * (lot.properties.AREA * 0.6)) / 1000;
	// const floors = lot.properties.maxHeight > 0 ? Math.floor(lot.properties.maxHeight / 10) : 1;
	// const GSF = floors * lot.properties.AREA;
	const GSF = lot.properties.AREA * lot.properties.baseFAR;
	const EU = GSF * targetEUI;
	const eu_kW = (EU * kbtuTokwh) / 8760 // hours in a year;
	const energy_diff = solar_kW - eu_kW;

	const solarLot = {
		type: 'Feature',
		geometry: lot.geometry,
		properties: {
			solarPotential: solar_kW,
			energyUse: eu_kW,
			energy_diff: energy_diff
		}
	};

	solarPotential.push(solarLot);
}

const featureCollection = {
	type: 'FeatureCollection',
	features: solarPotential
};

fs.writeFileSync('./solarLots.geojson', JSON.stringify(featureCollection));
console.log('All done!');