function drawChart(year,percentage,value,country) {
  var speedCanvas = document.getElementById("speedChart");

  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;

  var speedData = {
    labels: year,
    datasets: [{
      label: value + ' en ' + country,
      data: percentage,
    }]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        // fontColor: 'black'
      }
    }
  };

  var lineChart = new Chart(speedCanvas, {
    type: 'bar',
    data: speedData,
    options: chartOptions
  });
}
