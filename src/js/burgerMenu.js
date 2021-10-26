const navMenu = document.querySelector('.menu-btn')

navMenu.addEventListener('click', _ => {
    console.log('click')
    navMenu.classList.toggle('nav-open')
})