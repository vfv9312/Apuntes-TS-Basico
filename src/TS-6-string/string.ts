(()=> {
  let productTitle:string= 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('producTitle', productTitle);

  const productDescription = "I'm bla bla bla bla"; // no hay difenrencia entre usar "" o '' sin embargo si vas a usar texto como I'm mejor usar "" para que TS no se confunda
  console.log('productDescription', productDescription);

  const summary =  `con la tecla option y la tecla }  sale  el tick
                  producto : ${productTitle}
                 descripcion : ${productDescription}`; // sirve para construir cadenas de forma muy sencilla, con la interpolación y cocatenar

                console.log(summary);
  const mystring:string = `no usar String por favor`;

                })();
