const MenuMobile = ()=>{

    const d = document

    //MODAL MENU
    const sectionMenu = d.createElement('section')
    sectionMenu.setAttribute('class','modal-menu fixed-global hidden-izq')

    const containerMenu = d.createElement('div')
    containerMenu.setAttribute('class','menu menuMobile')

    const title = d.createElement('h2')
    title.setAttribute('class','titleMenu title h2')
    title.textContent = 'MENU'

    const autor = d.createElement('a')
    autor.textContent = 'Alexander-Aparicio 💻'
    autor.setAttribute('class','author')
    autor.setAttribute('href','https://alexander-aparicio.github.io/')
    autor.setAttribute('target','_blank')

    containerMenu.appendChild(title)

    sectionMenu.appendChild(containerMenu)
    sectionMenu.appendChild(autor)

    return sectionMenu

}

export {MenuMobile}