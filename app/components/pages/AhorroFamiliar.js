import { DataSendingBox } from "../DataSendingBox.js"
import { FamilySavingBox } from "../FamilySavingBox.js"
import { TitleOfPages } from "../../helpers/Titles.js"

export function AhorroFamiliar(){

    const d = document

    const containerG = document.createElement('section')
    containerG.setAttribute('class','ahorroFamiliar hide')
    containerG.setAttribute('id','ahorroFamiliar')
// -------------------------------------------------------

    const head = d.createElement('div')
    head.setAttribute('class','w100 head')
    head.appendChild(TitleOfPages('Ahorro Familiar'))

    const ahorroFamiliar = d.createElement('p')
    ahorroFamiliar.setAttribute('class','highlighted')
    ahorroFamiliar.setAttribute('id','totalSaving')
    ahorroFamiliar.textContent = '17890'

    head.appendChild(ahorroFamiliar)
// -------------------------------------------------------

    const containerImg = d.createElement('div')
    containerImg.setAttribute('class','containerImg2')
    containerImg.setAttribute('id','containerImg2')

    const img = d.createElement('img')
    img.setAttribute('class','w100')
    img.setAttribute('alt','img-branding')
    img.setAttribute('src','app/assets/grafic-home.svg')

    containerImg.appendChild(img)
// ----------------------------------------------------------

    // RENDERIZADO: 
    containerG.appendChild(head)
    containerG.appendChild(FamilySavingBox())
    containerG.appendChild(DataSendingBox())
    containerG.appendChild(containerImg)

    return containerG
}