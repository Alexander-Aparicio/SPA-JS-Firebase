import { addClass, removeClass } from "../helpers/ReusableFunctions.js"
import { TimeData } from "../helpers/TimeData.js"

const loginEmail = ()=>{

  const d = document,
  $form = d.querySelector('#formLogin'),
  $msjErrorLogin = d.getElementById('msjErrorLogin'),
  $inputEmail = d.querySelector('#email'),
  $inputName = d.querySelector('#inputName'),
  $inputPassword = d.querySelector('#password')

// --------------------------------------------------------

// Envío de datos

  $form.addEventListener('submit', (e)=>{
    e.preventDefault()

    //----Variable de ESTADO para división del flujo de programación--------
    let accessStatus = d.querySelector('#toRegister').getAttribute('data-state')
    // console.log(accessStatus)
    //----------------------------------------------------------------------

    // Variables:
    const auth = firebase.auth()
    const db = firebase.firestore()
    let {Hora,FechaDeRegistro} = TimeData()

    //----Inputs del formulario------------------
    let $email = d.querySelector('#email').value,
        $name = d.querySelector('#inputName').value,
        $password = d.querySelector('#password').value

    //-------------------------------------------

    //Variables que tienen un valor que dependen si los valores de los inputs están 
    // validados, si el valor de las variables es "true" quieres decir que existen errores
    // y no están validados, si sus valores son "false" los inputs están validados.
  
    const msjErrN = !d.getElementById($inputName.name).classList.contains('none')
    const msjErrE = !d.getElementById($inputEmail.name).classList.contains('none')
    const msjErrP = !d.getElementById($inputPassword.name).classList.contains('none')

    //--------Condicionales tomando como referencia la variable de estado------------

    if(accessStatus == 'loginEmail' && !msjErrE && !msjErrP){
      
      auth.signInWithEmailAndPassword($email, $password).then((userCredential) => {

        addClass($msjErrorLogin,'none')
        let user = userCredential.user
        // console.log('Ingresó correctamente')
        // console.log(user.email)
        $form.reset()
        window.location.hash = `#/${user.email}`

      }).catch((error) => {

        console.log(error.message)
        $msjErrorLogin.textContent = 'Correo o contraseña erróneo 😞'
        removeClass($msjErrorLogin,'none')
        $form.reset()

        setTimeout(() => {

          addClass($msjErrorLogin,'none')
          $msjErrorLogin.textContent = ''

        }, 3800);

      })

    }
    if(accessStatus == 'loginEmail' && msjErrE && !msjErrP){

      console.log('Debe cumplir las indicaciones para el registro')
      removeClass($msjErrorLogin,'none')
      $msjErrorLogin.textContent = '❌ EMAIL no válido.'

      setTimeout(() => {

        addClass($msjErrorLogin,'none')
        $msjErrorLogin.textContent = ''

      }, 3500)

    }

    if(accessStatus == 'loginEmail' && !msjErrE && msjErrP){

      console.log('Debe cumplir las indicaciones para el registro')
      removeClass($msjErrorLogin,'none')
      $msjErrorLogin.textContent = '❌ CONTRASEÑA no válida'

      setTimeout(() => {

        addClass($msjErrorLogin,'none')
        $msjErrorLogin.textContent = ''

      }, 3500)

    }
    // -----------------------------------------------------------------------------

    
    if(accessStatus == 'register' && !msjErrE && !msjErrN && !msjErrP){

      // Crear un usuario nuevo (autentificación) y un doc. 
      //con datos del usuario en la colección llamada users.

      auth.createUserWithEmailAndPassword($email, $password).then((userCredential) => {
        
        let user = userCredential.user

        // Creación de doc. de nuevo usuario :----------------------

        db.collection("users").doc(`${user.email}`).set({
          nombre: $name,
          fecha: FechaDeRegistro,
          hora: Hora,
          correo: user.email
        })
        .then((res) => {

          $form.reset()
          console.log(res)
          window.location.hash = `#/${user.email}/Ahorro-Familiar`

         }).catch((error)=>{
          console.log(error)
          $form.reset() 
          removeClass($msjErrorLogin,'none')
          $msjErrorLogin.textContent = 'Ocurrió un error, no se pudo hacer el registro'

        })
      })

    }

    if(accessStatus == 'register' && msjErrE && !msjErrN && !msjErrP){

      console.log('Debe cumplir las indicaciones para el registro')
      removeClass($msjErrorLogin,'none')
      $msjErrorLogin.textContent = '❌ EMAIL no válido.'

      setTimeout(() => {

        addClass($msjErrorLogin,'none')
        $msjErrorLogin.textContent = ''

      }, 3500);

    }

    if(accessStatus == 'register' && !msjErrE && msjErrN && !msjErrP){

      console.log('Debe cumplir las indicaciones para el registro')
      removeClass($msjErrorLogin,'none')
      $msjErrorLogin.textContent = '❌ NOMBRE no cumple las indicaciones.'

      setTimeout(() => {

        addClass($msjErrorLogin,'none')
        $msjErrorLogin.textContent = ''

      }, 3500);

    }

    if(accessStatus == 'register' && !msjErrE && !msjErrN && msjErrP){

      console.log('Debe cumplir las indicaciones para el registro')
      removeClass($msjErrorLogin,'none')
      $msjErrorLogin.textContent = '❌ CONTRASEÑA no cumple las indicaciones.'

      setTimeout(() => {

        addClass($msjErrorLogin,'none')
        $msjErrorLogin.textContent = ''

      }, 3500);

    }
  //---------------------------------------------------------------------
  })  
}

export { loginEmail }