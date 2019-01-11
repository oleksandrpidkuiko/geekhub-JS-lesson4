'use strict';

let someArray = [-1,0,10,1,2,-4];

function someFilter(element) {
    if (element > 0 ) {
        return true;
    } else {
        return false;
    }
}

Array.prototype.myFilter = function (cbFunction) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if (cbFunction(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

let filterArray =  someArray.myFilter(someFilter);

console.log(someArray);
console.log(filterArray);