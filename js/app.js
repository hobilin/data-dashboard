
var btnAqp = document.getElementById("AQP20162");



var AQP1 = function(){

  //obteniendo cantidad de alumnas
var students = data.AQP['2016-2']. students;
var counter= 1;
var total;
for(var i = 0; i < students.length; i++){
totalStudents = counter + i;

}
var containerStudents = document.getElementById("totalStudents");
var nodeStudents = document.createTextNode(totalStudents);
var nodeContainer = document.createElement("p");
nodeContainer.appendChild(nodeStudents);
containerStudents.appendChild(nodeContainer);

//% de alumnas que desertaron
var students = data.AQP["2016-2"].students;
var result = 0;
for(var j=0; j < students.length;j++){
if(students[j].active == false){
result++;
var percentageDesert = ((result*100)/students.length).toFixed(0);
}
}

var containerDesert = document.getElementById("percentageDesert");
var nodeDesert = document.createTextNode(percentageDesert);
var containerNodeDesert = document.createElement("p");
containerNodeDesert.appendChild(nodeDesert);
containerDesert.appendChild(containerNodeDesert);

//La cantidad y % de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos.
var students = data.AQP["2016-2"].students;
var count= 0;
for(var k = 0; k < students.length; k++){
var sprints = data.AQP["2016-2"].students[k].sprints;
var s1H= data.AQP["2016-2"].students[k].sprints[0].score.hse;
var s1T= data.AQP["2016-2"].students[k].sprints[0].score.tech;
var s2H= data.AQP["2016-2"].students[k].sprints[1].score.hse;
var s2T= data.AQP["2016-2"].students[k].sprints[1].score.tech;
var s3H= data.AQP["2016-2"].students[k].sprints[2].score.hse;
var s3T= data.AQP["2016-2"].students[k].sprints[2].score.tech;
var s4H= data.AQP["2016-2"].students[k].sprints[3].score.hse;
var s4T= data.AQP["2016-2"].students[k].sprints[3].score.tech;

if ((s1H + s2H + s3H + s4H)/sprints.length > 840 && (s1T + s2T + s3T + s4T)/sprints.length > 1260 && students[k].active === true){
console.log((s1H + s2H + s3H + s4H)/sprints.length);
count++;
var percentageTeHs = ((count*100)/students.length).toFixed(0);
}
}
var containerCountTeHs = document.getElementById("countAchiv");
var nodeCountTeHs = document.createTextNode(count);
var containerNodeCountTeHs = document.createElement("p");
containerNodeCountTeHs.appendChild(nodeCountTeHs);
containerCountTeHs.appendChild(containerNodeCountTeHs);

var containerPorTeHs = document.getElementById("percentageTeHs");
var nodePorTeHs = document.createTextNode(percentageTeHs);
var containerNodePorTeHs = document.createElement("p");
containerNodePorTeHs.appendChild(nodePorTeHs);
containerPorTeHs.appendChild(containerNodePorTeHs);

//NET PROMOTER score
var totalPromoters = 0;
var totalPassive = 0;
var totalDetractors = 0;
var totalNps;
var students = data.AQP["2016-2"].students;
var ratings= data.AQP["2016-2"].ratings;
for (var l = 0; l < ratings.length; l++ ){
  (totalPromoters += ratings[l].nps.promoters/ratings.length).toFixed(0);
  (totalPassive += ratings[l].nps.passive/ratings.length).toFixed(0);
  (totalDetractors += ratings[l].nps.detractors/ratings.length).toFixed(0);
  totalNps = totalPromoters - totalDetractors;
}
var containerNps = document.getElementById("nps");
var nodeNps = document.createTextNode(totalNps);
var containerNodeNps = document.createElement("p");
containerNodeNps.appendChild(nodeNps);
containerNps.appendChild(containerNodeNps);

var containerProm = document.getElementById("promoters");
var nodeProm = document.createTextNode(totalPromoters);
var containerNodeProm = document.createElement("p");
containerNodeProm.appendChild(nodeProm);
containerProm.appendChild(containerNodeProm);

var containerPass = document.getElementById("passive");
var nodePass = document.createTextNode(totalPassive);
var constainerNodePass = document.createElement("p");
constainerNodePass.appendChild(nodePass);
containerPass.appendChild(constainerNodePass);

var containerDetr = document.getElementById("detractors");
var nodeDetr = document.createTextNode(totalDetractors);
var containerNodeDetr = document.createElement("p");
containerNodeDetr.appendChild(nodeDetr);
containerDetr.appendChild(containerNodeDetr);

//La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
//promedio x sprints
var students = data.AQP["2016-2"].students;
var count= 1;
for(var a= 0; a < students.length; a++){
var sprints = data.AQP["2016-2"].students[a].sprints;

var s1T= data.AQP["2016-2"].students[a].sprints[0].score.tech;
var s2T= data.AQP["2016-2"].students[a].sprints[1].score.tech;
var s3T= data.AQP["2016-2"].students[a].sprints[2].score.tech;
var s4T= data.AQP["2016-2"].students[a].sprints[3].score.tech;

if ((s1T + s2T + s3T + s4T)/sprints.length > 1260){
  console.log((s1T + s2T + s3T + s4T)/sprints.length);
count++;
var percentageProTech = ((count*100)/students.length).toFixed(0);
}
}
var containerCountTech= document.getElementById("countTech");
var nodeCountTech = document.createTextNode(count);
var containerNodeCountTech = document.createElement("p");
containerNodeCountTech.appendChild(nodeCountTech);
containerCountTech.appendChild(containerNodeCountTech);

var containerProTech= document.getElementById("proTech");
var nodeProTech = document.createTextNode(percentageProTech);
var containerNodeProTech = document.createElement("p");
containerNodeProTech.appendChild(nodeProTech);
containerProTech.appendChild(containerNodeProTech);
//SPRINT 1
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var m = 0; m < students.length; m++){
var tech = data.AQP["2016-2"].students[m].sprints[0].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 2
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var n = 0; n < students.length; n++){
var tech = data.AQP["2016-2"].students[n].sprints[1].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 3
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var o = 0; o < students.length; o++){
var tech = data.AQP["2016-2"].students[o].sprints[2].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
}}
//SPRINT 4
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var p = 0; p < students.length; p++){
var tech = data.AQP["2016-2"].students[p].sprints[3].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}

