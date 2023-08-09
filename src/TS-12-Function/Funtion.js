"use strict";
(() => {
    function createProductToJSON(title, createADT, // en caso de Date podemos usar ese tipo de dato iniciando con mayuscula sin problema
    stock, size) {
        return {
            title, createADT, stock, size
        };
    }
    const product = createProductToJSON('P1', new Date(), 12, 'M');
    console.log(product);
    console.log(product.title);
    console.log(product.stock);
    // FUNCION 2
    const createProductToJSONV2 = (// enves de una funcion normal esta es una arrow funtion
    title, createADT, // en caso de Date podemos usar ese tipo de dato iniciando con mayuscula sin problema
    stock, size // si agrego el signo de interrogacion al parametro significa que es opcional si lo envian y sera undefiend
    ) => {
        return {
            title, createADT, stock, size
        };
    };
    const product2 = createProductToJSONV2('P1', new Date(), 12); // no enviamos el size en los argumentos por lo que es opcional
    console.log(product);
    console.log(product.title);
    console.log(product.stock);
});
