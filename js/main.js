import CardContentMod from '../libraries/CardsContent.js';
import CardCreateMod from '../libraries/getCardsCreate.js';
import '../static/index.scss';
// const path = require('path');

// const jsonLink = path.resolve(__dirname,'packages/product.json');
// const json = JSON.parse(jsonLink);
// console.log(json);

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const cardsFlex=document.querySelector('.cards_flex');
const card = new CardCreateMod();
const content = new CardContentMod();

const numberCard = 10;

for(let i=0;i<numberCard;i++){
    card.CardAdd(cardsFlex,'card');
}
const classCard = document.querySelectorAll('.card');

for(let i=0;i<numberCard;i++){
    card.CardContent(classCard[i],content.button('button',`Купить`));
    card.CardContent(classCard[i],content.p('p',`price: ${random(99,999)}`));
    card.CardContent(classCard[i],content.p('p',`description: пиздатые утки`));
    card.CardContent(classCard[i],content.img('img',`../img/${i+1}.png`));
    card.CardContent(classCard[i],content.h1('h1',`Утка: ${i+1}`)); 
}


