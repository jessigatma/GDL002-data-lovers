// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*
window.dataLovers= {

  filtering: function (,){

  },

  ordering: function (,){

  },

  calculating: function (,){
    
  }

};
------------------
const example = () => {
  return 'example';
};

window.example = example; */

//-------------FUNCIONES PARA LOS BOTONES DE LOS DISTINTOS PAISES----------------------
function COUNTRY(pais){

  showEconomicIndicators(WORLDBANK[pais].indicators);
  showLaboralIndicators(WORLDBANK[pais].indicators);
  showEducationIndicators(WORLDBANK[pais].indicators);
  
  addEventListener("change",function(event){ //me guarda el indicador que el usuario seleccionó
    typeSelectedIndex = event.target.selectedIndex;
    typeSelectedValue = event.target.value;//me da el número de posición de los datos desplegados (la posición de array -1)
    generalTable(typeSelectedIndex,typeSelectedValue,pais);
  });

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");
  const fourthScreen = document.getElementById("fourthScreen");
    
    firstScreen.style.display = "none";
    secondScreen.style.display = "block"; //me muestra la segunda pantalla
    thirdScreen.style.display = "block"; //me muestra la tercer pantalla
    fourthScreen.style.display = "none"
}
document.getElementById("PERU").addEventListener("click",()=>(COUNTRY('PER')));
document.getElementById("BRASIL").addEventListener("click",()=>(COUNTRY('BRA')));
document.getElementById("MEXICO").addEventListener("click",()=>(COUNTRY('MEX')));
document.getElementById("CHILE").addEventListener("click",()=>(COUNTRY('CHL')));


//----------------- FUNCIONES PARA MOSTRAR LOS DISTINTOS TIPOS DE INDICADOR---------------------


function showEconomicIndicators(data){
  
  const dataIndicators = data;
  const economicIndicators = dataIndicators.filter(economicIndicator => economicIndicator.indicatorCode.includes("IC."));
  const select= document.getElementById("economicIndicators");

  economicIndicators.forEach(function(element){
    let option = document.createElement("option");
    option.innerHTML= element.indicatorName;
    select.appendChild(option);
  });
}

function showLaboralIndicators(data){
    const dataIndicators=data;
    const laboralIndicators = dataIndicators.filter(laboralIndicator => laboralIndicator.indicatorCode.includes("SL."));
    const select= document.getElementById("laboralIndicators");

    laboralIndicators.forEach(function(element){
      let option = document.createElement("option");
      option.innerHTML= element.indicatorName;
      select.appendChild(option);
    });
  }

function showEducationIndicators(data){

  const dataIndicators=data;
  const educativeIndicators = dataIndicators.filter(educativeIndicator => educativeIndicator.indicatorCode.includes("SE."));
  const select= document.getElementById("educativeIndicators");

  educativeIndicators.forEach(function(element){
      let option = document.createElement("option");
      option.innerHTML= element.indicatorName;
      select.appendChild(option);
  });
}

//-----------FUNCIONES PARA MOSTRAR LA TABLA DE DATOS-------------------7

function generalTable(typeSelectedIndex,typeSelectedValue, pais){
  
  document.getElementById("indicatorName").innerHTML = typeSelectedValue; //el valor dado al rango, lo arroja en el HTML

  const dataIndicators = WORLDBANK[pais].indicators;
  const dataEconomicIndicator= dataIndicators.filter(indicator => indicator.indicatorCode.includes("SL."));
  const yearEconomicIndicator = Object.entries(dataEconomicIndicator[typeSelectedIndex].data);//REEVISAR AQUI PARA HACER LA FUNCION GENERAL//me regresa los data (año y porcentaje) del indicador en posicion 10 del tipo SL
  const orderData = yearEconomicIndicator.sort(function(a,b){return a[0] - b[0]});//Me acomoda los array con los valores de la posición 1 de menor a mayor
  const reverseOrderData=orderData.reverse(); //Me ordena de mayor a menor al arreglo anterior
  const filterData = reverseOrderData.filter(sinvac => sinvac[1] != ""); //me muestra solo los valores que tenga mi array 
  //----------------------------------DATOS PARA PROMEDIO--------
  const yearEconomicIndicator1 = Object.values(dataEconomicIndicator[typeSelectedIndex].data);
  const sumaorder = yearEconomicIndicator1.filter(element => element != ""); //Quita los años donde no haya dato
  const suma = sumaorder.reduce((a,b)=>a+b);
  const promedio = suma/sumaorder.length;
  
  document.getElementById("average").innerHTML = promedio.toFixed(2);
  //--------------------------------------------------------------
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

  const firstScreen = document.getElementById("firstScreen");
  const secondScreen = document.getElementById("secondScreen");
  const thirdScreen = document.getElementById("thirdScreen");
  const fourthScreen = document.getElementById("fourthScreen");
    
    firstScreen.style.display = "none";
    secondScreen.style.display = "block"; //me muestra la segunda pantalla
    thirdScreen.style.display = "block"; //me muestra la tercer pantalla
    fourthScreen.style.display = "block";

}
generalTable();

