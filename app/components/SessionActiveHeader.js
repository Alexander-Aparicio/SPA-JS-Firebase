import { addClass, removeClass } from "../helpers/ReusableFunctions.js"

const SessionActiveHeader = async (user)=>{

    const d = document,
        $nameSiteWeb = d.getElementById('nameWeb'),
        $userName = d.getElementById('usuario'),
        db = firebase.firestore(),
        auth = firebase.auth(),
        $headerLogin = d.querySelector('.headerLogin'),
        $menu = d.querySelector('.nav'),
        fragment = d.createDocumentFragment()

    const menu = [
        {link:'Ahorro Familiar',hash:'Ahorro-Familiar'},
        {link:'Ahorro Personal',hash:'Ahorro-Personal'},
        {link:'Vauchers',hash:'Vauchers'}
    ]

    addClass($nameSiteWeb,'none')
    removeClass($headerLogin,'none')
    removeClass($menu,'none')

    const userNameRendering = (documento)=>{

        let nameUser = documento.data().nombre
        let usuario = `${nameUser}`
        $userName.textContent = usuario
        $userName.setAttribute('data-name',nameUser)
    } 

    const menuRendering = ()=>{

        menu.forEach((el)=>{

            const $enlace = d.createElement('a')
            $enlace.textContent = el.link
            $enlace.setAttribute('class','p enlace')
            $enlace.setAttribute('href',`/#/${user.email}/${el.hash}`)
            fragment.appendChild($enlace)
        })

        $menu.appendChild(fragment)

        const $btn = d.createElement('p')
        $btn.style.setProperty('background','transparent')
        $btn.style.setProperty('font-size','1.6rem')
        $btn.style.setProperty('cursor','pointer')
        $btn.setAttribute('class','enlace p')
        $btn.textContent = 'Salir'
        $btn.setAttribute('id','salir')
        $menu.appendChild($btn)

        // Evente click - para salir
        $btn.addEventListener('click', (e)=>{

            auth.signOut().then(()=>{
                window.location.hash = '/'
                window.location.reload()
            })
        })
        
    }

    await db.collection('users').doc(`${user.email}`).get()
    .then((doc)=>{

        if(doc.exists){
            userNameRendering(doc)
            menuRendering()
        }
    })
}

export {SessionActiveHeader}