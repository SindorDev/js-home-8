function reverseImage(image) {
     for (let i = 0; i < image.length; i++) {
         for (let j = 0; j < image[i].length; j++) {
             image[i][j] = image[i][j] === 0 ? 1 : 0;
         }
     }
     return image;
 } 
 let image = [
     [0, 1, 0],
     [1, 0, 1],
     [0, 1, 0]
 ];
 let reversedImage = reverseImage(image);
 console.log(reversedImage); 