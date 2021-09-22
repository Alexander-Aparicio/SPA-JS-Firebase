import { addClass, mySetAttribute, removeAttribute, removeClass} from "../helpers/ReusableFunctions.js"

const LoginBoxInteraction = ()=>{

  const d = document
  const $logIn = d.getElementById('btnLogIn')
  const $signIn = d.getElementById('btnSignIn')
  const $form = d.getElementById('formLogin')
  const $inputName = d.getElementById('inputName')
  const $containerImg = d.getElementById('containerImg')
  const $btnLogin = d.getElementById('toRegister')
  const $loader = d.querySelector('#loader')
  const $msjErrorLogin = d.querySelector('.msjErrorLogin')
  const $msjErrEmail = d.getElementById('correo')
  const $msjErrPassword = d.getElementById('contrasena')
  const $btnView = d.getElementById('imgEye')
  const $btnHidden = d.getElementById('imgNoEye')
  const $inputPassword = d.getElementById('password')
  const $eye = d.querySelector('.eye')

  // --------------------------------------------------------------

  addClass($loader,'hide')

  d.addEventListener('click', (e)=>{

      // Si la imagen está oculta entonces stateForm es "v"
      // es decir el formulario esta visible
      let stateForm =  $containerImg.classList.contains('none')

      //Si $inputName no está visible (tiene la clase "none") y el valor de stateInputName es "f".
      //Si $inputName está visible (no cotiene la clase "none") el valor de "stateInputName" es "v"
      let stateInputName = !$inputName.classList.contains('none')

      if(e.target === $logIn){

        $btnLogin.value = 'Entrar'

        // Si el formulario se encontraba en la opción de registrarse debemos reajustar la ubicación 
        //del botón de visibilidad de contraseña, añadiendo la clase "eyeLogin"
        addClass($eye,'eyeLogin')
        // ----------------------------------------------------------------

        //Si el fomrulario estaba a medio llenar y mostrando algún msj de error por 
        //incumplimiento de las validaciones y en ese estado hacemos click en la otra opción de ingreso
        //(opciones: iniar sesión y registrarse) estos mensajes de error no se borraran automaticamente
        //por ello se deben ocultar y se activarán nuevamente si se incumple las validaciones.
      
        addClass($msjErrEmail,'none')
        addClass($msjErrPassword,'none')
        // --------------------------------------------------------------

        //Si el formulario está oculto:
          if(!stateForm){

            $logIn.style.setProperty('border','solid 2px var(--cHighlighted)')
            addClass($containerImg,'none')
            removeClass($form,'none')
            addClass($inputName,'none')
            addClass($logIn,'formActive')
            removeAttribute($inputName,'required')
            mySetAttribute($btnLogin,'data-state','loginEmail')
            addClass($msjErrorLogin,'none')
            mySetAttribute($inputPassword,'placeholder','Contraseña')
              
            $form.reset()
  
          }else if(stateForm && stateInputName){
            //formulario visible e input visible

            $logIn.style.setProperty('border','solid 2px var(--cHighlighted)')
            $signIn.style.setProperty('border','solid 2px var(--cBorder)')
            $signIn.style.setProperty('grid-row','3/4')
            $logIn.style.setProperty('grid-row','1/2') 
            addClass($inputName,'none')
            removeAttribute($inputName,'required')
            mySetAttribute($btnLogin,'data-state','loginEmail')
            addClass($msjErrorLogin,'none')
            mySetAttribute($inputPassword,'placeholder','Contraseña')

            $form.reset()
          
          }else if(stateForm && !stateInputName){
            //formulario visible e input oculto

            $signIn.style.setProperty('grid-row','revert')
            $logIn.style.setProperty('grid-row','revert') 
            $logIn.style.setProperty('border','solid 2px var(--cBorder)')
            addClass($form,'none')
            addClass($logIn,'formActive')
            removeClass($containerImg,'none')
            mySetAttribute($inputName,'required',"")
            mySetAttribute($btnLogin,'data-state','null')
            addClass($msjErrorLogin,'none')
            removeClass($inputName,'opacity-open')
              
          }
      }

      if(e.target === $signIn){

        $btnLogin.value = 'Registrame'

        // Si el formulario se encontraba en la opción de iniciar sesión debemos reajustar la ubicación 
        //del botón de visibilidad de contraseña, quitandole la clase "eyeLogin".
        removeClass($eye,'eyeLogin')
        // ----------------------------------------------------------------

        //Si el fomrulario estaba a medio llenar y mostrando algún msj de error por 
        //incumplimiento de las validaciones y en ese estado hacemos click en la otra opción de ingreso
        //(opciones: iniar sesión y registrarse) estos mensajes de error no se borraran automaticamente
        //por ello se deben ocultar y se activarán nuevamente si se incumple las validaciones.

        addClass($msjErrEmail,'none')
        addClass($msjErrPassword,'none')
        //------------------------------------------------------------------

        //Si el formulario está oculto:
        if(!stateForm){

          $signIn.style.setProperty('grid-row','1/2')
          $signIn.style.setProperty('border','solid 2px var(--cHighlighted)')
          $logIn.style.setProperty('grid-row','3/4')     
          addClass($containerImg,'none')
          removeClass($form,'none')
          addClass($logIn,'formActive')
          removeClass($inputName,'none')
          mySetAttribute($inputPassword,'placeholder','Crea tu contraseña')
          mySetAttribute($inputName,'required',"")
          mySetAttribute($btnLogin,'data-state','register')
          addClass($msjErrorLogin,'none')
          
          $form.reset()

        }else if(stateForm && !stateInputName){    
          //formulario visible y input oculto
          $signIn.style.setProperty('grid-row','1/2')
          $signIn.style.setProperty('border','solid 2px var(--cHighlighted)')
          $logIn.style.setProperty('border','solid 2px var(--cBorder)')
          $logIn.style.setProperty('grid-row','3/4')
          removeClass($inputName,'none')
          mySetAttribute($inputPassword,'placeholder','Crea tu contraseña')
          mySetAttribute($inputName,'required',"")
          mySetAttribute($btnLogin,'data-state','register')
          addClass($msjErrorLogin,'none')
          addClass($inputName,'opacity-open')

          $form.reset() 

        }else if(stateForm && stateInputName){
          //formulario visible e input visible
          $signIn.style.setProperty('grid-row','revert')
          $signIn.style.setProperty('border','solid 2px var(--cBorder)')
          $logIn.style.setProperty('grid-row','revert')
          addClass($form,'none')
          removeClass($containerImg,'none')
          removeClass($logIn,'formActive')
          addClass($inputName,'none')
          mySetAttribute($inputPassword,'placeholder','Contraseña')
          mySetAttribute($btnLogin,'data-state','null')
          addClass($msjErrorLogin,'none')
          removeClass($inputName,'opacity-open')

        }
      }

      //Funcionalidad de los botones "eye" para visualizar contraseña
      if(e.target === $btnView){

        addClass($btnView,'none')
        removeClass($btnHidden,'none')
        $inputPassword.setAttribute('type','text')

      }

      if(e.target === $btnHidden){

        addClass($btnHidden,'none')
        removeClass($btnView,'none')
        $inputPassword.setAttribute('type','password')

      }
  })
}

export {LoginBoxInteraction}