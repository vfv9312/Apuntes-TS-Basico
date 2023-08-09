const productPrice : number = 20;
//declaracion       tipado
let myProductName:string = 'Product 1';
let myProductPrice:number = 123;
myProductName = 'change';
myProductName.toLowerCase();// solo me da la opciones de metodos para string
myProductPrice.toFixed(); // solo me da las opciones para un number
const myProductStock:number = 1000; // constante no es necesario poner el tipo debido a que como es constante no puede cambiar
const myProductName2= 'Product 1';

(()=>{//si usamos una arrow funcion debido al scope se puede usar la misma variable.
  let myProductName:string = 'Product 3';
  let myProductPrice:number = 50;
})();
