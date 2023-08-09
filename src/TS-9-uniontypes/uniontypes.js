"use strict";
(() => {
    let userId; // union types es cuando tengo una variable que puede ser uno, dos o mas tipos de variables
    userId = 2222;
    userId = 'asd';
    function greeting(myText) {
        typeof myText === 'string' ? console.log(`string ${myText.toLowerCase()}`) : console.log(`number ${myText.toFixed(1)}`);
    }
    greeting('asa');
    greeting(123);
})();
