newWorldBank = [WORLDBANK.PER.indicators[2], WORLDBANK.PER.indicators[3],WORLDBANK.PER.indicators[11],
WORLDBANK.PER.indicators[12],WORLDBANK.PER.indicators[14],WORLDBANK.PER.indicators[15],WORLDBANK.PER.indicators[17], 
WORLDBANK.PER.indicators[18],WORLDBANK.PER.indicators[107],WORLDBANK.PER.indicators[109],WORLDBANK.PER.indicators[38],
WORLDBANK.PER.indicators[39],WORLDBANK.PER.indicators[45],WORLDBANK.PER.indicators[46],WORLDBANK.PER.indicators[47],
WORLDBANK.PER.indicators[50],WORLDBANK.PER.indicators[102],WORLDBANK.PER.indicators[103],WORLDBANK.PER.indicators[104],
WORLDBANK.PER.indicators[120],WORLDBANK.PER.indicators[124],WORLDBANK.PER.indicators[125],WORLDBANK.PER.indicators[129],
WORLDBANK.PER.indicators[134],WORLDBANK.PER.indicators[135], 
WORLDBANK.MEX.indicators[8],WORLDBANK.MEX.indicators[9], WORLDBANK.MEX.indicators[15],WORLDBANK.MEX.indicators[16],WORLDBANK.MEX.indicators[17],
WORLDBANK.MEX.indicators[77],WORLDBANK.MEX.indicators[79],WORLDBANK.MEX.indicators[95],WORLDBANK.MEX.indicators[101],WORLDBANK.MEX.indicators[102],
WORLDBANK.MEX.indicators[103],WORLDBANK.MEX.indicators[104],WORLDBANK.MEX.indicators[105],WORLDBANK.MEX.indicators[106],WORLDBANK.MEX.indicators[107],
WORLDBANK.MEX.indicators[108],WORLDBANK.MEX.indicators[110],WORLDBANK.MEX.indicators[111],WORLDBANK.MEX.indicators[113],WORLDBANK.MEX.indicators[114],
WORLDBANK.MEX.indicators[116],WORLDBANK.MEX.indicators[117],WORLDBANK.MEX.indicators[129],WORLDBANK.MEX.indicators[134],WORLDBANK.MEX.indicators[135], 
WORLDBANK.BRA.indicators[0],WORLDBANK.BRA.indicators[6],WORLDBANK.BRA.indicators[7],WORLDBANK.BRA.indicators[8],WORLDBANK.BRA.indicators[19],
WORLDBANK.BRA.indicators[20],WORLDBANK.BRA.indicators[72],WORLDBANK.BRA.indicators[73],WORLDBANK.BRA.indicators[74],WORLDBANK.BRA.indicators[77],
WORLDBANK.BRA.indicators[77],WORLDBANK.BRA.indicators[90],WORLDBANK.BRA.indicators[94],WORLDBANK.BRA.indicators[95],WORLDBANK.BRA.indicators[101],
WORLDBANK.BRA.indicators[102],WORLDBANK.BRA.indicators[110],WORLDBANK.BRA.indicators[111],WORLDBANK.BRA.indicators[113],WORLDBANK.BRA.indicators[114],
WORLDBANK.BRA.indicators[116],WORLDBANK.BRA.indicators[117],WORLDBANK.BRA.indicators[129],WORLDBANK.BRA.indicators[134],WORLDBANK.BRA.indicators[135],
WORLDBANK.CHL.indicators[2],WORLDBANK.CHL.indicators[3],WORLDBANK.CHL.indicators[11],WORLDBANK.CHL.indicators[12],WORLDBANK.CHL.indicators[14],
WORLDBANK.CHL.indicators[15],WORLDBANK.CHL.indicators[17],WORLDBANK.CHL.indicators[18],WORLDBANK.CHL.indicators[38],WORLDBANK.CHL.indicators[39],
WORLDBANK.CHL.indicators[45],WORLDBANK.CHL.indicators[46],WORLDBANK.CHL.indicators[47],WORLDBANK.CHL.indicators[50],WORLDBANK.CHL.indicators[102],
WORLDBANK.CHL.indicators[103],WORLDBANK.CHL.indicators[104],WORLDBANK.CHL.indicators[106],WORLDBANK.CHL.indicators[107],WORLDBANK.CHL.indicators[109],
WORLDBANK.CHL.indicators[120],WORLDBANK.CHL.indicators[125],WORLDBANK.CHL.indicators[129],WORLDBANK.CHL.indicators[134],WORLDBANK.CHL.indicators[135]];

//console.log(WORLDBANK);

const pegamos= WORLDBANK.BRA.indicators.map(({indicatorCode,indicatorName,}) => [`${indicatorCode}, ${indicatorName}`]);
//console.log(pegamos);


let newData= WORLDBANK.PER.indicators.filter(function(el){
    return (el.indicatorCode ==='SH.ANM.ALLW.ZS'); 
  });
 //console.log(newData);

//const newdataper = WORLDBANK.PER.indicators;

//for (let i= 0; i<= newdataper.length; i++){

  //console.log(WORLDBANK.PER.indicators[i].indicatorName);

//}