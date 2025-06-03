// Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough (a , limit){

    let result =[];

    for(let i = 0 ; i < a.length ; i++){

        a[i] <= limit ? result.push(true) :result.push(false)

    }

    return result.includes(false) ? false : true


}
console.log(smallEnough([66,101] ,  200))