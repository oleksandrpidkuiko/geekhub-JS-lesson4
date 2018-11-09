'use strict';

const ARRAY = [5,-10,1,0,4,0];

function mySort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let buf = array[j + 1];
                array[j + 1] = array[j];
                array[j] = buf;
            }
        }
    }
    return array;
}

console.log(ARRAY);
let sortArray = mySort(ARRAY);
console.log(sortArray);