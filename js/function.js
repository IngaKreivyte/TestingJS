"use strict";
 function generateText (data){
   var HTML='<div class="allBlocks">';
   var allWords=[];
   var newline=[];
   data.forEach(duotiData => {
     HTML+=`<div class= " blockData">
     <h2> ${duotiData.name}</h2>
     <p> ${duotiData.description}</p>
     </div>`;
data.forEach((duotiData) =>{
for(var i=0; i<duotiData.description.length; i++)
  allWords.push(duotiData.description[i]) 
  
})

console.log(allWords);
for(var i=0; i<allWords.length;i++)
if(newline.indexOf(allWords[i])===-1){
  newline.push(allWords[i])
  
}

});

console.log(newline);
HTML+='<div>VISI UNIQUE WORdS:</div>'
HTML+=`<div class= "line"> ${newline}</div>`
   HTML+='</div>'
   return HTML;
 }

 

 //veiksmai:
 //1. pavaizduoti turima data panaudojus js per html
 //2. sukurti new array, kuriame bus isvardyti visi zodziai
 //3. kitas new array, kuriame isvardyti unique zodziai
 //4. sukurti keleta array
 //5. isvardyti unique zodzius is esamu erray