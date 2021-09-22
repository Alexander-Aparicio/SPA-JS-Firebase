import { addClass, removeClass } from "../helpers/ReusableFunctions.js"

const GetVouchers = async(user)=>{

    const d = document
    const $loader = d.getElementById('loader')
    const $containerGallery = d.querySelector('.galleryImgs')
    const $gallery = d.querySelector('.gallery')
    let listId = []  
    
    await firebase.firestore().collection('users').doc(`${user.email}`).collection('aportes').get()
    .then((querySnapshot)=>{
              
        querySnapshot.forEach((doc)=>{
            listId.push(`${doc.data().img}`)
            // console.log(doc.data().img)
        })

        listId.forEach((el)=>{

            const storageRef =  firebase.storage().ref(`${user.email}/${el}`)
    
            storageRef.getDownloadURL().then((url)=>{

                const button = d.createElement('button')
                button.setAttribute('class','btnZoom')
                button.setAttribute('data-id',`${el}`)
                button.setAttribute('data-off',`${el}off`)
                button.setAttribute('id',`${el}on`)
                button.textContent = 'Zoom'

                const buttonOff = d.createElement('button')
                buttonOff.setAttribute('class','btnReduce none')
                buttonOff.setAttribute('data-id',`${el}`)
                buttonOff.setAttribute('data-on',`${el}on`)
                buttonOff.setAttribute('id',`${el}off`)
                buttonOff.textContent = 'Reducir'

                const card = d.createElement('figure')
                card.setAttribute('class','flexCenter card box-shadow')
                card.setAttribute('data-name',`${el}`)

                const img = d.createElement('img')
                img.classList.add('img')
                img.setAttribute('src',`${url}`)

                const figc = d.createElement('figcaption')
                figc.setAttribute('class','p nameVaucher')
                figc.textContent = el

                card.appendChild(img)
                card.appendChild(figc)
                card.appendChild(button)
                card.appendChild(buttonOff)
       
                $gallery.appendChild(card)
            })
        })
        
    })
    
    removeClass($containerGallery ,'hide')
    addClass($loader ,'hide')
    
}

export {GetVouchers}
                                

