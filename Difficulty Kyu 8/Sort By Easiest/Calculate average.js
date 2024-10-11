// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array){

    // let count = 0;
    // for(let num of array){
    //     count += num;
    // }
    // return count > 0 ? count/array.length : count;

    let reduce = array.reduce(( acc , current)=> (acc + current) , 0);
    return reduce > 0 ? reduce/array.length : reduce ;

}
console.log(findAverage([1,2,3]))
