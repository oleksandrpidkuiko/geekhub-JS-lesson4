'use strict';

Array.prototype.myPush = function myPush(element) {
    this[this.length] = element;
};
