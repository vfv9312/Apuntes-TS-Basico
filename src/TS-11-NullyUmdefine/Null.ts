(()=>{
// En TypeScript su le das valor null o undefined sin asignar type lo va considerar any
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

//tenemos que darle type null sin embargo no hay casos en el que solo tengamos una variable null
let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined

//porlo que se le da valor null y number o lo que necesitaremos cuando cambie el null
let myNumber: number | null = null; // el null = null significa que tendremos null como el valor con el que inicializa.
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";

function hi(greeting:string|null) {
    let hello:string = 'Hello ';
    if (typeof greeting === 'string') {
        hello += greeting.toLowerCase();
    }else{
        hello += 'nobody'.toLowerCase();
    }
    console.log(hello);
}
hi('Vladimir');
hi(null);

function hiV2(greeting:string|null) {
    let hello:string = 'Hello ';
        hello += greeting?.toLowerCase() || 'nobody'.toLowerCase(); //El Optional chaining o encadenamiento opcional es
        //cuando colocamos el simbolo ? para hacer la condicion de que se puede aplique el tolowercase y si no con los simbolos || entra el 'nobody'

    console.log(hello);
}
hiV2('Alexis');
hiV2(null)

})();
