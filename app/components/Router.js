import { AhorroFamiliar} from "./pages/AhorroFamiliar.js"
import { Loader } from "../helpers/Loader.js"
import { SessionActiveHeader } from "./SessionActiveHeader.js"
import { GetFamilySavings } from "./GetFamilySavings.js"
import { SendingData } from "./SendingData.js"
import { AportesPersonales } from "./pages/AportesPersonales.js"
import { GetPersonalSavings} from "./GetPersonalSavings.js"
import { EditAndDeleteData } from "./EditAndDeleteData.js"
import { Comprobantes } from "./pages/Comprobantes.js"
import { GetVouchers } from "./GetVouchers.js"
import { Welcome } from "./pages/Welcome.js"
import { LoginBoxInteraction } from "./LoginBoxInteraction.js"
import { loginEmail } from "./LoginEmail.js"
import { BoxActivationSendData } from "./BoxActivationSendData.js"
import { ActiveZoom } from "./ActiveZoom.js"
import { addClass } from "../helpers/ReusableFunctions.js"
import { HamburgerButton } from "./HamburgerButton.js"
import { MenuMobile } from "./MenuMobile.js"
import { MobileMenuFunctionality } from "./MobileMenuFunctionality.js"
import { LoginFormValidations } from "./LoginFormValidations.js"

export function Router(){
    const auth = firebase.auth()
    const d = document,
        w = window,
        $main = d.querySelector('.main'),
        regExp = /^./ 

    const reg = new RegExp(regExp)
        
    let {hash} = location
    
    auth.onAuthStateChanged(async(user)=>{
        
        if(user){

            $main.appendChild(Loader())
            $main.appendChild(HamburgerButton())
            $main.appendChild(MenuMobile())
            const $loader = d.getElementById('loader')
            await SessionActiveHeader(user)
            MobileMenuFunctionality(user)
            
            switch (hash) {

                case '': w.location.hash = `#/${user.email}/Ahorro-Familiar`
                    break;

                case '#/': w.location.hash = `#/${user.email}/Ahorro-Familiar`
                    break;

                case `#/${user.email}/Ahorro-Familiar`: 
                    $main.appendChild(AhorroFamiliar())
                    BoxActivationSendData()
                    await GetFamilySavings()
                    addClass($loader,'hide')
                    SendingData(user)
                    break;

                case `#/${user.email}/Ahorro-Personal`:
                    $main.appendChild(AportesPersonales())
                    await GetPersonalSavings(user)
                    addClass($loader,'hide')
                    EditAndDeleteData(user)
                    break;

                case `#/${user.email}/Vauchers`:
                    $main.appendChild(Comprobantes())
                    await GetVouchers(user)
                    addClass($loader,'hide')
                    ActiveZoom()
                    break;
            
                default: 
                    break;
            }
            
        }else{

            if(!hash || hash === '#/' || reg.test(hash)){
                w.location.hash = ''
                $main.appendChild(Loader())
                $main.appendChild(Welcome())
                LoginBoxInteraction()
                LoginFormValidations()
                loginEmail()
                
            }

        }

    })

}