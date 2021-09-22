const DataSendingBox = ()=>{

    const box = document.createElement('div')

    box.setAttribute('id','boxBtnSend')

    box.innerHTML = `
    <button class="btnYellow btnG" id="btnOn" >Ingresar nuevo aporte</button>

    <div class="popupG box-shadow none popupForm" >

        <button class="toClose toClosePopup">X</button>

        <form class="formSend" id="formSend">

            <p class="p" id="msjError"></p>

            <input type="text" class="inputTextG" id="savingSendBox">

            <label for="photo" class="inputFile flexCenter btnPurple">Subir comprobante</label>

            <input type="file" name="photo" id="photo" class="none" accept="image/*">

            <div class="loaderForm hide" id="loaderForm">
                <p class="p msjLoading">Enviando..</p>
            </div>
            
            <input type="submit" class="btnGE btnCherry" id="sendData" value="Registrar">
    
        </form>

    </div>
    `
    return box

}

export {DataSendingBox}