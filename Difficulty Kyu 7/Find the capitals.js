// Find the capitals

// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]



var capitals = function (word) {

    let upperCasesIndexs = []; 

    for(let i = 0 ; i < word.length ; i++){

        // word[i] === word[i].toUpperCase() ? upperCasesIndexs.push(i) : null


        if(word[i] === word[i].toUpperCase()) upperCasesIndexs.push(i) ;
    }



    return upperCasesIndexs 

}
console.log(capitals("CodEWaRs"))