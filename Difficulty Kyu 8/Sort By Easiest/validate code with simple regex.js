// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode(code){

    let newCode= code.toString();

    
    for(let i = 0 ;i < newCode.length ; i++ ){

        if(newCode[i] == 1 || 2 || 3){

            console.log(true)

        }
        else{
            console.log(false)

        }

        
    }

}
console.log(validateCode(8966))