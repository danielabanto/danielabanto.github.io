const goButton = document.getElementById('modal_goButton')
const closeButton = document.getElementById('modal_closeButton')
const codeButton = document.getElementById('modal_codeButton')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const proyectos = document.querySelectorAll('.comodin_overlay')
const project_details = document.querySelectorAll('.project_details')
const modal_info = document.getElementById('modal_info')
const menu = document.getElementById('img_menu')
const header = document.getElementById('header')
const menuList = document.getElementById('menu_list')
const menuContainer = document.getElementById('menu_container')
const elementos_lista = document.querySelectorAll('.menu_elemento')
const x = document.getElementById('x')
const mensaje_whatsapp = document.getElementById('mensaje_whatsapp')
const boton_whatsapp = document. getElementById('boton_whatsapp')

//Mensajes que van dentro del modal
const PROYECTOS_TITULO = [
    'PREMIUM ESCUELA',
    'SIMON DICE', 
    'PLATZI CONF', 
    'RICK AND MORTY',
    'EVALUACIÓN OSP',
    'FOXBEL MUSIC'
]
const PROYECTOS_DESCRIPCION = [
    '...EN PROCESO... <br>Pagina informativa de la escuela de manejo Premium, desarrollada con React.js y Bootstrap Carousel',
    'Es un juego de memoria recordando la secuencia de 4 colores, realizado con Javascript Vanilla',
    'Pagina informativa de ejemplo, maquetada con HTML, CSS y Bootstrap',
    'Todos los personajes de la serie animada, implementada con React (Hooks) haciendo llamado a la API de rickandmorty y almacenando informacion mediante el uso de Redux',
    'En proceso... CRUD de Peliculas con React.js',
    'En proceso... Conexion a Deezer API y manejo del estado con React Hooks para desplegar aplicacion con reproductor de musica'
]
const PROYECTOS_IMAGEN = [
    'img/Premium.jpg',
    'img/Simon_dice.jpg',
    'img/platzi_conf.png',
    'img/rickandmorty.jpg',
    'img/EvaluacionOsp.png',
    'img/FoxbelMusic.jpg'
]
const PROYECTOS_CODE = [
    'https://github.com/danielabanto/premium_escuela',
    'https://github.com/danielabanto/simondice',
    'https://github.com/danielabanto/platzi-bootstrap2019',
    'https://github.com/danielabanto/RickAndMorty',
    'https://github.com/danielabanto/evaluacion_osp',
    'https://github.com/danielabanto/foxbelMusic'
]
const PROYECTOS_LINK = [
    'https://danielabanto.github.io/premium_escuela/dist/',
    'https://danielabanto.github.io/simondice/',
    'https://danielabanto.github.io/platzi-bootstrap2019/',
    'https://danielabanto.github.io/RickAndMorty/dist/',
    'https://danielabanto.github.io/evaluacion_osp/#/peliculas',
    'https://danielabanto.github.io/foxbelMusic/'
]

const renderizado = (id) => (
    `
        <h2 class="modal_title">${PROYECTOS_TITULO[id]}</h2>
        <div class="modal_content">
            <img class="modal_img" src=${PROYECTOS_IMAGEN[id]} alt="">
            <p class="modal_description">${PROYECTOS_DESCRIPCION[id]}</p>
        </div>
    `
)
let item

//Abre el modal cuando se da clic al proyecto, y el hover desde JS
// console.log(proyectos)
for (let i=0; i< proyectos.length; i++){
    proyectos[i].addEventListener("click", (e)=> {
        const id_project = (e.path[1].id).charAt(7)-1
        item = id_project //al global
        modal_info.innerHTML = renderizado(id_project)
        modal.classList.add('displayBlock')
        overlay.classList.add('displayBlock')
    })
    proyectos[i].addEventListener("mouseover", (e)=> {
        project_details[i].classList.add("project_details_hover")
    })
    proyectos[i].addEventListener("mouseout", (e)=> {
        project_details[i].classList.remove("project_details_hover")
    })
}

//Header fixed cuando hay scroll
const HEADER = document.getElementById("header")
window.onscroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 0) {
        HEADER.classList.add('header-fixed')
    } else {
        HEADER.classList.remove('header-fixed')
    }
}

//Boton que lleva hacia el proyecto aparte
goButton.onclick = () => {
    const win = window.open(PROYECTOS_LINK[item], '_blank');
    win.focus();
}
//Boton que lleva al repositorio del codigo
codeButton.onclick = () => {
    const win = window.open(PROYECTOS_CODE[item], '_blank')
    win.focus()
}

//Cerrar Modal

function cerrarModal () {
    modal.classList.remove('displayBlock')
    overlay.classList.remove('displayBlock')
}
//Boton para cerrar modal
closeButton.onclick = () => {
    cerrarModal()
}


//Menu de hamburguesa
menu.addEventListener('click', abrirMenu)
function abrirMenu () {
    header.classList.toggle('header-fullscrean')
    if (header.classList.contains('header-fullscrean')) {
        menuList.classList.add('ul-fullscrean')
        menuContainer.classList.add('menu-container')
        for (let i=0; i< elementos_lista.length; i++) {
            elementos_lista[i].classList.add('menu-elemento_variante')
        }
    } else {
        menuList.classList.remove('ul-fullscrean')
        menuContainer.classList.remove('menu-container')
        for (let i=0; i< elementos_lista.length; i++) {
            elementos_lista[i].classList.remove('menu-elemento_variante')
        }
    }
}

for (let i=0; i< elementos_lista.length; i++) {
    elementos_lista[i].addEventListener('click', cerrarMenu)
}
function cerrarMenu () {
    header.classList.remove('header-fullscrean')
    menuList.classList.remove('ul-fullscrean')
        menuContainer.classList.remove('menu-container')
        for (let i=0; i< elementos_lista.length; i++) {
            elementos_lista[i].classList.remove('menu-elemento_variante')
        }
}

window.addEventListener('resize', cambioTamaño);
function cambioTamaño() {
    if (window.innerWidth>480 && header.classList.contains('header-fullscrean')) {
        cerrarMenu()
    }
}

x.addEventListener('click', cerrarModal)

//Mensaje de Whatsapp
boton_whatsapp.addEventListener('click', enviarMensaje)
function enviarMensaje () {
    const win = window.open(`https://wa.me/51942301576?text=${mensaje_whatsapp.value}`, '_blank');
    win.focus();
}


