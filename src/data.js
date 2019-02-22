// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example; */


// <--------------------NUEVO ARRAY PARA PERÚ-------------------->
const arrDataPeru = [WORLDBANK.PER.indicators[2], WORLDBANK.PER.indicators[3],WORLDBANK.PER.indicators[11],
WORLDBANK.PER.indicators[12],WORLDBANK.PER.indicators[14],WORLDBANK.PER.indicators[15],WORLDBANK.PER.indicators[17], 
WORLDBANK.PER.indicators[18],WORLDBANK.PER.indicators[107],WORLDBANK.PER.indicators[109],WORLDBANK.PER.indicators[38],
WORLDBANK.PER.indicators[39],WORLDBANK.PER.indicators[45],WORLDBANK.PER.indicators[46],WORLDBANK.PER.indicators[47],
WORLDBANK.PER.indicators[50],WORLDBANK.PER.indicators[102],WORLDBANK.PER.indicators[103],WORLDBANK.PER.indicators[104],
WORLDBANK.PER.indicators[120],WORLDBANK.PER.indicators[124],WORLDBANK.PER.indicators[125],WORLDBANK.PER.indicators[129],
WORLDBANK.PER.indicators[134],WORLDBANK.PER.indicators[135]];

 console.log(arrDataPeru)

 //<-------------------OBTENER LOS DATOS POR CODIGO DE INDICADOR----------->
 let newData= arrDataPeru.filter(function(el){
  return (el.indicatorCode ==='SL.TLF.INTM.MA.ZS'); 
});
console.log(newData);

// >-------------- CONVERTIMOS EL OBJETO DATA EN ARREGLO ---------------<

let indicatorByYear = Object.entries(newData[0].data);
//console.log(aniosindicador);

indicatorByYear.forEach(function(element){
    //console.log("año:"+ element[0] + " valor: "  + element[1]);
    console.log(`año: ${element[0]} valor: ${element[1]}`);
});



