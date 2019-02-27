function showPeruIndicators(){        

    const dataPerIndicators = WORLDBANK.PER.indicators;
    const select = document.getElementById("peruindicadores");

    for (let i= 0; i<= dataPerIndicators.length; i++){
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = dataPerIndicators[i].indicatorName; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
showPeruIndicators();    
