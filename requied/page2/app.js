function findIndexes(word, character) {
     let firstIndex = word.indexOf(character);
     let lastIndex = word.lastIndexOf(character);
     
     return [firstIndex, lastIndex];
 }
 
 let word = prompt("So'z kiriting");
 let character = prompt("qaysi harfni indeksni qidirmoqdasiz");
 let indexes = findIndexes(word, character);
 console.log("First index:", indexes[0]); 