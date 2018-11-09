'use strict';

let pushArray = [3,0,-2];

function myPush(array, element) {
    array[array.length] = element
}

myPush(pushArray,{a: -1});
console.log(pushArray);