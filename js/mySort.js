'use strict';

Array.prototype.mySort = function(fn) {

    for (let i = 0; i < this.length; i++) {
        this[i] = fn(this[i-1], this[i]);
    }

    return this;
};
