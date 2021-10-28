const burgerBtn = document.querySelector('.menu-btn')
const navMenu = document.querySelector('body')


burgerBtn.addEventListener('click', _ => {
    burgerBtn.classList.toggle('btn-open')
    navMenu.classList.toggle('nav-open')
})

// -----------------------------------------------
