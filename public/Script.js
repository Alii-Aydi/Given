const navF = () => {
    let nav = document.querySelector('.navbar')
    if (window.scrollY != 0) {
        nav.classList.add('fix_nav')
    } else {
        nav.classList.remove('fix_nav')
    }
}
window.addEventListener('load', navF)
window.addEventListener('scroll', navF)

const togler = document.querySelector('.navbar-toggler')
togler.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('blink')
})