// Name Array Capping


// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']


function capMe (names){

   

    return names.map((word) =>word.split("").map((litter , index )=>index == 0 ? litter.toUpperCase() : litter.toLowerCase()  ).join(""));




}
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))

