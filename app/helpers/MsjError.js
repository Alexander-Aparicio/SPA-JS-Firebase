import { addClass, removeClass } from "./ReusableFunctions.js"

const ValidationErrorMsj = ()=>{

    const $msjError = document.getElementById('msjError')
    removeClass($msjError,'check')
    addClass($msjError,'msjError')
    
    $msjError.textContent = 'Su aporte debe ser un número válido mayor a 0 y adjuntar un comprobante de ello.'

    setTimeout(() => { $msjError.textContent = ''; removeClass($msjError,'msjError') }, 5000)
    
}

const RequestErrorMsj = ()=>{

    const $msjError = document.getElementById('msjError')
    removeClass($msjError,'check')
    addClass($msjError,'msjError')

    $msjError.textContent = 'Falló el envió de datos, vuelva intentarlo más tarde.'

    setTimeout(() => { $msjError.textContent = ''; removeClass($msjError,'msjError')}, 5000)
    
}

const ImgValidationErrorMsj = ()=>{

    const $msjError = document.getElementById('msjError')
    const $file = document.querySelector('.inputFile')
    removeClass($msjError,'check')
    addClass($msjError,'msjError')

    $file.style.setProperty('border','solid 1.5px var(--cError)')
    $file.textContent = 'Falta su comprobante'
    $msjError.textContent = 'Debe adjuntar un comprobante del aporte en formato jpg o png.'

    setTimeout(() => { 

        $msjError.textContent = ''; removeClass($msjError,'msjError') 
        $file.style.setProperty('border','')
        $file.textContent = 'Subir comprobante'

    }, 5000)
    
}

export {ValidationErrorMsj, RequestErrorMsj, ImgValidationErrorMsj}