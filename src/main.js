
//Quiero que el botón llame a la función del país que dio click
//quiero que me despliegue los distintos indicadores 

//dentro del parentesis mi condicion PER
//antes, llama al boton

//-------------FILTRA LOS INDICADORES POR TIPO -----------
//IC ES EL TIPO ECONÓMICO
//SL ES LA FUERZA LABORAL
//SE EDUCATIVO
/*
function showPeruEconomicIndicators(){ //el país seleccionado y el tipo de indicador que busca el usuario
    
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


function showPeruLaboralIndicators(country, indicatortype){

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


function showPeruEducationIndicators(country, indicatortype){

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
*/
//-------------------------MUESTRA DATOS ORDENADOS DE MAYOR A MENOR--------------------
/*
function TablaDatos(){
    const dataPerIndicators = WORLDBANK.PER.indicators;
    const dataEconomicIndicator= dataPerIndicators.filter(indicator => indicator.indicatorCode.includes("IC."));
    const yearEconomicIndicator = Object.entries(dataEconomicIndicator[4].data);//REEVISAR AQUI PARA HACER LA FUNCION GENERAL//me regresa los data (año y porcentaje) del indicador en posicion 10 del tipo SL
    const orderData = yearEconomicIndicator.sort(function(a,b){return a[1] - b[1]});//Me acomoda los array con los valores de la posición 1 de menor a mayor
    const reverseOrderData=orderData.reverse(); //Me ordena de mayor a menor al arreglo anterior
    const filterData = reverseOrderData.filter(sinvac => sinvac[1] != ""); //me muestra solo los valores que tenga mi array 
    
    const dataTable = document.getElementById("dataTable"); //tomamos la tabla desde el HTML
    const bodyTable = document.createElement('tbody'); //Creamos los elementos de la tabla

    filterData.forEach(function(datarow){ //tomamos cada arreglo (58) de mi arreglo reverseOrderData
    let row = document.createElement("tr"); //Creamos nuestras <tr> que serán 58 por el length de nuesro arreglo

        datarow.forEach(function(dataCell){
            let cell = document.createElement("td"); //creamos nuestro <td> que son los valores que se van a insertar en cada <tr>
            cell.appendChild(document.createTextNode(dataCell)); //es el texto que introduciremos con el valor anterior
            row.appendChild(cell); //cada celda va a estar puesta en nuestro <tr>
        });
    bodyTable.appendChild(row); 
});
dataTable.appendChild(bodyTable);
document.body.appendChild(dataTable);
}
TablaDatos();
*/


    
//-------------------OBTENER PROMEDIO-----------------------
 const dataPerIndicators = WORLDBANK.PER.indicators;
 const dataEconomicIndicator= dataPerIndicators.filter(indicator => indicator.indicatorCode.includes("IC."));
 const yearEconomicIndicator1 = Object.values(dataEconomicIndicator[2].data);
  const sumaorder = yearEconomicIndicator1.filter(element => element != ""); //Quita los años donde no haya dato
  const suma = sumaorder.reduce((a,b)=>a+b);
 
 const promedio = suma/sumaorder.length;
  
document.getElementById("promedio").innerHTML = promedio.toFixed(2);






