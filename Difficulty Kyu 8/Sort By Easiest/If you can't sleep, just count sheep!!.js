// If you can't sleep, just count sheep!!


// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num){

    let newArray=[];

    for(let i=1; i<= num ; i++){
        newArray.push(`${i} sheep...`)
    }

    return newArray.join("");

}
console.log(countSheep(6))