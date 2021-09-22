import { LoginBox } from "../LoginBox.js"

export function Welcome(){
    // UI
    const d = document
    const welcome = document.createElement('div')
    welcome.setAttribute('class','welcome')

    const $title = d.createElement('h1')
    $title.setAttribute('class','h1 aplic')
    $title.textContent = 'APLIC'

    const $containerImg = d.createElement('div')
    $containerImg.setAttribute('class','containerImg')
    $containerImg.setAttribute('id','containerImg')
    
    const $img = d.createElement('img')
    $img.setAttribute('class','w100')
    $img.setAttribute('alt','img-branding')
    $img.setAttribute('src','app/assets/grafic-home.svg')
    
    $containerImg.appendChild($img)

    //RENDER
    welcome.appendChild($title)
    welcome.appendChild($containerImg)
    welcome.appendChild(LoginBox())
    
    return welcome
}