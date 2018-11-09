'use strict';

function someFilter(element) {
    if (element > 0 ) {
        return true;
    } else {
        return false;
    }
}
function myFilter(array, cbFunction) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if (cbFunction(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let filterArray =  myFilter(ARRAY, someFilter);
console.log(filterArray);