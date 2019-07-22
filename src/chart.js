function drawChart(year,percentage,value,country) {
  var speedCanvas = document.getElementById("speedChart");

  Chart.defaults.global.defaultFontFamily = "Nunito";
  Chart.defaults.global.defaultFontSize = 18;

  var speedData = {
    labels: year,
    datasets: [{
      label: value + ' en ' + country,
      data: percentage,
      backgroundColor: "rgba(255, 208, 91)"
    }]
  };

  var chartOptions = {
    responsive:true,
    // maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
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
