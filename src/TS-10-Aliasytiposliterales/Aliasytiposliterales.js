"use strict";
(() => {
    let userId;
    function greeting(userId, shirtSize) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
        else {
            console.log(`number ${userId.toFixed(1)} - Size ${shirtSize}`);
        }
    }
    //Literal types
    let shirtSize; // para no tener que declarar 3 o 4 valores que unicamente seran las variables, pueden hacerse varibales literales
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    greeting(1223, 'M');
})();
