//npm install date-fns --save
import {subDays, format} from 'date-fns';

const date = new Date(1993,11,30)//0 = enero, 1 = febrero y asi
const rta = subDays(date, 500);//subDays resta dias
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
