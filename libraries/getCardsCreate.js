export default class CardCreateMod{
    
    CardCreate(CssClass){
        return `<div class="${CssClass}"></div>`
    }
    CardAdd(parentClass,CssClass){
        return parentClass.insertAdjacentHTML('afterBegin',this.CardCreate(CssClass))
    }
    CardRemove(){
        return remove()
    }
    CardContent(parentClass,content){
        return parentClass.insertAdjacentHTML('afterBegin',content);
    }
}