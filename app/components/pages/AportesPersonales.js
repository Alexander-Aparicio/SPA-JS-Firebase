import { DataEditBox } from "../DataEditBox.js"
import { PersonalSavingBox } from "../PersonalSavingBox.js"
import { TitleOfPages } from "../../helpers/Titles.js"

export function AportesPersonales(){

    const d = document
    const containerG = document.createElement('section')
    containerG.setAttribute('class','ahorroPersonal hide')
    containerG.setAttribute('id','ahorroFamiliar')

    // ---------------------------------------------------

    const head = d.createElement('div')
    head.setAttribute('class','w100 head')
    head.appendChild(TitleOfPages('Ahorro Personal'))

    const ahorroFamiliar = d.createElement('p')
    ahorroFamiliar.setAttribute('class','highlighted')
    ahorroFamiliar.setAttribute('id','totalSavingPersonal')

    head.appendChild(ahorroFamiliar)
    // ----------------------------------------------------

    const ad = d.createElement('div')
    ad.setAttribute('class','msjAd btnCherry flexCenter none')

    const msjAd = d.createElement('p')
    msjAd.textContent = 'Selecciona para editar o Eliminar.'

    ad.appendChild(msjAd)
    // -------------------------------------------------------

    const containerImg = d.createElement('div')
    containerImg.setAttribute('class','containerImg3')
    containerImg.setAttribute('id','containerImg3')

    const img = d.createElement('img')
    img.setAttribute('class','w100')
    img.setAttribute('alt','img-branding')
    img.setAttribute('src','app/assets/saving.svg')

    containerImg.appendChild(img)
    // --------------------------------------------------------

    // RENDERIZADO:
    containerG.appendChild(head)
    containerG.appendChild(ad)
    containerG.appendChild(PersonalSavingBox())
    containerG.appendChild(DataEditBox())
    containerG.appendChild(containerImg)
    containerG.classList.add('hide')

    return containerG
}