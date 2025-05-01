// Run when the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get all elements with class 'country'
  const countries = document.querySelectorAll('.country');

  // Add hover effect to each country
  countries.forEach((country) => {
      country.addEventListener('mouseenter', () => {
          country.classList.add('hovered'); // Add class on hover
      });

      country.addEventListener('mouseleave', () => {
          country.classList.remove('hovered'); // Remove class when not hovered
      });
  });
});




