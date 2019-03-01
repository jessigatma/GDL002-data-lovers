// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example; */

//const pegamos1= WORLDBANK.MEX.indicators.map(({indicatorCode,}) => [` ${indicatorCode}`]);
//console.log(pegamos1);

const data1 = WORLDBANK.PER.indicators;
const  data2= data1.filter(indicator => indicator.indicatorCode.includes("IC."));
//console.log(data2[0].indicatorName);

// -------- del tipo de indicador que se escoge, vemos los datos: año-%

const  aniosindicador=Object.entries(data2[0].data); //el objeto lo convertimos en array 57 arreglos (1960 - 2017) de 2 entradas
// console.log(aniosindicador);

aniosindicador.forEach(function(anios){ //me imprime todos los años
  //console.log(`año: ${anios[0]}   porcentaje: ${anios[1]}`)
})





//console.log(datos2[0].data[2010]);

/*let aniosindicador = Object.entries(datos1[0].data);
//console.log(aniosindicador);

aniosindicador.forEach(function(element){
    //console.log("año:"+ element[0] + " valor: "  + element[1]);
    console.log(`year: ${element[0]} valor: ${element[1]}`);
});*/