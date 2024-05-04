function capitalizeFirstLetter(names) {
     return names.map(name => {
         return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     });
 }
 
 let names = ["alice", "bob", "charlie"];
 let capitalizedNames = capitalizeFirstLetter(names);
 console.log(capitalizedNames);
 