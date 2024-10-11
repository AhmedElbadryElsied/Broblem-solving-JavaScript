// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

function invert(array){
    
    // let newArray = [];

    // for(let num of array){
    //     newArray.push(-num)
    // }
    // return newArray;


    return array.map((ele)=> - ele);

}
console.log(invert([1, -2, 3, -4, 5]))