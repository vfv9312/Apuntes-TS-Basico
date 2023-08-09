"use strict";
const productPrice = 20;
//declaracion       tipado
let myProductName = 'Product 1';
let myProductPrice = 123;
myProductName = 'change';
myProductName.toLowerCase(); // solo me da la opciones de metodos para string
myProductPrice.toFixed(); // solo me da las opciones para un number
const myProductStock = 1000; // constante no es necesario poner el tipo debido a que como es constante no puede cambiar
const myProductName2 = 'Product 1';
(() => {
    let myProductName = 'Product 3';
    let myProductPrice = 50;
})();
