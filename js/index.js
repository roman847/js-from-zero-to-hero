import Slider  from "./Slider.js"

const burgerButton = document.querySelector('.header__burger')
const headerNavigation = document.querySelector('.header__nav')
const images = document.querySelectorAll(".slider__img")
const sliderLine = document.querySelector('.slider__line')
const nextSlide = document.querySelector('.slider__next')
const prevSlide = document.querySelector('.slider__prev')
const sliderItems = document.querySelectorAll('.sliderItem__link')
const sliderContainer = document.querySelector(".projects__slider")

burgerButton.addEventListener('click',()=>{
  burgerButton.classList.toggle('header__burger--open')
  headerNavigation.classList.toggle('header__nav--open')
})

const slider = new Slider({
  sliderLine:  sliderLine,
  sliderItems: sliderItems,
  nextSlide: nextSlide,
  prevSlide: prevSlide,
  images: images,
  sliderContainer: sliderContainer
})
slider.init()

window.addEventListener('resize', slider.init )









