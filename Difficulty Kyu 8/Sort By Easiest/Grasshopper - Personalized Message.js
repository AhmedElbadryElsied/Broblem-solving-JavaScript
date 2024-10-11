// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	                  return

// name equals owner	'Hello boss'


// otherwise	       'Hello guest'


function greet(name ,owner){

    switch (owner){
        case name :
            return 'Hello boss';
            break;
        default:
            return 'Hello guest';
            break;
    }

}
console.log(greet("ahmed" , "Ahmed"));