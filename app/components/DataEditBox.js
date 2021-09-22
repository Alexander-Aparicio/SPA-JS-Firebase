const DataEditBox = ()=>{

    const popupForm = document.createElement('div')
    popupForm.setAttribute('class','popupP box-shadow formEdit none')
    popupForm.setAttribute('id','formEdit')

    popupForm.innerHTML = `
    <button class="toClose toCloseEdit" id="toCloseEdit">X</button>
                
    <div class="boxEdit">

        <div class="select btnPE">
            <p class="p selectSaving"></p>
        </div>

        <div class="infoInput">
            <p class="p info"></p>
        </div>
        
        <input type="text" class="btnPE none" id="inputEdit">
        
        <button class="btnPE btnCherry" id="btnDelete">Eliminar</button>
        
        <button class="btnPE btnPurple" id="btnEdit">Editar</button>
        
        <button class="btnPE btnYellow none" id="btnEditSend">Enviar</button>
        
        <div class="loaderForm hide loaderEdit">
            <p class="p msjLoading">Procesando..</p>
        </div>
        
        <p class="p msjError none" id="msjErrorEdit"></p>

    </div>
    `
    return popupForm

}

export { DataEditBox }