//La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos HSE en promedio y por sprint.
//promedio x sprintsvar students = data.AQP["2016-2"].students;
var students = data.AQP["2016-2"].students;
var count= 0;
for(var b = 0; b < students.length; b++){
var sprints = data.AQP["2016-2"].students[b].sprints;

var s1H= data.AQP["2016-2"].students[b].sprints[0].score.hse;
var s2H= data.AQP["2016-2"].students[b].sprints[1].score.hse;
var s3H= data.AQP["2016-2"].students[b].sprints[2].score.hse;
var s4H= data.AQP["2016-2"].students[b].sprints[3].score.hse;

if ((s1H + s2H + s3H + s4H)/sprints.length > 840){
  console.log((s1H + s2H + s3H + s4H)/sprints.length);
count++;
var percentageProHse = ((count*100)/students.length).toFixed(0);
}
}
var containerCountHse= document.getElementById("countHse");
var nodeCountHse = document.createTextNode(count);
var containerNodeCountHse = document.createElement("p");
containerNodeCountHse.appendChild(nodeCountHse);
containerCountHse.appendChild(containerNodeCountHse);

var containerProHse= document.getElementById("proHse");
var nodeProHse = document.createTextNode(percentageProHse);
var containerNodeProHse = document.createElement("p");
containerNodeProHse.appendChild(nodeProHse);
containerProHse.appendChild(containerNodeProHse);
//SPRINT 1
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var r = 0; r < students.length; r++){
var hse = data.AQP["2016-2"].students[r].sprints[0].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 2
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var s = 0; s < students.length; s++){
var hse = data.AQP["2016-2"].students[s].sprints[1].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 3
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var t = 0; t < students.length; t++){
var hse = data.AQP["2016-2"].students[t].sprints[2].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 4
var students = data.AQP["2016-2"].students;
var counter = 0;
var percentage;
for(var u = 0; u < students.length; u++){
var hse = data.AQP["2016-2"].students[u].sprints[3].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}

//% estudiantes satisfechas con laboratoria
var ratings = data.AQP["2016-2"].ratings;
var counter = 0;
for(var v = 0; v < ratings.length; v++){
var student = data.AQP["2016-2"].ratings[v].student;
counter += student.cumple;
counter += student.supera;
var totalSatis = (counter/ratings.length).toFixed(2);
}
var containerSatis = document.getElementById("totalSatis");
var nodeSatis = document.createTextNode(totalSatis);
var containerNodeSatis = document.createElement("p");
containerNodeSatis.appendChild(nodeSatis);
containerSatis.appendChild(containerNodeSatis);

//La puntuación promedio de l@s profesores.
var counter = 0;
var average = 0;
var ratings = data.AQP['2016-2'].ratings;
for(var w = 0; w < ratings.length; w++){
  counter += data.AQP['2016-2'].ratings[w].teacher;
averageProf = (counter /ratings.length).toFixed(1);
}
var containerProf = document.getElementById("averageProf");
var nodeProf = document.createTextNode(averageProf);
var containerNodeProf = document.createElement("p");
containerNodeProf.appendChild(nodeProf);
containerProf.appendChild(containerNodeProf);

//La puntuación promedio de l@s jedi.
var counter = 0;
var average = 0;
var ratings = data.AQP['2016-2'].ratings;
for(var x = 0; x < ratings.length; x++){
  counter += data.AQP['2016-2'].ratings[x].jedi;
averageJedi = (counter /ratings.length).toFixed(1);
}
var containerJedi = document.getElementById("averageJedi");
var nodeJedi = document.createTextNode(averageJedi);
var containerNodeJedi = document.createElement("p");
containerNodeJedi.appendChild(nodeJedi);
containerJedi.appendChild(containerNodeJedi);
};

