function includeHTML() {
    var elements = document.querySelectorAll('[data-include]');
    var total = elements.length;
    var loaded = 0;
  
    if (total === 0) {
      document.dispatchEvent(new Event('htmlIncludeLoaded'));
      return;
    }
  
    elements.forEach(function(el) {
      var file = el.getAttribute('data-include');
      fetch(file)
        .then(response => {
          if (response.ok) return response.text();
          else return Promise.reject('Page not found.');
        })
        .then(data => {
          el.innerHTML = data;
          loaded++;
          if (loaded === total) {
            document.dispatchEvent(new Event('htmlIncludeLoaded'));
          }
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);
  