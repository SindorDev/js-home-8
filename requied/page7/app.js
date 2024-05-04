function transformUpvoteCounts(upvoteString) {
     return upvoteString.split(' ').map(count => {
         if (count.includes('k')) {
             return parseFloat(count) * 1000;
         } else {
             return parseInt(count);
         }
     });
 }
 
 let upvoteString = "1 2.5k 3 4.2k 5";
 let upvoteCounts = transformUpvoteCounts(upvoteString);
 console.log(upvoteCounts);
 