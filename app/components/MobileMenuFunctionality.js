const MobileMenuFunctionality = (user)=>{

    const d = document,
        $menuOptiones = d.querySelector('.menuMobile'),
        $btnOpen = d.querySelector('.btn-open'),
        $btnClose = d.querySelector('.btn-close'),
        $modalMenu = d.querySelector('.modal-menu'),
        auth = firebase.auth()

    const menuOpciones = [

        {opcion:'Ahorro Familiar', hash: `#/${user.email}/Ahorro-Familiar`,id:'ahorroFamiliarM'},
        {opcion:'Ahorro Personal', hash: `#/${user.email}/Ahorro-Personal`,id:'ahorroPersonalM'},
        {opcion:'Comprobantes', hash: `#/${user.email}/Vauchers`,id:'vauchersM'},
        {opcion:'Cerrar Sesión', hash:'null', id:'cerrarSesionM'}
    
    ]
     
    menuOpciones.forEach((option)=>{
    
        const enlace = d.createElement('a')
    
        if(`${option.hash}` != 'null'){
    
            enlace.setAttribute('href',`${option.hash}`)
    
        }
    
        enlace.setAttribute('id',`${option.id}`)
        enlace.setAttribute('class','option-menu')
        enlace.textContent = `${option.opcion}`
    
        $menuOptiones.appendChild(enlace)
    })

    

    d.addEventListener('click', (e)=>{

        const $btnSalir = d.querySelector('#cerrarSesionM')

        if(e.target === $btnOpen){

            $modalMenu.classList.remove('hidden-izq')
            $modalMenu.classList.add('animation-open-izq-der')
            $btnOpen.classList.add('none')
            $btnClose.classList.remove('none')
            $btnClose.classList.add('opacity-open') 
            $modalMenu.classList.remove('animation-close-der-izq')

        }
        if(e.target === $btnClose){

            $modalMenu.classList.add('hidden-izq')
            $modalMenu.classList.add('animation-close-der-izq')
            $btnClose.classList.add('none')
            $btnOpen.classList.remove('none')
            $btnOpen.classList.add('opacity-open')
            $modalMenu.classList.remove('animation-open-izq-der')        

        }
        if(e.target === $btnSalir){

            auth.signOut().then(()=>{

                window.location.hash = '/'
                window.location.reload()

            })
        }
    })

    $menuOptiones.addEventListener('click', (e)=>{

        if(e.target && e.target.tagName === 'A'){

            $modalMenu.classList.add('hidden-izq')
            $modalMenu.classList.add('animation-close-der-izq')
            $btnClose.classList.add('none')
            $btnOpen.classList.remove('none')
            $btnOpen.classList.add('opacity-open')
            $modalMenu.classList.remove('animation-open-izq-der')

        }
    })
}

export {MobileMenuFunctionality}