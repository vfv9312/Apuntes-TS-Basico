"use strict";
(() => {
    //any es para que sirva para modificar el tipo de dato como quieran
    //podria servir cuando se realiza migracion o pruebas con los tipos de datos que no van a ser claros
    let myDinamicVar;
    myDinamicVar = 100;
    myDinamicVar = null;
    myDinamicVar = {};
    myDinamicVar = 'hola'; //debido a que puede ser cualquier tipo de dato el IDE no nos ofrece ayuda para usar metodos de string y lo tendriamos que usar manual
    //o le decimos que lo trate como un string
    const rta = myDinamicVar.toLowerCase(); // en este caso con as le decimos tratalo como un string
    console.log(rta);
    myDinamicVar = 234;
    const rta2 = myDinamicVar.toFixed(); //otra forma de hacer que lo trate como un numero
    console.log(rta2);
})();
