function onlyUniqueCharacters(strings) {
     let uniqueStrings = [];
 
     strings.forEach(function(string) {
         let lowercaseString = string.toLowerCase();
         
         let uniqueChars = new Set(lowercaseString);
 
         if (uniqueChars.size === lowercaseString.length) {
             uniqueStrings.push(string);
         }
     });
 
     return uniqueStrings;
 }
 
 let strings = ["hello", "world", "javascript", "unique", "characters"];
 console.log(onlyUniqueCharacters(strings));
 
