//-------------FILTRA LOS INDICADORES POR TIPO -----------
//IC ES EL TIPO ECONÓMICO
//SL ES LA FUERZA LABORAL
//SE EDUCATIVO

function showPeruEconomicIndicators(){
    
     const dataPerIndicators=WORLDBANK.PER.indicators;
     const economicIndicators = dataPerIndicators.filter(economicIndicator => economicIndicator.indicatorCode.includes("IC."));
     const select= document.getElementById("peruEconomicIndicators");

     economicIndicators.forEach(function(element){
         let option = document.createElement("option");
         option.innerHTML= element.indicatorName;
         select.appendChild(option);
     });
 }
showPeruEconomicIndicators();


function showPeruLaboralIndicators(){

     const dataPerIndicators=WORLDBANK.PER.indicators;
     const laboralIndicators = dataPerIndicators.filter(laboralIndicator => laboralIndicator.indicatorCode.includes("SL."));
     const select= document.getElementById("peruLaboralIndicators");

     laboralIndicators.forEach(function(element){
         let option = document.createElement("option");
         option.innerHTML= element.indicatorName;
         select.appendChild(option);
     });
 }
showPeruLaboralIndicators();


function showPeruEducationIndicators(){

    const dataPerIndicators=WORLDBANK.PER.indicators;
    const educativeIndicators = dataPerIndicators.filter(educativeIndicator => educativeIndicator.indicatorCode.includes("SE."));
    const select= document.getElementById("peruEducativeIndicators");

    educativeIndicators.forEach(function(element){
        let option = document.createElement("option");
        option.innerHTML= element.indicatorName;
        select.appendChild(option);
    });
}
showPeruEducationIndicators();
 

 //---------------MUESTRA LOS AÑOS--------------------------

function showAnios(){

    const dataPerIndicators = WORLDBANK.PER.indicators;
    const dataEconomicIndicator= dataPerIndicators.filter(indicator => indicator.indicatorCode.includes("IC."));
    const anioEconomicIndicator = Object.entries(dataEconomicIndicator[0].data); //el objeto lo convertimos en array 57 arreglos (1960 - 2017) de 2 entradas
    const select = document.getElementById("anios"); //ve a los elemntos del select con id anios
 
    anioEconomicIndicator.forEach(function(element){
        let option = document.createElement("option"); //crea los elementos en la variable option
        option.innerHTML = element[0]; //innerHTML imprime los elementos en el HTML
        select.appendChild(option); //ponlos en la variable select, que es un document.getElementbyId, como hijos
    });
}
showAnios();


    const dataPerIndicators = WORLDBANK.PER.indicators;
    const dataEconomicIndicator= dataPerIndicators.filter(indicator => indicator.indicatorCode.includes("IC."));
    const yearEconomicIndicator = Object.entries(dataEconomicIndicator[2].data);//me regresa los data (año y porcentaje) del indicador en posicion 10 del tipo SL


    const orderData = yearEconomicIndicator.sort(function(a,b){return a[1] - b[1]});//Me acomoda los array con los valores de la posición 1 de menor a mayor
    const reverseOrderData=orderData.reverse(); //Me ordena de mayor a menor al arreglo anterior
    console.log (reverseOrderData);

  

//const pegamos= WORLDBANK.BRA.indicators.map(({indicatorCode,indicatorName,}) => [`${indicatorCode}, ${indicatorName}`]);
//console.log(pegamos);

