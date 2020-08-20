const goButton = document.getElementById('modal_goButton')
const closeButton = document.getElementById('modal_closeButton')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const proyectos = document.querySelectorAll('.comodin_overlay')
const project_details = document.querySelectorAll('.project_details')
const modal_info = document.getElementById('modal_info')

//Mensajes que van dentro del modal
const PROYECTOS_TITULO = [
    'SIMON DICE', 'PLATZI CONF', 'RICK AND MORTY', 'CLON GLOOGLE', 'PROYECTO 5', 'PROYECTO 6'
]
const PROYECTOS_DESCRIPCION = [
    'Juego de memoria con secuencia de colores',
    'Pagina informativa de la conferencia de Platzi',
    'Todos los personajes de la serie animada',
    'Clon de google',
    'Proyectos 5 aun por verse',
    'Proyecto 6 aun tambien por verse'
]
const PROYECTOS_IMAGEN = [
    'img/Simon_dice.jpg',
    'img/platzi_conf.png',
    'img/rickandmorty.jpg',
    'img/clon_google.jpg',
    'img/FB_IMG_1593315626780.jpg',
    'img/FB_IMG_1593315626780.jpg'
]
const PROYECTOS_LINK = [
    'https://danielabanto.github.io/simondice/',
    'https://danielabanto.github.io/platzi-bootstrap2019/',
    'https://danielabanto.github.io/RickAndMorty/dist/',
    'https://danielabanto.github.io/clon_google/',
    '',
    ''
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

//Boton para cerrar modal
closeButton.onclick = () => {
    modal.classList.remove('displayBlock')
    overlay.classList.remove('displayBlock')
}

