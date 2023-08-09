"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password); //para imprimir tenemos que indicar que tipo de datos es
    };
    //login('vfv9312@gmail.com','1234');embes de enviar uno por uno cada dato
    login({
        email: 'cfv9918@gmail.com',
        password: '1234'
    });
    const products = []; //creamos un array vacio con el type any que puede ser cualquiera
    const addProduct = (data) => {
        products.push(data); //los parametros recibidos se agregaran al array
    };
    addProduct({
        title: 'Pro1',
        creatAd: new Date(1993, 1, 1),
        stock: 100,
        size: 'S'
    });
    console.log(products); //imprimimos el objeto
})();
