//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    loadIndicators()
   }
   
   // funcion para Cargar Provincias al campo <select>
   function loadIndicators() {
       
    let firstIndicator= [arrDataPeru[0].indicatorName, arrDataPeru[1].indicatorName, arrDataPeru[2].indicatorName, arrDataPeru[3].indicatorName,
    arrDataPeru[4].indicatorName,arrDataPeru[5].indicatorName,arrDataPeru[6].indicatorName, arrDataPeru[7].indicatorName,
    arrDataPeru[8].indicatorName,arrDataPeru[9].indicatorName,arrDataPeru[10].indicatorName,arrDataPeru[11].indicatorName,
    arrDataPeru[12].indicatorName,arrDataPeru[13].indicatorName,arrDataPeru[14].indicatorName,arrDataPeru[15].indicatorName,
    arrDataPeru[16].indicatorName,arrDataPeru[17].indicatorName,arrDataPeru[18].indicatorName,arrDataPeru[19].indicatorName,
    arrDataPeru[20].indicatorName,arrDataPeru[21].indicatorName,arrDataPeru[22].indicatorName,arrDataPeru[23].indicatorName,
    arrDataPeru[24].indicatorName];
    addOptions("peruIndicators", firstIndicator);
        }
   // Rutina para agregar opciones a un <select>
   function addOptions(domElement, firstIndicator) {
    const select = document.getElementsByName(domElement)[0];
   
    for (value in firstIndicator) {
     let option = document.createElement("option");
     option.text = firstIndicator[value];
     select.add(option);
    }
   }







/* Lo que aprendí trabajando esta semana con los datos...


<--------------------NUEVO ARRAY CON SU INDICATOR CODE------------------>
0:  "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)", indicatorCode: "SL.TLF.INTM.MA.ZS"}
1: : "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)", indicatorCode: "SL.TLF.INTM.FE.ZS"}
2:  "Fuerza laboral con educación básica, varones (% de la fuerza laboral masculina)", indicatorCode: "SL.TLF.BASC.MA.ZS"}
3: "Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)", indicatorCode: "SL.TLF.BASC.FE.ZS"}
4: "Fuerza laboral con educación avanzada, varones (% de la fuerza laboral masculina)", indicatorCode: "SL.TLF.ADVN.MA.ZS"}
5: "Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)", indicatorCode: "SL.TLF.ADVN.FE.ZS"}
6: "Tasa de participación en la fuerza laboral, hombre…ulina entre 15-64 años) (estimación modelado OIT)", indicatorCode: "SL.TLF.ACTI.MA.ZS"}
7:  "Tasa de participación en la fuerza laboral, mujere…enina entre 15-64 años) (estimación modelado OIT)", indicatorCode: "SL.TLF.ACTI.FE.ZS"}
8:  "Desempleo, varones (% de participación masculina en la fuerza laboral) (estimación nacional)", indicatorCode: "SL.UEM.TOTL.MA.NE.ZS"}
9: "Desempleo, mujeres (% de participación femenina en la fuerza laboral) (estimación nacional)", indicatorCode: "SL.UEM.TOTL.FE.NE.ZS"}

10: "Proporción de mujeres víctimas de violencia física…mos 12 meses (% de mujeres de entre 15 y 49 años)", indicatorCode: "SG.VAW.1549.ZS"}
11:  "La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)", indicatorCode: "SG.LAW.EQRM.WK"}
12: "Nivel de instrucción, al menos nivel de maestría o…ción de más de 25 años, mujeres (%) (acumulativo)", indicatorCode: "SE.TER.CUAT.MS.FE.ZS"}
13:  "Nivel de instrucción, al menos nivel de doctorado …ción de más de 25 años, mujeres (%) (acumulativo)", indicatorCode: "SE.TER.CUAT.DO.FE.ZS"}
14:  "Nivel de instrucción, al menos nivel de licenciatu…ción de más de 25 años, mujeres (%) (acumulativo)", indicatorCode: "SE.TER.CUAT.BA.FE.ZS"}
15:  "Necesidades de anticoncepción insatisfechas (% de mujeres casadas entre 15 y 49 años de edad)", indicatorCode: "SP.UWT.TFRT"}
16:  "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)", indicatorCode: "SE.ENR.TERT.FM.ZS"}
17:  "Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)", indicatorCode: "SE.ENR.SECO.FM.ZS"}
18:  "Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)", indicatorCode: "SE.ENR.PRIM.FM.ZS"}
19: "Proporción de mujeres con respecto a varones de jó…tizados (% de jóvenes entre 15 y 24 años de edad)", indicatorCode: "SE.ADT.1524.LT.FM.ZS"}
20: "Empresas con participación de mujeres en la propiedad (% de empresas)", indicatorCode: "IC.FRM.FEMO.ZS"}
21:  "Porcentaje de empresas con manager mujer (promedio entre empresas que reportan)", indicatorCode: "IC.FRM.FEMM.ZS"}
22:  "Empleados en la industria, mujeres (% del empleo femenino)", indicatorCode: "SL.IND.EMPL.FE.ZS"}
23:  "Proporción de mujeres con empleo en puestos gerenciales de nivel superior e intermedio (%)", indicatorCode: "SL.EMP.SMGT.FE.ZS"}
24:  "Independientes, mujeres (% del empleo femenino)", indicatorCode: "SL.EMP.SELF.FE.ZS"}
*/


