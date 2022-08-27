//cheat sheet website https://www.bigocheatsheet.com/


//** / O(n) or linear time **
//key phrase constant 


// function logItems (n) {
//     for (let i = 0; i < n; i++){
// console.log(i)
//     }
// }

// console.log(logItems(10))


//** / Drop Constants **


// code is techincally O(2n) but we drop the constant 2 and just say O(n)
// when we have O(*insert number here*n) we will always drop the constant
// function logItems (n) {
//     for (let i = 0; i < n; i++){
// console.log(i)
//     }
//     for(let j = 0; j < n; j++){
//         console.log(j)
//     }
// }

// console.log(logItems(3))


//** / O(n²) or quadratic time **
//key phrase loop within a loop


// the output of this is n*n so 10 * 10 = 100
//O(n²) is very inefficient the goal should be to refactor the code to be O(n)

//  function logItems (n) {
//         for (let i = 0; i < n; i++){
//             for(let j = 0; j < n; j++){
//                 //in the case of triple nested loops, we will have to do n*n*n or 10*10*10 = 1000 which would be O(n³)
//                 //no matter the size of the exponent, we will always write it as O(n²)
//               for (let k = 0; k < n; k++){
//                 console.log(i, j, k)
//               }
//             }
 
//         }
//     }

//     console.log(logItems(10))


//** / Drop Non-Dominants **

//this loop is O(n²) but we can drop the non-dominant loop and just say O(n²)

// function logItems(n){
//     //loop runs O(n²)
//     for (let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){ 
//             console.log(i, j)
//         }
//     }
//     //loop runs O(n)
//     for(let k = 0; k < n; k++){
//         console.log(k)
//     }
// }

// console.log(logItems(10))

//** O(1) or constant time **


//the number of operations doee not change with the size of the input
//most efficient of all big O functions
// function addItems(n){
//     return n+n // if we add n+n+n thats O(2) but we simplify it to O(1)
// }

// console.log(addItems(10))

//** O(log n) or logarithmic time **
//key phrase divide and conquer


// [1,2,3,4,5,6,7,8] if we had to search for 1 we would split array in half 
// [1,2,3,4] and [5,6,7,8] and then we would search each half for 1
//then we split it again and do the same thing 
// [1,2] and [3,4] and we would search for 1 in each half and then we would split again and do the same thing
// [1] and [2] and we would search for 1 in each half and then we find 1 in the first half 
//this technique is called divide and conquer
//it only took 3 steps even though we had 8 items in our origial array 
// O(n Log n) is the most efficient sorting algorithm

//** interview tip different terms for inputs **
//you would initially think this is o(n) because there is no nested for loops and while each loop is o(n)
//you would use the parameters given to you O(a) and O(b) since you arent using the the parameters 
//the best you could say this is O(a+b)
// if they were nested and had the same parameters you would say this is O(a*b)

// function logItems(a,b){
//     //loop is o(a) 
//     for (let i = 0; i < a; i++){
//         console.log(i)
//     }
//     //loop if o(b)
//     for(let j = 0; j < b; j++){
//         console.log(j)
//     }
// }

// console.log(logItems(10,10))


//** Arrays and some methods big O notation  */

//END OF ARRAY (push and pop methods)
// [11,3,23,7]
// [0, 1, 2,3] index values
// if we used .push to add 17 to the end of the array we would have [11,3,23,7,17] with in index values [0,1,2,3,4]
// and if we usedpop to remove the last item we would have [11,3,23,7] with index values [0,1,2,3]
// there is no need to reindex the array because the index values are still the same
//push and pop are both O(1) operations

// BEGINNING OF ARRAY (unshift and shift methods)
// its different for the other end of the array using shift because you have to reindex the array
// if array is [11,3,23,7] and we use shift to remove the first item we would have [3,23,7] with index values [1,2,3]
//[3,23,7] there index values become [0,1,2]
// the same with unshift bringing back the 11 the array [3,23,7] with index values [0,1,2] would have to be 
// reindexed to [11,3,23,7] with index values [0,1,2,3] these to methods are O(n) where n is the size of the array
// at the end of an array adding and removing items is O(1) while doing things in the beginning of the array is O(n)

//MIDDLE OF ARRAY (splice method)
//so given an array [11,3,23,7] we use .splice(1,0,"hi") to add "hi" to the middle of the array
// the array would be [11,"hi",3,23,7] with reindex values [0,1,2,3,4] which is O(n)
//the same is true for removeing items from the middle of the array using .splice(1,1) the array would be [11,3,23,7]
//and the reindex values would be [0,1,2,3] which is O(n)

//TIPS FOR SEARCHING ARRAYS
//if you search by index the big O notation is O(1) becuase you can jump straight to the index you want to search for
//but if you search by value the big O notation is O(n)