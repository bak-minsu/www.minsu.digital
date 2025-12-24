var slideShows = [];

window.onload = function() {
  initSlideShows();
};

function initSlideShow(imageElements) {
  let newSlideShow = {
    currentVisibleIndex: 0,
    totalSlides: imageElements.length,
    imageElements: imageElements,
    updateDisplay() {
      let slideShowImages = this.imageElements;

      for (let i = 0; i < slideShowImages.length; i++) {
        slideShowImages[i].style.display = "none";  
      }

      slideShowImages[this.currentVisibleIndex].style.display = "block";
    },
    incrementVisible() {
      this.currentVisibleIndex += 1;
      
      if (this.currentVisibleIndex >= this.imageElements.length) {
        this.currentVisibleIndex = 0;
      }
    },
    decrementVisible() {
      this.currentVisibleIndex -= 1;

      if (this.currentVisibleIndex < 0) {
        this.currentVisibleIndex = this.imageElements.length - 1;
      }
    }
  };

  slideShows[slideShows.length] = newSlideShow;
  newSlideShow.updateDisplay();
}

function getAllSlideShows() {
  return document.getElementsByClassName("slide-show-container");
}

function initSlideShows() {
  let allSlideShows = getAllSlideShows();

  for (let i = 0; i < allSlideShows.length; i++) {
    let slideShowImages = allSlideShows[i].getElementsByTagName("img");
    initSlideShow(slideShowImages);
  }
}

function getSlideShow(slideShowIndex) {
  let allSlideShows = getAllSlideShows();

  return allSlideShows[slideShowIndex];
}

function nextSlide(slideShowIndex) {
  slideShows[slideShowIndex].incrementVisible();

  displaySlideShow(slideShowIndex);
}

function prevSlide(slideShowIndex) {
  slideShows[slideShowIndex].decrementVisible();

  displaySlideShow(slideShowIndex);
}

function hideAllSlideShow(slideShowIndex) {
  let slideShowImages = slideShows[slideShowIndex].imageElements;

  for (let i = 0; i < slideShowImages.length; i++) {
    slideShowImages[i].style.display = "none";  
  }
}

function displaySlideShow(slideShowIndex) {
  slideShows[slideShowIndex].updateDisplay();
}