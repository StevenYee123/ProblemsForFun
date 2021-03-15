

// Bucket_1 = 12G, Bucket_2 = 7G 

// // Bucket_1 = 5/12 Bucket_2 = 0/7

// // 1, 2, 3, .....11, 12

// //Numbers we can have: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

// big   | small
/*
12   | 7
12   | 0
5    | 7 
5    | 0
0    | 5
12   | 5
10   | 7
10   | 0
3    | 7
3    | 0
0    | 3
12   | 3
8    | 7
8    | 0
1    | 7
1    | 0
0    | 1
12   | 1
6    | 7
6    | 0
0    | 6
12   | 6
11   | 7
11   | 0
4    | 7
4    | 0
0    | 4
12   | 4
9    | 7
9    | 0
2    | 7
2    | 0
0    | 2
12   | 2
7    | 7
7    | 0
0    | 7
12   | 7
12   | 0
5    | 7

Have a function take in two container sizes
Check if the smaller container is at its capacity, then simply pour as much as you can from the big into the smaller container, if either container has a number we haven't seen, add it to either a set or an array of possilbe numbers made. Continue the process, if we repeat the same thing then we stop the loop.
*/

// temp = 5
//0  | 5
//numbers = [12, 7, 5, ]
function getPossibleNumbers(big, small){
    let numbers = [];
    let bigBucket = big;
    let smallBucket = small;
    let idx = 0
    while(idx < 100){
        if(!numbers.includes(bigBucket)){
            numbers.push(bigBucket);
        }
        
        if(!numbers.includes(smallBucket)){
            numbers.push(smallBucket);
        }
        
        if(smallBucket === small){
            smallBucket = 0;
        }
        
        if(bigBucket === 0){
            bigBucket = big;
        }
        
        let temp = smallBucket;
        smallBucket = Math.min(small, smallBucket + bigBucket); //7
        bigBucket = Math.max(0, bigBucket - (small - temp)); 
        
        idx++;
        
    }
    
    return numbers.sort((a, b) => a - b);
}

console.log(getPossibleNumbers(12, 3));
/*
    Between 2 numbers, get the LCD, and the numbers in increments of the LCD are the numbers you can achieve between the two numbers
*/