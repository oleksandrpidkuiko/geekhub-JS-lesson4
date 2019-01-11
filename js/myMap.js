'use strict';

function plusOne(element, index, array) {
    element += 1;

    return element;
}

Array.prototype.myMap = function myMap(cbFunction) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
       newArray.push(cbFunction(this[i]));
    }

    return newArray;
};

let mapArray = ARRAY.myMap(plusOne);
console.log(mapArray);

