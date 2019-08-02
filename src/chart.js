function drawChart(year, percentage, value, country) {
  var speedCanvas = document.getElementById('speedChart');

  Chart.defaults.global.defaultFontFamily = 'Nunito';
  // Chart.defaults.global.defaultFontSize = 15;

  var speedData = {
    labels: year,
    datasets: [
      {
        label: 'Indicador' + ' en ' + country,
        data: percentage,
        backgroundColor: 'rgba(120, 99, 132, 0.6)',
        borderColor: 'rgba(120, 99, 132, 1)',
        borderWidth: 2,
        hoverBorderWidth: 0
      }
    ]
  };

  var chartOptions = {
    responsive: true,
    // maintainAspectRatio: true,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 20,
        fontColor: 'white',
        fontSize: 20
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'white', // Eje x color verde
            display: false
          },
          ticks: {
            fontColor: 'white' // Cambiar color de labels
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: 'white', // Eje y color rojo
            display: false
          },
          ticks: {
            fontColor: 'white'
          }
        }
      ]
    }
  };

  var lineChart = new Chart(speedCanvas, {
    type: 'bar',
    data: speedData,
    options: chartOptions
  });
}
