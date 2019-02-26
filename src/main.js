function peruIndicators(){

 const economicIndicatorPeru = WORLDBANK.PER.indicators;

 
    //const choosedCountry = document.getElementById("listCountry").value; //toma el valor que el usuario escoge en la lista
    //const userName = document.getElementById("policeName").value; // toma el nombre que da el usuario

      //document.getElementById("rankWelcome").innerHTML = choosedCountry; //el valor dado al rango, lo arroja en el HTML
      //document.getElementById("nameWelcome").innerHTML= userName; //el nombre del usuario lo da al HTML
      
    //const firstScreen = document.getElementById("firstScreen");
    //const secondScreen = document.getElementById("secondScreen");
    
       //firstScreen.style.display = "none";
       //secondScreen.style.display = "block"; //me muestra la segunda pantalla
}
//document.getElementById("peru_button").addEventListener("click",continueClick,false); //Acciona el botón de Continuar
 

const newdataper = WORLDBANK.PER.indicators;

for (let i= 0; i<= newdataper.length; i++){

  console.log(WORLDBANK.PER.indicators[i].indicatorName);

}
