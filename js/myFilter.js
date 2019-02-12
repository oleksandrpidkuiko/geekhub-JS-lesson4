'use strict';

const someArray = [-1,0,10,1,2,-4];
const callbackFilter = (element, index, array) => element > 0;

Array.prototype.myFilter = function (callback) {
    const newArray = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) newArray.push(this[i]);
    }

    return newArray;
};

let filterArray =  someArray.myFilter(callbackFilter());

console.log(someArray);
console.log(filterArray);