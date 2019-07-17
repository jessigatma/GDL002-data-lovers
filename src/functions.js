window.dataLovers = {

  randomPhrase: function (arr) {
    let sizePhrase = arr.length;
    let randomize = Math.round(Math.random() * (sizePhrase - 1));
    return arr[randomize]
  },
  filterEconomicIndicators: function (data) {
    const economicIndicators = data.filter(economicIndicator => economicIndicator.indicatorCode.includes("IC."))
    return economicIndicators
  },
  filterLaboralIndicators: function (data) {
    const laboralIndicators = data.filter(laboralIndicator => laboralIndicator.indicatorCode.includes("SL."));
    return laboralIndicators
  },
  filterEducativeIndicators: function (data) {
    const educativeIndicators = data.filter(educativeIndicator => educativeIndicator.indicatorCode.includes("SE."));
    return educativeIndicators
  },
  filterData: function (dataIndicator, index) {
    const yearEconomicIndicator = Object.entries(dataIndicator[index].data); //regresa los data (año y porcentaje) del indicador 
    const orderData = yearEconomicIndicator.sort((a, b) => a[0] - b[0]); //acomoda los array con los valores de la posición 1 de menor a mayor
    const reverseOrderData = orderData; //Ordena de mayor a menor al arreglo anterior
    const filteringData = reverseOrderData.filter(sinvac => sinvac[1] != ""); //muestra solo los valores que tenga mi array 
    return filteringData
  },
  averageData: function (dataIndicator, index) {
    const yearEconomicIndicator1 = Object.values(dataIndicator[index].data);
    const plusOrder = yearEconomicIndicator1.filter(element => element != ""); //Quita los años donde no haya dato
    if (plusOrder.length === 0) {
      alert('No hay datos para mostrar')
    } else {
      const plus = plusOrder.reduce((a, b) => a + b);
      const average = (plus / plusOrder.length).toFixed(2);
      return average
    }
  },
  yearChart: function(filter){
    return filter.map(a=>a[0])
  },
  indicatorChart: function(filter){
    return filter.map(b=>b[1])
  }

}
