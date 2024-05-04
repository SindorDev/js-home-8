function findIndex(array, targetString) {
     return array.indexOf(targetString);
 }
 
 let array = ["apple", "banana", "orange", "grape"];
 let targetString = "orange";
 let index = findIndex(array, targetString);
 console.log("Index of", targetString + ":", index); 