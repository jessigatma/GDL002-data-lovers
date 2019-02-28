//-------------FILTRA LOS INDICADORES POR TIPO -----------
//IC ES EL TIPO ECONÓMICO
//SL ES LA FUERZA LABORAL
//SE EDUCATIVO

function showPeruEconomicIndicators(){
    // console.log("funcionperu");
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
 

 










