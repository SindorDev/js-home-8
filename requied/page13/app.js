let text = prompt("Sonni so'z sifatida kiriting");

function number() {
     switch (text) {
         case "one": {
          console.log(1);
          break
     }
          case "two": {
          console.log(2);
          break
          }
          case "three": {
          console.log(3);
          break
          }
          case "four": {
          console.log(4);
          break
          }
          case "five": {
          console.log(5);
          break
          }
          case "six": {
          console.log(6);
          break
          }
          case "seven": {
          console.log(7);
          break
          }
          case "eight": {
          console.log(8);
          break
          }
          case "nine": {
          console.log(9);
          break
          }
          case "ten": {
          console.log(10)
          }
         default: {
          console.log("Bu son kiritilmagan");
         }
     }
}

console.log(number())