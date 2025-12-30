// tracks all slideshows on the page
var slideShows = [];

// Class representing a single slide show
class SlideShow {
  constructor(slideshow) {
    this.currentVisibleIndex = 0;
    this.imageElements = slideshow.getElementsByTagName("img");
    this.slideshow = slideshow;

    this.setupButtons();
    this.updateDisplay();
  }

  // Sets up the next and previous buttons for the slideshow
  setupButtons() {
    let nextButton = this.slideshow.getElementsByClassName("slide-show-next")[0];
    let prevButton = this.slideshow.getElementsByClassName("slide-show-prev")[0];

    nextButton.onclick = () => this.next();
    prevButton.onclick = () => this.previous();
  }

  // Updates the display to show the current slide
  updateDisplay() {
    for (let i = 0; i < this.imageElements.length; i++) {
      if (i !== this.currentVisibleIndex) {
        this.imageElements[i].style.display = "none";

        continue;
      }

      this.imageElements[i].style.display = "block";
    }
  }

  // Advances to the next slide, wrapping around if necessary
  next() {
    this.currentVisibleIndex += 1;
    
    if (this.currentVisibleIndex >= this.imageElements.length) {
      this.currentVisibleIndex = 0;
    }

    this.updateDisplay();
  }

  // Goes back to the previous slide, wrapping around if necessary
  previous() {
    this.currentVisibleIndex -= 1;

    if (this.currentVisibleIndex < 0) {
      this.currentVisibleIndex = this.imageElements.length - 1;
    }

    this.updateDisplay();
  }
}

// Initialize all slide shows on window load
window.onload = function() {
  initSlideShows();
};

// Initializes a single slideshow
function initSlideShow(slideshow) {
  let newSlideShow = new SlideShow(slideshow);

  slideShows[slideShows.length] = newSlideShow;
}

// Gets all slideshows on the page
function getAllSlideShows() {
  return document.getElementsByClassName("slide-show-container");
}

// Initializes all slideshows on the page
function initSlideShows() {
  let allSlideShows = getAllSlideShows();

  for (let i = 0; i < allSlideShows.length; i++) {
    initSlideShow(allSlideShows[i]);
  }
}