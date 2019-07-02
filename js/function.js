"use strict";
 function generateText (data){
var HTML = '<div class="colText">';
  for( var i=0; i<data.length; i++){
  HTML+=`<div class="texts">
  <h3>${data[i].name}</h3>
  <p>${data[i].description}</p>
  </div>`;
  
}
HTML+= '</div>';

HTML+=`<div class= "counting"> <div>Visi zodziai:</div><div>`;
// data.forEach(sujungtitekstai => {
//   HTML='';
//   HTML+=`<div>
//   <div> ${data[i].description}</div>
// //   </div>`;
// });
return HTML;

 }
 