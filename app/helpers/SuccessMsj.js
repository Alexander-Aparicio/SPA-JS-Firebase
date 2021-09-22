import { addClass, removeClass } from "./ReusableFunctions.js"

const SuccessMsj = ()=>{

    const $msjSuccess = document.getElementById('msjError')
    removeClass($msjSuccess,'msjError')
    addClass($msjSuccess,'check')

    $msjSuccess.textContent = 'Envío exitoso'

    setTimeout(() => {

        $msjSuccess.textContent = ''
        removeClass($msjSuccess,'check')

    }, 3000);
      
}

export {SuccessMsj}