let num1 = +prompt("Enter num1: ");
let num2 = +prompt("Enter num2: ");
let num3 = +prompt("Enter num3: ");
let num4 = +prompt("Enter num4: ");
let num5 = +prompt("Enter num5: ");

let arr = []

arr.push(num1, num2, num3, num4, num5);

function reversenNum(arr) {
    
    let changedVersion = arr.reverse();

    return changedVersion;
}

let result = reversenNum(arr);  
console.log(result);