'use strict';

let newArray = [];

function pushElementsToNewArray(newElement) {
    newArray.push(newElement);
}
function myConsoleLog(element, index, array) {
    console.log('Element:' + element + '\n' + "Index:" + index + '\n' + "Array" + array);
}
function myForEach(array, cbFunction) {
    for (let i = 0; i < array.length; i++) {
        cbFunction(array[i], i, array);
    }
}

myForEach(ARRAY, pushElementsToNewArray);
myForEach(ARRAY,myConsoleLog);
console.log(newArray);