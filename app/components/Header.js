const HeaderG = ()=>{

    const d = document

    const header = d.createElement('header')
    header.setAttribute('class','header flexStart')

    const nameWeb = d.createElement('p')
    nameWeb.setAttribute('id','nameWeb')
    nameWeb.textContent = 'Registro de ahorro familiar'

    const live = d.createElement('div')
    live.setAttribute('class','live box-shadow')
    
    const user = d.createElement('p')
    user.setAttribute('id','usuario')
    
    const pig = d.createElement('img')
    pig.classList.add('pig')
    pig.setAttribute('src','app/assets/pig.svg')
    pig.setAttribute('alt','alcancía')

    const activeSessionContent = d.createElement('div')
    activeSessionContent.setAttribute('class','headerLogin none')
    activeSessionContent.appendChild(live)
    activeSessionContent.appendChild(user)
    activeSessionContent.appendChild(pig)
    
    const nav = d.createElement('nav')
    nav.setAttribute('class','nav none')

    // RENDER 
    header.appendChild(nameWeb)
    header.appendChild(activeSessionContent)
    header.appendChild(nav)

    return header
}

export {HeaderG}