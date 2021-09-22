import { addClass, removeClass } from "../helpers/ReusableFunctions.js"

const LoginFormValidations = ()=>{

    const d = document,
    $toRegister = d.getElementById('toRegister'),
    $inputEmail = d.querySelector('#email'),
    $inputName = d.querySelector('#inputName'),
    $inputPassword = d.querySelector('#password')

    //Expresiones Regulares para validaciones:

    const patronNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const patronEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    const patronPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/

    // -----------------------------------------------------------------

    //Validaciones:

    d.addEventListener('keyup', (e)=>{

        //Cuando el formulario se encuentre en la opción de registrar
        //el elemento $toRegister tendra un atributo "data-state" con valor igual a 
        // "register"  y cuando se encuentre enla opción de iniciar sesión el valor de
        // data-state será "loginEmail"

        let stateForm = $toRegister.dataset.state 
        // -------------------------------------------------------------

        if(e.target === $inputName){

            //Creamos variables:
            const $msjError = d.getElementById(`${$inputName.name}`)
            
            const regexN = new RegExp(patronNombre)

            // -------------------------------------------------------------------

            // Si el formulario se encuentra en registrar o iniciar sesión usuario 
            //agregamos o eliminamos la clase que reajustará la posición del mensaje de error

            if(stateForm === 'register'){
                addClass($msjError,'msjErrRegName')
            } 

            if(stateForm === 'loginEmail'){
                removeClass($msjError,'msjErrRegName')
            } 
            // --------------------------------------------------------------------

            //Si no existe una conincidencia con el patron exigido activar el msj de error

            if(!regexN.exec($inputName.value) && $inputName.value != ''){

                removeClass($msjError,'none')
                $msjError.textContent = $inputName.title

            }else if(!regexN.exec($inputName.value) && $inputName.value === ''){

                addClass($msjError,'none')
                $msjError.textContent = ''

            }else if(regexN.exec($inputName.value) && $inputName.value != ''){

                addClass($msjError,'none')
                $msjError.textContent = ''
            
            }
            // -------------------------------------------------------------------------
        }

        if(e.target === $inputEmail){

        //Creamos variables:
        const $msjError = d.getElementById(`${$inputEmail.name}`)
        
        const regexE = new RegExp(patronEmail)

        // --------------------------------------------------------------------

        // Si el formulario se encuentra en registrar o iniciar sesión usuario 
        //agregamos o eliminamos la clase que reajustará la posición del mensaje de error

        if(stateForm === 'register'){
            removeClass($msjError,'msjErrorLogEmail')
            addClass($msjError,'msjErrRegEmail')
        }

        if(stateForm === 'loginEmail'){
            removeClass($msjError,'msjErrRegEmail')
            addClass($msjError,'msjErrorLogEmail')
        }

        // -------------------------------------------------------------------
        
        //Si no existe una conincidencia con el ptron exigido activar el msj de error

        if(!regexE.exec($inputEmail.value) && $inputEmail.value != ''){

            removeClass($msjError,'none')
            $msjError.textContent = $inputEmail.title
            console.log(stateForm)  

        }else if(!regexE.exec($inputEmail.value) && $inputEmail.value === ''){

            addClass($msjError,'none')
            $msjError.textContent = ''
        
        }else if(regexE.exec($inputEmail.value) && $inputEmail.value != ''){

            addClass($msjError,'none')
            $msjError.textContent = '' 

        }
        // ------------------------------------------------------------------
        } 

        if(e.target === $inputPassword){

            //Creamos variables:
            const $msjError = d.getElementById(`${$inputPassword.name}`)
            
            const regexN = new RegExp(patronPassword)

            // -----------------------------------------------------------------

            // Si el formulario se encuentra en registrar o iniciar sesión usuario 
            //agregamos o eliminamos la clase que reajustará la posición del mensaje de error

            if(stateForm === 'register'){
                removeClass($msjError,'msjErrorLogPassword')
                addClass($msjError,'msjErrRegPassword')
            }

            if(stateForm === 'loginEmail'){
                removeClass($msjError,'msjErrRegPassword')
                addClass($msjError,'msjErrorLogPassword')
            } 
            // ------------------------------------------------------------------

            //Si no existe una conincidencia con el ptron exigido activar el msj de error

            if(!regexN.exec($inputPassword.value) && $inputPassword.value != ''){

                removeClass($msjError,'none')
                $msjError.textContent = $inputPassword.title

            }else if(!regexN.exec($inputPassword.value) && $inputPassword.value === ''){

                addClass($msjError,'none')
                $msjError.textContent = ''

            }else if(regexN.exec($inputPassword.value) && $inputPassword.value != ''){

                addClass($msjError,'none')
                $msjError.textContent = ''
            
            }
        }
    })  

    // -----------------------------------------------------------------
} 

export {LoginFormValidations}