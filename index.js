const HEADER = document.getElementById("header");
window.onscroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 0) {
        HEADER.classList.add('header-fixed')
    } else {
        HEADER.classList.remove('header-fixed')
    }
}
    