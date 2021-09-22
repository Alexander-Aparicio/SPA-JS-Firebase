// import { GetVouchers } from "../GetVouchers.js"
import { TitleOfPages } from "../../helpers/Titles.js"

export function Comprobantes(){

    const containerG = document.createElement('section')
    containerG.setAttribute('class','galleryImgs w100 hide')
    
    const gallery = document.createElement('div')
    gallery.setAttribute('class','gallery w100')

    // RENDERIZADO:
    containerG.appendChild(TitleOfPages('Comprobantes de depósitos'))
    containerG.appendChild(gallery)

    return containerG
}