//-----PRIMERA PANTALLA mostrar frase random------

let Frase = new Array() 
Frase[0] = "A pesar de haber más mujeres con estudios superiores, el desempleo suele afectar más a este colectivo.";
Frase[1] = "En política y puestos parlamentarios, las mujeres sólo representan un 20%.";
Frase[2] = "Sólo un 20% de los puestos directivos están ocupados por mujeres y menos del 5% son CEO de una empresa.";
Frase[3] = "El porcentaje de mujeres que aparece en las noticias es menor que el porcentaje de hombres. Además, el 46% de noticias en las que sale refuerza los estereotipos de género establecidos.";
Frase[4] = "530 millones de mujeres adultas en el mundo son analfabetas, frente a 266 millones de hombres.";
Frase[5] = "El 80% del trabajo no remunerado lo realizan mujeres: cuidados a enfermos, tareas domésticas, voluntariado… Lo que hace que haya más mujeres que hombres en riesgo de caer en la pobreza.";
 
let F = Frase.length;
let aleatorio=Math.round(Math.random()*(F-1));
function fraseAleatoria(){
    document.getElementById("RandomPhrase").innerHTML = (Frase[aleatorio]);
}fraseAleatoria();

function ConoceMas(){
    const firstScreen = document.getElementById("firstScreen");
    const secondScreen = document.getElementById("secondScreen");
    const thirdScreen = document.getElementById("thirdScreen");
    const fourthScreen = document.getElementById("fourthScreen");
    
       firstScreen.style.display = "none";
       secondScreen.style.display = "block"; //me muestra la segunda pantalla
       thirdScreen.style.display = "none";
       fourthScreen.style.display = "none";
}
document.getElementById("knowMore").addEventListener("click",ConoceMas,false);

//-----SEGUNDA PANTALLA---


//------GRAFICAS---

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawDualY);

function drawDualY() {
      var data = new google.visualization.DataTable();
      data.addColumn('year', 'Year');
      data.addColumn('porcentaje', 'Indicador');
      //data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, .25],
        [{v: [9, 0, 0], f: '9 am'}, 2, .5],
        [{v: [10, 0, 0], f:'10 am'}, 3, 1],
        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
        [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
        [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
      ]);

      var options = {
        chart: {
          title: 'Indicadores de Brecha de Género',
          subtitle: 'Porcentaje'
        },
        series: {
          0: {axis: 'Tipo de indicador'},
          //1: {axis: 'EnergyLevel'}
        },
        axes: {
          y: {
            IndicatorType: {label: 'Tipo de indicador (%)'},
            //EnergyLevel: {label: 'Energy Level (1-100)'}
          }
        },
        hAxis: {
          title: 'Años',
          format: 'a',
          viewWindow: {
            min: [1960],
            max: [2017]
          }
        },
        vAxis: {
          title: ''
        }
      };

      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, options);
    }










