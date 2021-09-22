const PersonalSavingBox = ()=>{

    const containerBox = document.createElement('div')
    containerBox.setAttribute('class','containerBoxSaving flexCenter')

    const boxSavingPersonal = document.createElement('div')
    boxSavingPersonal.setAttribute('class','boxSavingPersonal')
    containerBox.appendChild(boxSavingPersonal)

    boxSavingPersonal.innerHTML = `
    <div class="headerBoxPersonal">
        <div class="months"><p class="p">MES</p></div>
        <div class="Savings"><p class="p">AHORROS</p></div>
    </div>
    `
    return containerBox
}

export {PersonalSavingBox}