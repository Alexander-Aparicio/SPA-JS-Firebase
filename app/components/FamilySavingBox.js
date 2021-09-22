const FamilySavingBox = ()=>{

    const containerBox = document.createElement('div')
    containerBox.setAttribute('class','containerBoxSaving flexCenter')

    const boxSaving = document.createElement('div')
    boxSaving.setAttribute('class','boxSaving')

    boxSaving.innerHTML =`
    <div class="headerBox">

        <div class="users">
            <p class="p">APORTANTES</p>
        </div>

        <div class="Savings">
            <p class="p">AHORROS</p>
        </div>

    </div>

    <div class="listUsers"></div>
    
    <div class="listSavings"></div>
    `
    containerBox.appendChild(boxSaving)

    return containerBox

}

export {FamilySavingBox}