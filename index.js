"use strict";
/*let product = "Кресло";
let price = 10000;
let cart = `${product}, цена ${price} рублей`;
alert(cart);
*/





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max<=min){
    alert ('Ошибка');
  }
  else{
  return Math.floor(Math.random() * (max - min)) + min;
  }

}
alert(getRandomInt(1, 10));
//eslint-disable-next-line
console.log(getRandomInt);
