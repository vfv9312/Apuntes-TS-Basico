"use strict";
const minombre = 'Angelito';
console.log(minombre);
//npm i typescript --save-dev     --> instalamos typescript en el proyecto
//npx tsc --v    --> vemos la version
//npx tsc ./src/TS-1/hello.ts  --> el siguiente codigo compila a js para poder ejecutarlo
//npx tsc src/Atrapar-bug/demon.ts --target es2022 --outDir dist.
//npx tsc src/*.ts --target es2022 --outDir dist.  ---> podemos idicar que se guarde el archivo js en alguna otra carpeta * significa todos los tsc pero podemos elejir solor una en particular
//npx tsc --init   --> nicializa un archivo tsconfig.ts. En este va estar la configuración como el target, ourDir, strictMode, etc. Evitándonos tener que poner esas flags en cada compilación.
//Una vez con ese archivo, solo corremos el comando npx tsc y listo.
//Y ya por ultimo, podemos evitarnos la compilación continua corriendo el comando npx tsc --watch
