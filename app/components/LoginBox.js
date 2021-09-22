const LoginBox = ()=>{

    const box = document.createElement('div')
    box.setAttribute('class','loginBox')

    box.innerHTML = `
    <button class="btnG btnDark" id="btnLogIn" >Iniciar Sesión</button>

    <form class="formLogin opacity-open none" id="formLogin" >

        <input type="text" name="nombre" placeholder="Nombre" id="inputName" class="inputTextG none" 
        title="Sólo se acepta letras y espacios en blanco" required>

        <p class="msjErrorLogin margin-auto none styleMsj" id="nombre"></p>

        <input type="email" id="email" name="correo" placeholder="Correo" class="inputTextG"
        title="Email debe tener un @ y un dominio."  
        required>
        
        <p class="msjErrorLogin margin-auto none styleMsj" id="correo"></p>

        <input type="password" name="contrasena" id="password" placeholder="Contraseña" 
        title="La contraseña debe tener entre 8 y 18 caracteres, al menos un dígito, una mayúscula y una minúscula." 
        class="inputTextG" required>

        <p class="msjErrorLogin margin-auto none styleMsj" id="contrasena"></p>

        <p class="msjErrorLogin margin-auto none errRequest" id="msjErrorLogin"></p>

        <input type="submit" value="Entrar" id="toRegister" class="btnP btnYellow box-shadow" data-state="">

        <div class="eye">
            <img id="imgNoEye" class="none" src="app/assets/novisible.svg" alt="icon-oculto">
            <img id="imgEye" src="app/assets/visible.svg" alt="icon-visible">
        </div>

    </form>

    <button class="btnG btnDark" id="btnSignIn" >Regístrate</button>   
    `

    return box
}

export {LoginBox}