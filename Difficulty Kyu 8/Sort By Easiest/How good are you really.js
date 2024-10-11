// How good are you really?

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


function bestterThanAverage(classPoints , yourPoints){

    // let count= 0;
    // for(let point of classPoints){
    //     count += point;
    // }

    // let averagePointClass = count/classPoints.length;
    
    // return averagePointClass <= yourPoints;

    return classPoints.reduce((acc ,current)=> acc + current , 0)/ classPoints.length <= yourPoints;
    

}
console.log(bestterThanAverage([2,3] , 5))