var AQP2 = function(){

  //obteniendo cantidad de alumnas
var students = data.AQP['2017-1']. students;
var counter= 0;
var totalStudents;
for(var i = 0; i < students.length; i++){
totalStudents = counter++;
}
var containerStudents = document.getElementById("prueba");
var nodeStudents = document.createTextNode(totalStudents);
var nodeContainer = document.createElement("p");
nodeContainer.appendChild(nodeStudents);
containerStudents.appendChild(nodeContainer);

//% de alumnas que desertaron
var students = data.AQP["2017-1"].students;
var result = 0;
for(var j=0; j < students.length;j++){
if(students[j].active == false){
result++;
var percentageDesert = ((result*100)/students.length).toFixed(0);
}
}
var prueba = document.getElementById("prueba");
var number = document.createTextNode(percentageDesert);
var numberP = document.createElement("p");
numberP.appendChild(number);
prueba.appendChild(numberP);

//La cantidad y % de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos.
var students = data.AQP["2017-1"].students;
var count= 0;
for(var k = 0; k < students.length; k++){
var sprints = data.AQP["2017-1"].students[k].sprints;
var s1H= data.AQP["2017-1"].students[k].sprints[0].score.hse;
var s1T= data.AQP["2017-1"].students[k].sprints[0].score.tech;
var s2H= data.AQP["2017-1"].students[k].sprints[1].score.hse;
var s2T= data.AQP["2017-1"].students[k].sprints[1].score.tech;
var s3H= data.AQP["2017-1"].students[k].sprints[2].score.hse;
var s3T= data.AQP["2017-1"].students[k].sprints[2].score.tech;

if ((s1H + s2H + s3H)/sprints.length > 840 && (s1T + s2T + s3T)/sprints.length > 1260 && students[k].active === true){
count++;
var percentageTeHs = ((count*100)/students.length).toFixed(0);
}
}
var containerCountTeHs = document.getElementById("prueba");
var nodeCountTeHs = document.createTextNode(count);
var containerNodeCountTeHs = document.createElement("p");
containerNodeCountTeHs.appendChild(nodeCountTeHs);
containerCountTeHs.appendChild(containerNodeCountTeHs);

var containerPorTeHs = document.getElementById("prueba");
var nodePorTeHs = document.createTextNode(percentageTeHs);
var containerNodePorTeHs = document.createElement("p");
containerNodePorTeHs.appendChild(nodePorTeHs);
containerPorTeHs.appendChild(containerNodePorTeHs);

//NET PROMOTER score
var totalPromoters = 0;
var totalPassive = 0;
var totalDetractors = 0;
var totalNps;
var students = data.AQP["2017-1"].students;
var ratings= data.AQP["2017-1"].ratings;
for (var l = 0; l < ratings.length; l++ ){
  totalPromoters += ratings[l].nps.promoters/ratings.length;
  totalPassive += ratings[l].nps.passive/ratings.length;
  totalDetractors += ratings[l].nps.detractors/ratings.length;
  totalNps = totalPromoters - totalDetractors;
}
var containerNps = document.getElementById("prueba");
var nodeNps = document.createTextNode(totalNps);
var containerNodeNps = document.createElement("p");
containerNodeNps.appendChild(nodeNps);
containerNps.appendChild(containerNodeNps);

var containerProm = document.getElementById("prueba");
var nodeProm = document.createTextNode(totalPromoters);
var containerNodeProm = document.createElement("p");
containerNodeProm.appendChild(nodeProm);
containerProm.appendChild(containerNodeProm);

var containerPass = document.getElementById("prueba");
var nodePass = document.createTextNode(totalPassive);
var constainerNodePass = document.createElement("p");
constainerNodePass.appendChild(nodePass);
containerPass.appendChild(constainerNodePass);

var containerDetr = document.getElementById("prueba");
var nodeDetr = document.createTextNode(totalDetractors);
var containerNodeDetr = document.createElement("p");
containerNodeDetr.appendChild(nodeDetr);
containerDetr.appendChild(containerNodeDetr);

//La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
//promedio x sprints
var students = data.AQP["2017-1"].students;
var count= 1;
for(var a= 0; a < students.length; a++){
var sprints = data.AQP["2017-1"].students[a].sprints;

var s1T= data.AQP["2017-1"].students[a].sprints[0].score.tech;
var s2T= data.AQP["2017-1"].students[a].sprints[1].score.tech;
var s3T= data.AQP["2017-1"].students[a].sprints[2].score.tech;


if ((s1T + s2T + s3T)/sprints.length > 1260){
  console.log((s1T + s2T + s3T)/sprints.length);
count++;
var percentageProTech = ((count*100)/students.length).toFixed(0);
}
}
var containerCountTech= document.getElementById("prueba");
var nodeCountTech = document.createTextNode(count);
var containerNodeCountTech = document.createElement("p");
containerNodeCountTech.appendChild(nodeCountTech);
containerCountTech.appendChild(containerNodeCountTech);

var containerProTech= document.getElementById("prueba");
var nodeProTech = document.createTextNode(percentageProTech);
var containerNodeProTech = document.createElement("p");
containerNodeProTech.appendChild(nodeProTech);
containerProTech.appendChild(containerNodeProTech);


//SPRINT 1
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var m = 0; m < students.length; m++){
var tech = data.AQP["2017-1"].students[m].sprints[0].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 2
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var n = 0; n < students.length; n++){
var tech = data.AQP["2017-1"].students[n].sprints[1].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 3
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var o = 0; o < students.length; o++){
var tech = data.AQP["2017-1"].students[o].sprints[2].score.tech;
if(tech >= 1260){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}


//La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos HSE en promedio y por sprint.
//promedio x sprintsvar students = data.AQP["2017-1"].students;
var count= 0;
for(var b = 0; b < students.length; b++){
var sprints = data.AQP["2017-1"].students[b].sprints;

var s1H= data.AQP["2017-1"].students[b].sprints[0].score.hse;
var s2H= data.AQP["2017-1"].students[b].sprints[1].score.hse;
var s3H= data.AQP["2017-1"].students[b].sprints[2].score.hse;


if ((s1H + s2H + s3H)/sprints.length > 840){
  console.log((s1H + s2H + s3H)/sprints.length);
count++;
var percentageProHse = ((count*100)/students.length).toFixed(0);
}
var containerCountHse= document.getElementById("prueba");
var nodeCountHse = document.createTextNode(count);
var containerNodeCountHse = document.createElement("p");
containerNodeCountHse.appendChild(nodeCountHse);
containerCountHse.appendChild(containerNodeCountHse);

var containerProHse= document.getElementById("prueba");
var nodeProHse = document.createTextNode(percentageProHse);
var containerNodeProHse = document.createElement("p");
containerNodeProHse.appendChild(nodeProHse);
containerProHse.appendChild(containerNodeProHse);

//SPRINT 1
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var r = 0; r < students.length; r++){
var hse = data.AQP["2017-1"].students[r].sprints[0].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 2
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var s = 0; s < students.length; s++){
var hse = data.AQP["2017-1"].students[s].sprints[1].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}
//SPRINT 3
var students = data.AQP["2017-1"].students;
var counter = 0;
var percentage;
for(var t = 0; t < students.length; t++){
var hse = data.AQP["2017-1"].students[t].sprints[2].score.hse;
if(hse >= 840){
counter++;
percentage= ((counter*100)/students.length).toFixed(0);
//DOM
}}


//% estudiantes satisfechas con laboratoria
var ratings = data.AQP["2017-1"].ratings;
var counter = 0;
for(var v = 0; v < ratings.length; v++){
var student = data.AQP["2017-1"].ratings[v].student;
counter += student.cumple;
counter += student.supera;
var totalSatis = counter/ratings.length;
}
var containerSatis = document.getElementById("prueba");
var nodeSatis = document.createTextNode(totalSatis);
var containerNodeSatis = document.createElement("p");
containerNodeSatis.appendChild(nodeSatis);
containerSatis.appendChild(containerNodeSatis);

//La puntuación promedio de l@s profesores.
var counter = 0;
var average = 0;
var ratings = data.AQP["2017-1"].ratings;
for(var w = 0; w < ratings.length; w++){
  counter += data.AQP["2017-1"].ratings[w].teacher;
averageProf = (counter /ratings.length).toFixed(1);
}
var containerProf = document.getElementById("prueba");
var nodeProf = document.createTextNode(averageProf);
var containerNodeProf = document.createElement("p");
containerNodeProf.appendChild(nodeProf);
containerProf.appendChild(containerNodeProf);

//La puntuación promedio de l@s jedi.
var counter = 0;
var average = 0;
var ratings = data.AQP["2017-1"].ratings;
for(var x = 0; x < ratings.length; x++){
  counter += data.AQP["2017-1"].ratings[x].jedi;
averageJedi = (counter /ratings.length).toFixed(1);
}
var containerJedi = document.getElementById("prueba");
var nodeJedi = document.createTextNode(averageJedi);
var containerNodeJedi = document.createElement("p");
containerNodeJedi.appendChild(nodeJedi);
containerJedi.appendChild(containerNodeJedi);
};
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
btnAqp.addEventListener("click", AQP1());
