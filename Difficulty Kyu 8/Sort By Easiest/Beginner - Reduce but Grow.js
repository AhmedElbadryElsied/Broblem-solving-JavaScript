// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){

    // let count = 1 ;
    // for(let num of x){
    //     count *= num
    // }
    // return count;

    return x.reduce((acc , current)=> acc * current , 1);


}
console.log(grow([1, 2, 3, 4]))
