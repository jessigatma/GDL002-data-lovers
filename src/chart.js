function drawChart(year,percentage,value,country) {
  var speedCanvas = document.getElementById("speedChart");

  Chart.defaults.global.defaultFontFamily = "Nunito";
  // Chart.defaults.global.defaultFontSize = 15;

  var speedData = {
    labels: year,
    datasets: [{
      label: 'Indicador' + ' en ' + country,
      data: percentage,
      backgroundColor: "rgba(255, 208, 91)"
    }]
  };

  var chartOptions = {
    responsive:true,
    // maintainAspectRatio: true,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 10,
        // fontColor: 'black'
      }
    },
  };

  var lineChart = new Chart(speedCanvas, {
    type: 'bar',
    data: speedData,
    options: chartOptions
  });
}
