const HamburgerButton = ()=>{

    const d = document

    // BUTTON HAMBURGUER.
    const btnMobile = d.createElement('div')
    btnMobile.setAttribute('class','btns-menu')

    const imgBtnOpen = d.createElement('img')
    imgBtnOpen.setAttribute('src','app/assets/btn-open.png')
    imgBtnOpen.setAttribute('class','btn-open')

    const imgBtnClose = d.createElement('img')
    imgBtnClose.setAttribute('src','app/assets/btn-close.png')
    imgBtnClose.setAttribute('class','btn-close none')

    btnMobile.appendChild(imgBtnOpen)
    btnMobile.appendChild(imgBtnClose)

    return btnMobile

}

export {HamburgerButton}