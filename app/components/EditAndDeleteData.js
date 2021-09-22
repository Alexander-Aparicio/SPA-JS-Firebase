import { addClass, removeClass } from "../helpers/ReusableFunctions.js"
import { TimeData } from "../helpers/TimeData.js"
import { aporteTotalPersonal } from "./GetPersonalSavings.js"

const EditAndDeleteData = (user)=>{

    const d = document
    const $loader = d.querySelector('.loaderEdit')
    const $msjErrorEdit = d.querySelector('#msjErrorEdit')
    const $btnClose = d.getElementById('toCloseEdit')
    const $boxEdit = d.getElementById('formEdit')
    const $valueEdit = d.querySelector('.selectSaving')
    const $btnEdit = d.getElementById('btnEdit')
    const $msj = d.querySelector('.info')
    const $inputEdit = d.getElementById('inputEdit')
    const $btnUpdate = d.getElementById('btnEditSend')
    const $btnDelete = d.getElementById('btnDelete')
    const {mesActual,mesPenultimo,mesAntePenultimo} = TimeData()
    
// --------------------------------------------------------------------------------

    let arrayMonth =[mesActual,mesPenultimo,mesAntePenultimo]

    arrayMonth.forEach((el)=>{
        console.log(el)
        if(d.getElementById(el)){
            console.log(el)
            d.getElementById(el).addEventListener('click',(e)=>{
        
                if(e.target && e.target.tagName === 'P'){
                    console.log(`estas dando click en ${e.target}`)
                    removeClass($boxEdit,'none')
                    $msj.textContent = e.target.dataset.img
                    $valueEdit.textContent = e.target.dataset.input
                    $valueEdit.setAttribute('data-doc', `${e.target.dataset.id}`)
                    $valueEdit.setAttribute('data-img', `${e.target.dataset.img}`)
                }
            })
        }
    })

// ---------------------------------------------------------------------------------

    d.addEventListener('click', (e)=>{

        if(e.target === $btnClose){

            addClass($boxEdit,'none')
            $inputEdit.value = ''
            addClass($inputEdit,'none')
            addClass($btnUpdate,'none')

        }

        if(e.target === $btnEdit){

            removeClass($inputEdit,'none');
            removeClass($btnUpdate,'none')
        }

        if(e.target === $btnUpdate){

            if($inputEdit.value >0 && $inputEdit.value != ''){
                
                removeClass($loader,'hide')

                firebase.firestore().collection('users').doc(`${user.email}`)
                .collection('aportes').doc(`${$valueEdit.dataset.doc}`).update({
                    
                    "aporte": Number(`${$inputEdit.value}`) 
                    
                }).then(()=>{

                    addClass($loader,'hide')
                    $msj.style.setProperty('background','var(--bgBody)')
                    $msj.style.setProperty('border-radius','7px')
                    $msj.style.setProperty('padding','3px')
                    $msj.textContent = 'Operación de edición éxitosa'
                    $valueEdit.setAttribute('data-doc', '')
                    $valueEdit.setAttribute('data-img', '')
                    $valueEdit.textContent = ''
                    $inputEdit.value = ''
                    addClass($btnUpdate,'none')
                    addClass($inputEdit,'none')

                    setTimeout(() => {
                        $msj.style.setProperty('background','revert')
                        $msj.style.setProperty('border-radius','revert')
                        $msj.style.setProperty('padding','revert')
                        $msj.textContent = ''
                        addClass($boxEdit,'none')
                    }, 1600);
    
                })
                .catch(()=>{

                    addClass($loader,'hide'); 
                    $msj.textContent = 'No se pudo realizar la operación de edición' 
                })
        
            }else{

                removeClass($msjErrorEdit,'none')
                $msjErrorEdit.textContent = 'Debe actualizar con un número mayor a cero'

                setTimeout(() => {

                   $msjErrorEdit.textContent = '' 
                   addClass($msjErrorEdit,'none')

                }, 1600);
            }
        }

        if(e.target === $btnDelete){

            removeClass($loader,'hide')
            const storageRef =  firebase.storage().ref(`${user.email}`)
            let desertRef = storageRef.child(`${$valueEdit.dataset.img}`)
        
            desertRef.delete().then(()=>{

                console.log(`Se eliminó la image con éxito`)
            })
            .catch((error)=>{

                console.log(`No se logró eliminar la imagen . ${error}`)
            })                                   

            firebase.firestore().collection('users').doc(`${user.email}`)
            .collection('aportes').doc(`${$valueEdit.dataset.doc}`).delete().then(()=>{

                addClass($loader,'hide')
                const $savingDelete = d.querySelector(`[data-id = '${$valueEdit.dataset.doc}']`)
                $savingDelete.setAttribute('data-id','')
                $savingDelete.setAttribute('data-img','')
                $savingDelete.setAttribute('data-input','')
                $savingDelete.textContent = ''
                addClass($savingDelete,'none')
                $msj.style.setProperty('background','var(--bgBody)')
                $msj.style.setProperty('border-radius','7px')
                $msj.style.setProperty('padding','3px')
                $msj.textContent = 'Operación éxitosa'
                $valueEdit.textContent = ''
                $valueEdit.setAttribute('data-doc', '')
                $valueEdit.setAttribute('data-img', '')

                setTimeout(() => {
                    $msj.style.setProperty('background','revert')
                    $msj.style.setProperty('border-radius','revert')
                    $msj.style.setProperty('padding','revert')
                    $msj.textContent = ''
                    addClass($boxEdit,'none')
                }, 1600);

                aporteTotalPersonal(user)
        
            }).catch(()=>{ 

                addClass($loader,'hide'); 
                $msj.textContent = 'No se pudo realizar la operación' 

            })
        }
    })
}

export { EditAndDeleteData }