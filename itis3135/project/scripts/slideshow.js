
function startSlideshow(containerId) {
    const slides = document.querySelectorAll(`#${containerId} .slide`);
    let index = 0;

    function showSlide() {
      slides.forEach((slide) => slide.style.display = "none");
      slides[index].style.display = "block";
      index = (index + 1) % slides.length;
    }

    showSlide(); 
    setInterval(showSlide, 3000); 
  }

  // Start both slideshows
  window.onload = () => {
    startSlideshow("men-slideshow");
    startSlideshow("women-slideshow");
};

