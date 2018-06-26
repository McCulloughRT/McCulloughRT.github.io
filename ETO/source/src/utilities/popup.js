export default function popupCreator(feature) {
  if(!feature) return null;

  // const { AVG_HEIGHT, BLDG_SQFT, BLDG_USE, BLDG_TYPE } = feature.properties;
  // const { NUM_STORY, UNITS_RES, YEAR_BUILT } = feature.properties;
  const { a, b, c, d } = feature.properties;
  const html = `
    <div>
      Rent Burden: ${ a } %<br />
      Lot Area: ${ b } sf<br />
      FAR: ${ c } <br />
      Zone: ${ d } <br />
    </div>
  `;
  return html;
}
