'use strict';

Array.prototype.myForEach = function(cbFunction) {
    for (let i = 0; i < this.length; i++) {
        cbFunction(this[i], i, this);
    }
};
