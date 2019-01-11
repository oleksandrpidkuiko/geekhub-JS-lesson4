'use strict';

let ARRAY = [5,-10,1,0,4,0];

Array.prototype.mySort = function() {
    for (let i = 0; i < this.length - 1; i++) {

        for (let j = 0; j < this.length - 1 - i; j++) {

            if (this[j + 1] < this[j]) {
                let buf = this[j + 1];

                this[j + 1] = this[j];
                this[j] = buf;
            }
        }
    }
    return this;
};

console.log(ARRAY);
ARRAY.mySort();
console.log(ARRAY);
