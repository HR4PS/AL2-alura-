function temaClaro(){
    let elemento = document.querySelector('#style')
    document.querySelector('#style').style.backgroundColor = "white"
    document.querySelector('#style').style.color = "black"
    document.querySelector('strong').style.color = "orange"
    document.querySelector('.nome').style.color = "orange"
}
function temaEscuro(){
    let elemento = document.querySelector('#style')
    document.querySelector('#style').style.backgroundColor = "black"
    document.querySelector('#style').style.color = "white"
    document.querySelector('.nome').style.color = "yellow"
}

//usando addEventListener
let menuOpener = document.querySelector('#menu-opener')


    menuOpener.addEventListener('click', () => {

        let menuArea = document.getElementById("menu-area")

        if(menuArea.style.width == '100px'){
            menuArea.style.width = '0px'
        } else {
            menuArea.style.width = '100px'
        }
    
    } )//funcao anonima