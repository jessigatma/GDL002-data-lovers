google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

      //------GRAFICAS---

// google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(drawDualY);

// function drawDualY() {
//       var data = new google.visualization.DataTable();
//       data.addColumn('year', 'Year');
//       data.addColumn('porcentaje', 'Indicador');
//       //data.addColumn('number', 'Energy Level');

//       data.addRows([
//         [{v: [8, 0, 0], f: '8 am'}, 1, .25],
//         [{v: [9, 0, 0], f: '9 am'}, 2, .5],
//         [{v: [10, 0, 0], f:'10 am'}, 3, 1],
//         [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
//         [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
//         [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
//         [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
//         [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
//         [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
//         [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
//       ]);

//       var options = {
//         chart: {
//           title: 'Indicadores de Brecha de Género',
//           subtitle: 'Porcentaje'
//         },
//         series: {
//           0: {axis: 'Tipo de indicador'},
//           //1: {axis: 'EnergyLevel'}
//         },
//         axes: {
//           y: {
//             IndicatorType: {label: 'Tipo de indicador (%)'},
//             //EnergyLevel: {label: 'Energy Level (1-100)'}
//           }
//         },
//         hAxis: {
//           title: 'Años',
//           format: 'a',
//           viewWindow: {
//             min: [1960],
//             max: [2017]
//           }
//         },
//         vAxis: {
//           title: ''
//         }
//       };

//       var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
//       materialChart.draw(data, options);
//     }


      