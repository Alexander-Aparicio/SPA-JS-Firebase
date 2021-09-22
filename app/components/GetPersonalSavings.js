import { addClass, removeClass } from "../helpers/ReusableFunctions.js"
import { TimeData } from "../helpers/TimeData.js"

const aporteTotalPersonal = async(user)=>{

    let {hash} = location
    if(hash === `#/${user.email}/Ahorro-Personal`){

        const db = firebase.firestore()
        let aportePersonal = 0
        const $totalSavingPersonal = document.getElementById('totalSavingPersonal')
    
        await db.collection("users").doc(`${user.email}`).collection('aportes')
        .get().then((querySnapshot) => {
    
            querySnapshot.forEach((doc) => {
    
                aportePersonal += Number(doc.data().aporte) 
    
            })
        })
    
        $totalSavingPersonal.textContent = aportePersonal
    }
}

const GetPersonalSavings = async(user)=>{

    const d = document,
        $interface = d.getElementById('ahorroFamiliar'),
        $loader = d.getElementById('loader'),
        $msjAd = d.querySelector('.msjAd'),
        $boxSavingPersonal = d.querySelector('.boxSavingPersonal'),
        db = firebase.firestore()

// -----------------------------------------------------------------------------
    
let {mesActual,mesPenultimo,mesAntePenultimo} = TimeData()

// ------------------------------------------------------------------------------

    const rendering = async(nameMes)=>{

        const fragment = d.createDocumentFragment()

        await db.collection('users').doc(`${user.email}`).collection('aportes')
        .where('mes','==',nameMes).get().then((querySnapshot)=>{
            
            let cantDocs = querySnapshot.docs.length

            if(cantDocs > 0){

                removeClass($msjAd,'none')

                const containerBox = d.createElement('div')
                containerBox.setAttribute('class','monthSaving')

                const boxMonth = d.createElement('div')
                boxMonth.setAttribute('class','month')

                const nameMonth = d.createElement('p')
                nameMonth.setAttribute('class','p nameCurrentMonth')
                nameMonth.textContent = nameMes

                boxMonth.appendChild(nameMonth)

                const boxSavingMoney = d.createElement('div')
                boxSavingMoney.setAttribute('class',`savingsMoney curentMonth ${nameMes}`)
                boxSavingMoney.setAttribute('id',`${nameMes}`)

                containerBox.appendChild(boxMonth)
                containerBox.appendChild(boxSavingMoney)
                $boxSavingPersonal.appendChild(containerBox)

                querySnapshot.forEach((doc)=>{

                    const $input = d.createElement('p')
                    $input.setAttribute('data-id',`${doc.id}`)
                    $input.setAttribute('data-img',`${doc.data().img}`)
                    $input.setAttribute('data-input',`${doc.data().aporte}`)
                    $input.setAttribute('class',`${doc.data().mes} p`)
                    $input.style.setProperty('cursor','pointer')
                    $input.textContent = doc.data().aporte
                    fragment.appendChild($input)
                })

                boxSavingMoney.appendChild(fragment)
            }
        })
    }

// -----------------------------------------------------------------------------------

    await aporteTotalPersonal(user)
    await rendering(mesActual)
    await rendering(mesPenultimo)
    await rendering(mesAntePenultimo)

//-------------------------------------------------------------------------------------
    //ESCUCHADOR
    await firebase.firestore().collection('users').doc(`${user.email}`)
    .collection('aportes').onSnapshot((querySnapshot)=>{
        
        querySnapshot.forEach((doc)=>{

            if(doc.metadata.hasPendingWrites === true){

                aporteTotalPersonal(user)

                // -------------------------------------------------------------------------------

                firebase.firestore().collection('users').doc(`${user.email}`)
                .collection('aportes').where('img','==', `${doc.data().img}`).get().then(()=>{

                    if(d.querySelector(`[data-img = '${doc.data().img}']`)){
                        d.querySelector(`[data-img = '${doc.data().img}']`).textContent = `${doc.data().aporte}`
                        d.querySelector(`[data-img = '${doc.data().img}']`).setAttribute('data-input',`${doc.data().aporte}`)
                    }
                    
                })
                // -------------------------------------------------------------------------------
            }
        })
    })

    removeClass($interface,'hide')
    addClass($loader,'hide')
    
}

export {GetPersonalSavings, aporteTotalPersonal}