//const pegamos= WORLDBANK.BRA.indicators.map(({indicatorCode,indicatorName,}) => [` ${indicatorName}`]);
//console.log(pegamos);

//const datoscondatos = WORLDBANK.PER.indicators.filter( indicador => (indicador.data > '2002')); //aquí no se puede porque los años son string y no number


//console.log(WORLDBANK.PER.indicators[10].indicatorName);
//console.log(WORLDBANK.PER.indicators[110].indicatorCode);
//console.log(WORLDBANK.PER.indicators[10].countryCode);
//console.log(WORLDBANK.PER.indicators[110].countryName);
//console.log(WORLDBANK.PER.indicators[10].data);
//console.log(WORLDBANK.PER.indicators[10].data[2010]); 


//filtra sólo los datos de ese indicatorCode de Perú-------------FILTER-------------
/*const datos1 = WORLDBANK.PER.indicators;
nuevosdatos= datos1.filter(function(el){
    return (el.indicatorCode==='SE.TER.TCHR.FE.ZS'); 
});
console.log(nuevosdatos);*/
//----------------------------------------------------------------------------------

//console.log(datos1[0].data[2010]);

/*let aniosindicador = Object.entries(datos1[0].data);
//console.log(aniosindicador);

aniosindicador.forEach(function(element){
    //console.log("año:"+ element[0] + " valor: "  + element[1]);
    console.log(`year: ${element[0]} valor: ${element[1]}`);
});*/

//Marvel app

// <--------------------NUEVO ARRAY PARA PERÚ-------------------->
/*const arrDataPeru = [WORLDBANK.PER.indicators[2], WORLDBANK.PER.indicators[3],WORLDBANK.PER.indicators[11],
WORLDBANK.PER.indicators[12],WORLDBANK.PER.indicators[14],WORLDBANK.PER.indicators[15],WORLDBANK.PER.indicators[17], 
WORLDBANK.PER.indicators[18],WORLDBANK.PER.indicators[38],WORLDBANK.PER.indicators[39],WORLDBANK.PER.indicators[45],
WORLDBANK.PER.indicators[46],WORLDBANK.PER.indicators[47],WORLDBANK.PER.indicators[50],WORLDBANK.PER.indicators[102],
WORLDBANK.PER.indicators[103],WORLDBANK.PER.indicators[104],WORLDBANK.PER.indicators[107],WORLDBANK.PER.indicators[109],
WORLDBANK.PER.indicators[120],WORLDBANK.PER.indicators[124],WORLDBANK.PER.indicators[125],WORLDBANK.PER.indicators[129],
WORLDBANK.PER.indicators[134],WORLDBANK.PER.indicators[135]];

 console.log(arrDataPeru);*/




/*const datos2 = WORLDBANK.PER.indicators[0];
console.log(datos2);*/

//const datos3 = WORLDBANK.PER.indicators[2].data;



//console.log(Object.keys(datos2));

//console.log(Object.defineProperties(datos2,'2002'));



//console.log(WORLDBANK.PER.indicators.sort());

//const datosindicadores =  WORLDBANK.PER.indicators.map(indicatorp => `${indicatorp.data} ${indicatorp.indicatorName}`);
//console.log(datosindicadores);


//console.log(Object.values(WORLDBANK.PER.indicators));

