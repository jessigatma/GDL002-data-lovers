//-----PRIMERA PANTALLA mostrar frase random------
let Phrase = PHRASES.PHRASE;
let randomArray = dataLovers.randomPhrase(Phrase);
document.getElementById('RandomPhrase').innerHTML = randomArray;

function knowAbout() {
  const firstScreen = document.getElementById('firstScreen');
  const secondScreen = document.getElementById('secondScreen');
  const thirdScreen = document.getElementById('thirdScreen');
  const fourthScreen = document.getElementById('fourthScreen');

  firstScreen.style.display = 'none';
  secondScreen.style.display = 'block'; //me muestra la segunda pantalla
  thirdScreen.style.display = 'none';
  fourthScreen.style.display = 'none';
}
document.getElementById('knowMore').addEventListener('click', knowAbout, false);

//------SEGUNDA Y TERCER PANTALLA-------FUNCIONES PARA LOS BOTONES DE LOS DISTINTOS PAISES------------------

function COUNTRY(labCountry) {
  let worldBankIndicators = WORLDBANK[labCountry].indicators;

  showEconomicIndicators(worldBankIndicators);
  showLaboralIndicators(worldBankIndicators);
  showEducationIndicators(worldBankIndicators);

  addEventListener('change', function(event) {
    typeSelectedIndicator = event.target.id;
    typeSelectedIndex = event.target.selectedIndex;
    typeSelectedValue = event.target.value; //me da el número de posición de los datos desplegados (la posición de array -1)
    generalTable(
      typeSelectedIndicator,
      typeSelectedIndex,
      typeSelectedValue,
      labCountry
    );
  });

  const firstScreen = document.getElementById('firstScreen');
  const secondScreen = document.getElementById('secondScreen');
  const thirdScreen = document.getElementById('thirdScreen');
  const fourthScreen = document.getElementById('fourthScreen');

  firstScreen.style.display = 'none';
  secondScreen.style.display = 'block'; //me muestra la segunda pantalla
  thirdScreen.style.display = 'block'; //me muestra la tercer pantalla
  fourthScreen.style.display = 'none';
}
document.getElementById('PERU').addEventListener('click', () => COUNTRY('PER'));
document
  .getElementById('BRASIL')
  .addEventListener('click', () => COUNTRY('BRA'));
document
  .getElementById('MEXICO')
  .addEventListener('click', () => COUNTRY('MEX'));
document
  .getElementById('CHILE')
  .addEventListener('click', () => COUNTRY('CHL'));

function showTable() {
  const firstScreen = document.getElementById('firstScreen');
  const secondScreen = document.getElementById('secondScreen');
  const thirdScreen = document.getElementById('thirdScreen');
  const fourthScreen = document.getElementById('fourthScreen');
  const tableScreen = document.getElementById('dataTable');

  firstScreen.style.display = 'none';
  secondScreen.style.display = 'none'; //me muestra la segunda pantalla
  thirdScreen.style.display = 'none';
  fourthScreen.style.display = 'none';
  tableScreen.style.display = 'block';
}
document
  .getElementById('datasTable')
  .addEventListener('click', showTable, false);
