'use strict';

let newArray = [];

function pushElementsToNewArray(newElement) {
    newArray.push(newElement);
}

function myConsoleLog(element, index, array) {
    console.log('Element:' + element + '\n' + "Index:" + index + '\n' + "Array" + array);
}

function addOne(element, index, array) {
    element +=1;
}

Array.prototype.myForEach = function(cbFunction) {

    for (let i = 0; i < this.length; i++) {
        cbFunction(this[i], i, this);
    }
};

ARRAY.myForEach(pushElementsToNewArray);
ARRAY.myForEach(myConsoleLog);
ARRAY.myForEach(addOne);
console.log(newArray);