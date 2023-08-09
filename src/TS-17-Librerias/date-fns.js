"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//npm install date-fns --save
const date_fns_1 = require("date-fns");
const date = new Date(1993, 11, 30); //0 = enero, 1 = febrero y asi
const rta = (0, date_fns_1.subDays)(date, 500); //subDays resta dias
const str = (0, date_fns_1.format)(rta, 'yyyy/MM/dd');
console.log(str);
