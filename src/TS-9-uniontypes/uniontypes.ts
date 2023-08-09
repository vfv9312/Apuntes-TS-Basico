(()=>{
let userId:(string|number);// union types es cuando tengo una variable que puede ser uno, dos o mas tipos de variables
userId =2222;
userId = 'asd';

function greeting(myText:string| number) {//al recibir el dato hay que establecer que tipo de dato sera la variable

typeof myText === 'string' ? console.log(`string ${myText.toLowerCase()}`) : console.log(`number ${myText.toFixed(1)}`);
}
greeting('asa');
greeting(123);
})();
