 export default class Slider {
  constructor({
    sliderLine, 
    nextSlide, 
    prevSlide, 
    images, 
    sliderContainer, 
    sliderItems
  }) {
    
    this.sliderLine = sliderLine
    this.nextSlide = nextSlide
    this.prevSlide = prevSlide
    this.images = images
    this.sliderItems = sliderItems
    this.sliderContainer = sliderContainer
    this._width = sliderContainer.offsetWidth
    this._count = 0
    this._distanceStartX = 0
    this._distanceStartY = 0
    this._startTime = 0
  }
  

  scrollSlider = () => {
    this.sliderLine.style.transform = 'translate(-'+ this._count * this._width + 'px)'
  }
  
  clickNextHandler = () => {
    if(this._count < this.images.length - 1){
      this._count++
    }else {
      this._count = 0
    }
    this.scrollSlider()
  }

  clickPrevHandler = () => {
    if(this._count > 0){
      this._count--
    }else{
      this._count = this.images.length - 1
    }
  
    this.scrollSlider()
  }

  handleTouchStart = (e) => {
    this._startTime = new Date().getTime()
    const currentTouch = e.changedTouches[0]
    this._distanceStartX = currentTouch.pageX
    this._distanceStartY = currentTouch.pageY
  }

  handleTouchEnd= (e) => {
    const distanceMoveX = e.changedTouches[0].pageX
    const distanceMoveY = e.changedTouches[0].pageY 
    const threshold = 150
    const restrain = 100
    const allowedTime = 3000
    const xDiff = distanceMoveX - this._distanceStartX
    const yDiff = distanceMoveY - this._distanceStartY
    const elapsedTime = new Date().getTime() - this._startTime
    
    if(!this._distanceStartX || !this._distanceStartY) {
      return false
    }

    if(Math.abs(xDiff) > Math.abs(yDiff) 
      && Math.abs(xDiff) >= threshold 
      && Math.abs(yDiff) <= restrain
      && elapsedTime <= allowedTime){
      if(xDiff < 0){
        this.clickNextHandler()
      } else if (xDiff > 0) {
        this.clickPrevHandler()
      }
    }
  }

  identifyImageWidth = () =>{
    this.images.forEach(item => {
      item.style.width = this._width + 'px'
      item.style.height = 'auto'
    })
  }

  updateSliderWidth = () => {
    this._width = this.sliderContainer.offsetWidth
  }

  init = () => {
    this.updateSliderWidth()
    this.identifyImageWidth()
    this.scrollSlider()    
    this.sliderLine.style.width = this._width * this.images.length + 'px'

    this.nextSlide.addEventListener('click',this.clickNextHandler)
    this.prevSlide.addEventListener('click',this.clickPrevHandler)

    this.sliderItems.forEach(item => {
      item.addEventListener('touchstart', this.handleTouchStart)
      item.addEventListener('touchend',this.handleTouchEnd)
    })
  }
}

