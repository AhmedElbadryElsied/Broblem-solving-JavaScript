// Exes and Ohs


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO (str){

    let X = [];
    let O = [];
    for(let lettir of str){
        
        if ( lettir ==  "x" || lettir ==  "X") {
            X.push(lettir);
        } else if(lettir ==  "o" || lettir ==  "O") {
            O.push(lettir)
        }

    }
    return X.length === O.length;

}
console.log(XO("ooxx"))
