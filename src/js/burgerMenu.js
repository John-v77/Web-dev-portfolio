const burgerBtn = document.querySelector('.menu-btn')
const navMenu = document.querySelector('body')


burgerBtn.addEventListener('click', _ => {
    burgerBtn.classList.toggle('btn-open')
    navMenu.classList.toggle('nav-open')
})

// -----------------------------------------------


const navBar = document.querySelector('nav')
console.log(navBar)

window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        navBar.classList.add('scrolled')
    }
    else{
        navBar.classList.remove('scrolled')
    }
})
