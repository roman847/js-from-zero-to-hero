const burgerButton = document.querySelector('.header__burger')
const headerNavigation = document.querySelector('.header__nav')

burgerButton.addEventListener('click',()=>{
  burgerButton.classList.toggle('header__burger--open')
  headerNavigation.classList.toggle('header__nav--open')
})