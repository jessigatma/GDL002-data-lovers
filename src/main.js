function showPeruIndicators(){        

    const dataPerIndicators = WORLDBANK.PER.indicators;
    const select = document.getElementById("peruindicadores");

    dataPerIndicators.forEach(function (element) {
        let option = document.createElement("option");
        option.innerHTML = element.indicatorName;
        select.appendChild(option);
    });
}
showPeruIndicators();    



