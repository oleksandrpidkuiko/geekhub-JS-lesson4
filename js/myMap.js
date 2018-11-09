'use strict';

function plusOne(element, index, array) {
    element += 1;
    return element;
}
function myMap(array, cbFunction) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(cbFunction(array[i]));
    }
    return newArray;
}

let mapArray = myMap(ARRAY, plusOne);
console.log(mapArray);

