"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load the full build.
//var _ = require('lodash'); //no puede encontrar esta sintaxis que no esta soportada
//npm i --save-dev @types/lodash
//instalamos con el codigo anterior
const lodash_1 = __importDefault(require("lodash"));
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
];
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
