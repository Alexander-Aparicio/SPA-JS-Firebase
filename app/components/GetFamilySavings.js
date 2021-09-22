import { removeClass } from "../helpers/ReusableFunctions.js"
import { GetEmailsFromUsers } from "./GetEmails.js"

const GetFamilySavings = async ()=>{

    const d = document
    const $interface = d.getElementById('ahorroFamiliar')
    const $names = document.querySelector('.listUsers')
    const $savings = document.querySelector('.listSavings')
    const $totalSaving = document.getElementById('totalSaving')
    const fragmentUsers = document.createDocumentFragment()
    const fragmentSavings = document.createDocumentFragment()

// -----------------------------------------------------------------------

    const emails = (await GetEmailsFromUsers()).map((el)=>{return el})

// -----------------------------------------------------------------------

    const AhorroFamiliar = ()=>{

        const ahorros = d.querySelectorAll('div.listSavings > p')

        let sumatoria = 0

        ahorros.forEach((ahorro)=>{

            sumatoria += Number(ahorro.textContent) 
            
        })

        $totalSaving.textContent = `${sumatoria}`

    }

// ------------------------------------------------------------------------

    const updateData = async (doc,el)=>{

        if(doc.metadata.hasPendingWrites === true){

            console.log(doc.data())
            console.log(doc.metadata.hasPendingWrites)

            await firebase.firestore().collection('users').doc(el).collection('aportes').get()
            .then((querySnapshot)=>{
    
                let aportes = []
                let usuario = ""
    
                querySnapshot.forEach((doc)=>{

                    usuario = doc.data().nick
                    aportes.push(doc.data().aporte)
                })
    
                let aporteTotal = 0
                aportes.forEach((saving)=>{

                    aporteTotal += saving
                }) 

                //Ahorro total de los aportes
                
                if(aporteTotal != 0 ){

                    const $usuario = d.getElementById(`${usuario}`)
                    //Si ya existe un elemento del DOM con un id igual al nombre del
                    //usuario a este le actualizamos su valor al detectar un cambio en la base de datos.
                    //Si no  existe un elemento con el id igual al nombre del usuario quiere decir 
                    //que todavía no tiene ningún aporte y por ende debemos agregarle un elemento
                    // con id igual al nombre del usuario con su aportade.

                    if($usuario){$usuario.textContent = aporteTotal}else if(!$usuario){
                        
                        if(usuario != ''){
        
                            let Name = d.createElement('p')
                            Name.textContent = usuario
                            Name.setAttribute('class','p')
        
                            $names.appendChild(Name)
                        }

                        if(aporteTotal != 0){
                            
                            let $totalSavings = d.createElement('p') 
                            $totalSavings.textContent = aporteTotal
                            $totalSavings.setAttribute('id', `${usuario}`)
                            $totalSavings.setAttribute('class', 'p ahorro')
                            
                            $savings.appendChild($totalSavings)
                        }
                    }
                }

            })

            AhorroFamiliar()
        }
    }

// ------------------------------------------------------------------------
    //RENDERIZADO 
    emails.forEach(async (el)=>{
            
        await firebase.firestore().collection('users').doc(el).collection('aportes').get()
        .then((querySnapshot)=>{

            let aportes = []
            let usuario = ""

            querySnapshot.forEach((doc)=>{
    
                usuario = doc.data().nick
                aportes.push(doc.data().aporte)
            })

            let aporteTotal = 0
            aportes.forEach((saving)=>{
                aporteTotal += saving
            }) 

            // nombre de aportantes
            if(usuario != ''){
                
                let Name = d.createElement('p')
                Name.textContent = usuario
                Name.setAttribute('class','p')
                        
                fragmentUsers.appendChild(Name)
                $names.appendChild(fragmentUsers)

            }
        
            //Ahorro total de los aportantes
            if(aporteTotal != 0){

                let $totalSavings = d.createElement('p') 
                $totalSavings.textContent = aporteTotal
                $totalSavings.setAttribute('id', `${usuario}`)
                $totalSavings.setAttribute('class', 'p')
                fragmentSavings.appendChild($totalSavings)
                $savings.appendChild(fragmentSavings)

            }
        })

        AhorroFamiliar()

        removeClass($interface,'hide')
        
        //Colocación de un escuchador
        await firebase.firestore().collection('users').doc(`${el}`)
        .collection('aportes').onSnapshot((querySnapshot)=>{

            querySnapshot.forEach((doc)=>{

                updateData(doc,el)

            })
        })

    })

}

export{GetFamilySavings} 

