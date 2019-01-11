'use strict';

let pushArray = [3,0,-2];

Array.prototype.myPush = function myPush(element) {
    this[this.length] = element;
};

pushArray.myPush({a: -1});
console.log(pushArray);