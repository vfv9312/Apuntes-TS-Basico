(()=>{
const calcTotal = (prices:number[]):string =>{ // al colocar el : string decimos que la funcion retornara un string obligado
  let total = 0;
prices.forEach((item) =>{
total += item; //va ir sumando cada numero del array
});
return total.toString();//como debe retornar un string tenemos que convertirlo
}

//const rta = calcTotal([1,2,3,4,5,6]); //argumentos que enviaremos
//console.log(rta);//imprimimos

//Funcion 2
const printTotal = (prices:number[]):void =>{// existen funciones que no retornan nada o que solo llaman a otra funcion
  //y esas funciones que no retornan nada se consideran :void
const rta = calcTotal(prices);
console.log(`El total ${rta}`);// El total 15

}

printTotal([1,2,3,4,5]);

})();
