(()=>{

 //funcion 2
  const products: any[] = [];//creamos un array vacio con el type any que puede ser cualquiera
  type Sizes = 'S'| 'M' | 'L' | 'XL';//creamos un type especifico que solo tendra esos valores
  type Products = {    title : string,
    creatAd: Date,
    stock: number,
    size?:Sizes// el ? significa que es un parametro opcional podria o no ser recibido y se convertiria en un undefiend
  }

  const addProduct = (data:Products)=>{//un objeto con datos de objetos
  products.push(data);//los parametros recibidos se agregaran al array
  }

  addProduct({
    title: 'Pro1',
    creatAd: new Date(1993,1,1),
    stock: 100
  })
  console.log(products);//imprimimos el objeto

  })();
