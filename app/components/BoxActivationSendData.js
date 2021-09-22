import { addClass, removeClass } from "../helpers/ReusableFunctions.js"

const BoxActivationSendData = ()=>{
    
    const d = document
    const $activeBox = d.getElementById('btnOn')
    const $btnClose = d.querySelector('.toClosePopup')
    const $boxSenData = d.querySelector('.popupForm')

    d.addEventListener('click', (e)=>{
       
        if(e.target === $activeBox){
            
            removeClass($boxSenData,'none')

        }

        if(e.target === $btnClose){

            addClass($boxSenData,'none')

        } 
    })
}

export {BoxActivationSendData}