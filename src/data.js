// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example; */

//const pegamos1= WORLDBANK.MEX.indicators.map(({indicatorCode,}) => [` ${indicatorCode}`]);
//console.log(pegamos1);

console.log(WORLDBANK.MEX.indicators.filter(indicator => indicator.indicatorCode.includes("IC.")));
console.log(WORLDBANK.MEX.indicators)
