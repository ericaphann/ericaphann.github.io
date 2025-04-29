
document.addEventListener("DOMContentLoaded", () => {
    const countries = document.querySelectorAll('.country');

    countries.forEach((country) => {
      country.addEventListener('mouseenter', () => {
        country.classList.add('hovered');
      });

      country.addEventListener('mouseleave', () => {
        country.classList.remove('hovered');
      });
    });
});



