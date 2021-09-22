import { HeaderG } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"

export function App() {

    const $root = document.getElementById('root')
    $root.innerHTML=null
    $root.appendChild(HeaderG())
    $root.appendChild(Main())

    Router()

}