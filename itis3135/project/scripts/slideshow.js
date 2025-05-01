
// Function to start a slideshow in a container
function startSlideshow(containerId) {
  const slides = document.querySelectorAll(`#${containerId} .slide`);
  let index = 0;

  function showSlide() {
    slides.forEach((slide) => slide.style.display = "none");// Hide all slides
    slides[index].style.display = "block";// Show current slide
    index = (index + 1) % slides.length;// Move to next slide
  }

  showSlide(); 
  setInterval(showSlide, 3000); // Change slide every 3 seconds
}

  // Start both slideshows
  window.onload = () => {
    startSlideshow("men-slideshow");
    startSlideshow("women-slideshow");
};

