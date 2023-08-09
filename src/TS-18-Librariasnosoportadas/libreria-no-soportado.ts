// Load the full build.
//var _ = require('lodash'); //no puede encontrar esta sintaxis que no esta soportada
//npm i --save-dev @types/lodash
//instalamos con el codigo anterior
import _ from 'lodash';


const data = [
  {
      username: 'nico',
      role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'seller'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)

