const addClass = (element,styleClass)=>{

    if(!element.classList.contains(styleClass)){element.classList.add(styleClass)}

}
// ---------------------------------------------------------------------------------

const removeClass = (element,styleClass)=>{

    if(element.classList.contains(styleClass)){element.classList.remove(styleClass)}

}
// ---------------------------------------------------------------------------------

const mySetAttribute = (element,nameAttribute,attribute)=>{

    if(element.getAttribute(nameAttribute) != attribute){

        element.setAttribute(nameAttribute,attribute)

    }
}
// ---------------------------------------------------------------------------------

const removeAttribute = (element,nameAttribute)=>{

    if(element.hasAttribute(nameAttribute)){

        element.removeAttribute(nameAttribute)

    }
}
// --------------------------------------------------------------

export {addClass,removeClass,mySetAttribute,removeAttribute}