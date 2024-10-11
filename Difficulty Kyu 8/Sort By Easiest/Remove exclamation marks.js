// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s){

    // return s.split("").filter((ele)=> ele != "!").join("");

    // Regex 
    return s.replace(/!/g,"");
    
}
console.log(removeExclamationMarks("Hello Worled!"));