// -----------   Burger Menu Bth - for mobile ------------------------------
const burgerBtn = document.querySelector('.menu-btn')
const navMenu = document.querySelector('body')


burgerBtn.addEventListener('click', _ => {
    burgerBtn.classList.toggle('btn-open')
    navMenu.classList.toggle('nav-open')
})

// -------------------change Navbar background on scroll -------------------


const navBar = document.querySelector('nav')

window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        navBar.classList.add('scrolled')
    }
    else{
        navBar.classList.remove('scrolled')
    }
})


// --------------slide out navigation if linked clicked on mobile ----------

navBar.addEventListener('click', _=>{
    burgerBtn.classList.remove('btn-open')
    navMenu.classList.remove('nav-open')
})


