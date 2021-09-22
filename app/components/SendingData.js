import { ImgValidationErrorMsj, RequestErrorMsj, ValidationErrorMsj } from "../helpers/MsjError.js"
import { addClass, removeClass } from "../helpers/ReusableFunctions.js"
import { SuccessMsj } from "../helpers/SuccessMsj.js"
import { TimeData } from "../helpers/TimeData.js"

const  SendingData = (user)=>{

    const d = document,
        db = firebase.firestore(),
        $form = d.querySelector('#formSend'),
        $imageUpload = d.querySelector('#photo'),
        $loader = d.querySelector('#loaderForm'),
        $file = d.querySelector('.inputFile'),
        expReg = /^[0-9]*(\.?)[0-9]+$/

    // EVENTOS:

    $imageUpload.addEventListener('change',()=>{$file.textContent = 'Listo ✔️'})

    $form.addEventListener('submit',async (e)=>{
        
        e.preventDefault()

        console.log('Le diste click al formulario')
        const{Hora,FechaDeRegistro,mesActual} = TimeData()
        const $aporte = d.getElementById('savingSendBox').value
        const name = d.getElementById('usuario').getAttribute('data-name')
        const inputNumber = Number($aporte)
        const storageRef =  firebase.storage().ref(`${user.email}`)
        const Ref = storageRef.child(`${FechaDeRegistro}-${Hora}`)
        const file = $imageUpload.files[0]
        let bridge = ''

        if($aporte.match(expReg) && inputNumber >0){

            if(file != undefined){

                removeClass($loader,'hide')

                await Ref.put(file).then((res)=>{
    
                    console.log(res)
                    bridge = 'enabled'
                    
                })
                .catch((error)=>{
    
                    console.log(error)
                    bridge = 'send failed'
    
                })
                
                if( bridge === 'enabled' ){
         
                    await db.collection('users').doc(`${user.email}`)
                    .collection('aportes').add({
    
                        aporte: Number($aporte),
                        fecha: FechaDeRegistro,
                        nick: name,
                        hora: Hora,
                        mes: mesActual,
                        img: `${FechaDeRegistro}-${Hora}`
            
                    }).then((res)=>{
    
                        console.log(res)
                        addClass($loader,'hide')
                        $form.reset()
                        $file.textContent = 'Subir comprobante'
                        SuccessMsj()
    
                    }).catch((error)=>{
    
                        console.log(error)
                        addClass($loader,'hide')
                        RequestErrorMsj()
                        $form.reset()
    
                    }) 
    
                }else if(bridge === 'send failed'){
    
                    RequestErrorMsj()
                    $form.reset()
                    addClass($loader,'hide')
    
                }

            }else{

                ImgValidationErrorMsj()
                $form.reset()

            }

        }else{

            ValidationErrorMsj()
            d.getElementById('savingSendBox').style.setProperty('border','solid 2px red')
            
            setTimeout(() => {

                d.getElementById('savingSendBox').style.setProperty('border','solid 1px var(--cBorder)')
            
            }, 1500)

            $form.reset()

        }              
    })
}

export {SendingData}