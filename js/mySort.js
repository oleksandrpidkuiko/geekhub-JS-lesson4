'use strict';

Array.prototype.mySort = function(fn) {

    if (typeof fn === 'undefined') {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length-1-i; j++) {
                if (String.prototype.charCodeAt.call(this[j+1],0) < String.prototype.charCodeAt.call(this[j],0)) {
                let temp = this[j+1];

                this[j+1] = this[j];
                this[j] = temp;
                }
            }
        }

        return this;

    } else {

        for (let i = 0; i < this.length; i++) {
            this[i] = fn(this[i-1], this[i]);
        }
    }

    return this;
};
