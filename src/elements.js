//----------------- FUNCIONES PARA MOSTRAR LOS DISTINTOS TIPOS DE INDICADOR---------------------

function showEconomicIndicators(data) {

  economicIndicators = dataLovers.filterEconomicIndicators(data)
  const select = document.getElementById("economicIndicators");

  economicIndicators.forEach(function (element) {
    let option = document.createElement("option");
    option.innerHTML = element.indicatorName;
    select.appendChild(option);
  });
}

function showLaboralIndicators(data) {
  laboralIndicators = dataLovers.filterLaboralIndicators(data)
  const select = document.getElementById("laboralIndicators");

  laboralIndicators.forEach(function (element) {
    let option = document.createElement("option");
    option.innerHTML = element.indicatorName;
    select.appendChild(option);
  });
}

function showEducationIndicators(data) {
  educativeIndicators = dataLovers.filterEducativeIndicators(data)
  const select = document.getElementById("educativeIndicators");

  educativeIndicators.forEach(function (element) {
    let option = document.createElement("option");
    option.innerHTML = element.indicatorName;
    select.appendChild(option);
  });
}
//-----------FUNCIONES PARA MOSTRAR LA TABLA DE DATOS-------------------

function generalTable(typeSelectedIndicator, typeSelectedIndex, typeSelectedValue, labCountry) {

  document.getElementById("countryName").innerHTML = labCountry;
  document.getElementById("indicatorName").innerHTML = typeSelectedValue; //el valor dado al rango, lo arroja en el HTML
  
  const dataIndicators = WORLDBANK[labCountry].indicators;

  const Indicators= dataLovers.indicatorsArray(typeSelectedIndicator,dataIndicators)
  const filteredData = dataLovers.filterData(Indicators, typeSelectedIndex);
  const averagedData = dataLovers.averageData(Indicators, typeSelectedIndex);

  const year = dataLovers.yearChart(filteredData)
  const percentage = dataLovers.indicatorChart(filteredData)
 
  document.getElementById("average").innerHTML = averagedData;

  const dataTable = document.getElementById("dataTable"); //tomamos la tabla desde el HTML
  const bodyTable = document.createElement('tbody'); //Creamos los elementos de la tabla

  filteredData.forEach(function (datarow) { //tomamos cada arreglo (58) de mi arreglo reverseOrderData
    let row = document.createElement("tr"); //Creamos nuestras <tr> que serán 58 por el length de nuestro arreglo
  
    datarow.forEach(function (dataCell) {
      let cell = document.createElement("td"); //creamos nuestro <td> que son los valores que se van a insertar en cada <tr>
      cell.appendChild(document.createTextNode(dataCell)); //es el texto que introduciremos con el valor anterior
      row.appendChild(cell); //cada celda va a estar puesta en nuestro <tr>    
    });
    
    bodyTable.appendChild(row);
  });
  dataTable.appendChild(bodyTable);
  document.body.appendChild(dataTable);

  drawChart(year,percentage,typeSelectedValue,labCountry);

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");
  const fourthScreen = document.getElementById("fourthScreen");
    
    firstScreen.style.display = "none";
    secondScreen.style.display = "block"; //me muestra la segunda pantalla
    thirdScreen.style.display = "block"; //me muestra la tercer pantalla
    fourthScreen.style.display = "block"; 

}



