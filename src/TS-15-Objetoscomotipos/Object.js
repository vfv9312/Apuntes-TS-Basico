"use strict";
(() => {
    //funcion 2
    const products = []; //creamos un array vacio con el type any que puede ser cualquiera
    const addProduct = (data) => {
        products.push(data); //los parametros recibidos se agregaran al array
    };
    addProduct({
        title: 'Pro1',
        creatAd: new Date(1993, 1, 1),
        stock: 100
    });
    console.log(products); //imprimimos el objeto
})();
