// Remove First and Last Character.

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){

    // return str.slice(1 , str.length - 1);
    // return str.substr(1 , str.length - 2);
    // return str.substring(1 , str.length - 1);

    let newString="";
    for(let i=0 ; i<str.length ; i++){
        if(i >= 1){
            newString += i <= str.length - 2 ? str[i] : ""
        }
    }
    return newString;


}
console.log(removeChar("Ahmed"))