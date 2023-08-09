(()=>{
const login = (data : {email:string, password : string})=>{//creamos el parametro objeto "data" que recibira 2 atributos
  console.log(data.email, data.password);//para imprimir tenemos que indicar que tipo de datos es
}

//login('vfv9312@gmail.com','1234');embes de enviar uno por uno cada dato

login({
  email: 'cfv9918@gmail.com',
  password:'1234'
})

const products: any[] = [];//creamos un array vacio con el type any que puede ser cualquiera
//funcion 2
type Sizes = 'S'| 'M' | 'L' | 'XL';//creamos un type especifico que solo tendra esos valores
const addProduct = (data:{//creamos una arrow funtion que recibe el parametro objeto "data"
  title : string,
  creatAd: Date,
  stock: number,
  size?:Sizes// el ? significa que es un parametro opcional podria o no ser recibido y se convertiria en un undefiend
})=>{
products.push(data);//los parametros recibidos se agregaran al array
}

addProduct({
  title: 'Pro1',
  creatAd: new Date(1993,1,1),
  stock: 100,
  size:'S'
})
console.log(products);//imprimimos el objeto

})();
