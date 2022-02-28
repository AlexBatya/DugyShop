export default class CardContentMod{
    h1(nameClass,content){
        return `<h1 class="${nameClass}">${content}</h1>`
    }
    h3(nameClass,content){
        return `<h3 class="${nameClass}">${content}</h3>`
    }
    p(nameClass,content){
        return `<p class="${nameClass}">${content}</p>`
    }
    img(nameClass,imgLink){
        return `<img src="${imgLink}" alt="photo" class="${nameClass}">`
    }
    button(nameClass,content){
        return `<a src="#"><button class="${nameClass}">${content}</button></a>`
    }
}