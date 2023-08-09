(()=>{
  type userID = string | number; //type es una palabra reservada que nos ayuda a guardar los tipos de datos para no tener que escirbirla varias veces
let userId : userID;
function greeting(userId:userID, shirtSize:Size) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  }else{
    console.log(`number ${userId.toFixed(1)} - Size ${shirtSize}`);

  }
}
//Literal types
let shirtSize : string;// para no tener que declarar 3 o 4 valores que unicamente seran las variables, pueden hacerse varibales literales
shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';

type Size = 'M' | 'L' | 'XL';

greeting(1223,'M');


})();
