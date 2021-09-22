export function Loader (){

    const loader = document.createElement('div')
    loader.classList.add('lds-dual-ring')
    loader.setAttribute('id','loader')

    const msj = document.createElement('p')
    msj.setAttribute('class','msjLoader')
    msj.textContent = 'Loading..😃'

    loader.appendChild(msj)

    return loader
}