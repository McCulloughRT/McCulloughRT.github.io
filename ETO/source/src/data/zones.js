export const zoneOptions = [
  {
  	label: 'Single-Dwellings',
    options: [
      { label: 'RF',value: 'RF' },
      { label: 'R20',value: 'R20' },
      { label: 'R10',value: 'R10' },
      { label: 'R7',value: 'R7' },
      { label: 'R5',value: 'R5' },
      { label: 'R2.5',value: 'R2.5' }
    ]
  },
  {
    label: 'Multi-Dwellings',
    options: [
      { label: 'R1',value: 'R1' },
      { label: 'R2',value: 'R2' },
      { label: 'R3',value: 'R3' },
      { label: 'RH',value: 'RH' },
      { label: 'RX',value: 'RX' }
    ]
  },
  {
    label: 'Commercial',
    options: [
      { label: 'CN1', value: 'CN1' },
      { label: 'CN2', value: 'CN2' },
      { label: 'CO1', value: 'CO1' },
      { label: 'CO2', value: 'CO2' },
      { label: 'CM', value: 'CM' },
      { label: 'CS', value: 'CS' },
      { label: 'CG', value: 'CG' },
      { label: 'CX', value: 'CX' }
    ]
  },
  {
    label: 'Employment / Industrial',
    options: [
      { label: 'EG1', value: 'EG1' },
      { label: 'EG2', value: 'EG2' },
      { label: 'EX', value: 'EX' },
      { label: 'IG1', value: 'IG1' },
      { label: 'IG2', value: 'IG2' },
      { label: 'IH', value: 'IH' }
    ]
  },
  {
    label: 'Open Space',
    options: [
      { label: 'OS', value: 'OS' }
    ]
  }
];

export const pdOptions = [
	{ label: 'Albina Community', value: 'AC' },
	{ label: 'Central City', value: 'CC' },
	{ label: 'Central City South Auditorium', value: 'CCSA' },
	{ label: 'Cascade Station', value: 'CP' },
	{ label: 'North Cully', value: 'CY' },
	{ label: 'East Corridor', value: 'EC' },
	{ label: 'Eastmoreland', value: 'EM' },
	{ label: 'Gateway', value: 'GA' },
	{ label: 'Glendover', value: 'GL' },
	{ label: 'Guilds Lake', value: 'GS' },
	{ label: 'Hillsdale', value: 'HD' },
	{ label: 'Healy Heights', value: 'HH' },
	{ label: 'Hayden Island', value: 'HI' },
	{ label: 'Hollywood', value: 'HW' },
	{ label: 'Johnson Creek', value: 'JC' },
	{ label: 'Kenton', value: 'KN' },
	{ label: 'Laurelhurst', value: 'LH' },
	{ label: 'Macadam', value: 'MA' },
	{ label: 'Marquam Hill', value: 'MH' },
	{ label: 'Northwest Hills', value: 'NH' },
	{ label: 'North Interstate', value: 'NI' },
	{ label: 'Northwest', value: 'NP' },
	{ label: 'Portland Airport', value: 'PA' },
	{ label: 'Powell Blvd', value: 'PB' },
	{ label: 'Portland Raceway', value: 'PI' },
	{ label: 'Pleasant Valley', value: 'PV' },
	{ label: 'Rocky Butte', value: 'RB' },
	{ label: 'South Auditorium', value: 'SA' },
	{ label: 'Swan Island', value: 'SI' },
	{ label: 'St Johns', value: 'SJ' },
	{ label: 'South Shore', value: 'SS' }
];

// export const presets = {
//   SingleFam: ['RF', 'R20', 'R10', 'R7', 'R5', 'R2.5'],
//   MultiFam: ['RH','RX','CN1','CN2','CO1','CO2','CM','CS','CG','CX','EX'],
//   Office: ['CN2','CO1','CO2','CS','CG','CX','EX'],
//   Retail: ['CN2','CS','CG','CX','EX'],
//   Industrial: ['EG1','EG2','EX','IG1','IG2','IH']
// };

export const presets = {
  any: [],
  singlefam: [
    { label: 'RF',value: 'RF' },
    { label: 'R20',value: 'R20' },
    { label: 'R10',value: 'R10' },
    { label: 'R7',value: 'R7' },
    { label: 'R5',value: 'R5' },
    { label: 'R2.5',value: 'R2.5' }
  ],
  multifam: [
    { label: 'RH',value: 'RH' },
    { label: 'RX',value: 'RX' },
    { label: 'CN1', value: 'CN1' },
    { label: 'CN2', value: 'CN2' },
    { label: 'CO1', value: 'CO1' },
    { label: 'CO2', value: 'CO2' },
    { label: 'CM', value: 'CM' },
    { label: 'CS', value: 'CS' },
    { label: 'CG', value: 'CG' },
    { label: 'CX', value: 'CX' },
    { label: 'EX', value: 'EX' }
  ],
  office: [
    { label: 'CN2', value: 'CN2' },
    { label: 'CO1', value: 'CO1' },
    { label: 'CO2', value: 'CO2' },
    { label: 'CS', value: 'CS' },
    { label: 'CG', value: 'CG' },
    { label: 'CX', value: 'CX' },
    { label: 'EX', value: 'EX' }
  ],
  retail: [
    { label: 'CN2', value: 'CN2' },
    { label: 'CS', value: 'CS' },
    { label: 'CG', value: 'CG' },
    { label: 'CX', value: 'CX' },
    { label: 'EX', value: 'EX' }
  ],
  industrial: [
    { label: 'EG1', value: 'EG1' },
    { label: 'EG2', value: 'EG2' },
    { label: 'EX', value: 'EX' },
    { label: 'IG1', value: 'IG1' },
    { label: 'IG2', value: 'IG2' },
    { label: 'IH', value: 'IH' },
  ]
};
