'use strict';

Array.prototype.myMap = function myMap(cbFunction) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
       newArray.push(cbFunction(this[i], i, this));
    }

    return newArray;
};
