"use strict";
//vamos a mantenerlo en una funcion para que este dentro de un scope
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);
    let custommerAge = 28;
    //custommerAge = custommerAge + '1'; //error  debido a que cocatenaria y dariao 281
    custommerAge = custommerAge + 1;
    console.log('custommerAge', custommerAge);
    // let productInStock:number; // no se puede dejar una variable sin asignar para imprimir o comparar
    // console.log('productInStock', productInStock);
    // if (productInStock > 10)) {
    //   console.log('is greater');
    // }
    let discount = parseInt('jaja'); //al no poder convertir a number va mandar un NaN
    console.log('discount', discount);
    let hexadecimal = 0xfff; //los hexadecimales se consideran como number
    console.log('hex', hexadecimal);
    let binario = 0b1010; //los binarios son aceptados como number para declarar comienza en 0b y luego solo 1 y 0
    console.log('bin', binario); // en binario 1010 es 10
    const myNumber = 10; //no usar Number debdido a que se usa en otras cosas
    console.log('Number', myNumber);
})();
