document.addEventListener('DOMContentLoaded', function() {
  let tab = document.querySelectorAll('li');
  tab.forEach(function(tab) {
      tab.addEventListener('click', function() {
          tab.forEach(function(tab) {
              tab.classList.remove('tab-active');
          });

          let tabDivs = document.querySelectorAll('div');
          tabDivs.forEach(function(Divs) {
              Divs.classList.remove('active');
          });

          this.classList.add('tab-active');
          if (this.classList.contains('tab_hermione')) {
              document.querySelector('.Hermione').classList.add('active');
          } else if (this.classList.contains('tab_minerva')) {
              document.querySelector('.Minerva').classList.add('active');
          } else if (this.classList.contains('tab_rogue')) {
              document.querySelector('.Rogue').classList.add('active');
          } else if (this.classList.contains('tab_harry')) {
              document.querySelector('.harry').classList.add('active');
          } 
      });
  });
});