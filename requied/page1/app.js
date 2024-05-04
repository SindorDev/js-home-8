let text = prompt("So'z kiriting");

function spelling() {
     let answer = [];
     for(let i = 0; i <= text.length; i++) {
     answer.push(text.slice( i))
     }
     return answer
}

console.log(spelling());