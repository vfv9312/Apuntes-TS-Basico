"use strict";
(() => {
    let prices = [1, 2, 3, 4, 5, 6, 123, 'hola', true]; //cuando inicialisas un array solo se podra agregar datos con el que inicialisaste si no marcara erro
    //en este caso solo podremos agregar string, number y boolean
    prices.push(341);
    let product = ['hola', true];
    product.push(false);
    let mixed = ['hola', true]; // si inicialisas con o sin datos y despues quieres agregar un objeto o arreglo colocamos en el type object
    mixed.push(13);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);
    let number = [1, 2, 3, 4, 5, 6, 123]; //si el arreglo es de solo de number podremos usar metodos que nos ayudara con number
    let resul = number.map(item => item * 2);
    console.log(resul);
})();
