function sumEvenOdd(numbers) {
     let sumEven = 0;
     let sumOdd = 0;
 
     for (let number of numbers) {
         if (number % 2 === 0) {
             sumEven += number;
         } else {
             sumOdd += number;
         }
     }
 
     return [sumEven, sumOdd];
 }
 
 let numbers = [1, 2, 3, 4, 5, 6];
 let sums = sumEvenOdd(numbers);
 console.log("Sum of even numbers:", sums[0]);
 console.log("Sum of odd numbers:", sums[1]); 
 