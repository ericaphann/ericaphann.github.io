// After HTML includes are loaded
document.addEventListener('htmlIncludeLoaded', function() {
  const links = document.querySelectorAll('nav a');
  const currentUrl = window.location.pathname.split('/').pop(); // Get current page
  // Highlight the active link
  links.forEach((link) => {
    const linkUrl = link.getAttribute('href');
    if (linkUrl === currentUrl) {
      link.classList.add('active');
    }
  });
});
  