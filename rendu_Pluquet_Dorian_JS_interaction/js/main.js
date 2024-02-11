document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.mon-slider', {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
            autoplay: {
              delay: 3000,
            },
    });
})

document.addEventListener('DOMContentLoaded', function() {
  let darkMode = document.querySelector('.darkmode');
  let body = document.body;

  darkMode.addEventListener('click', function() {
      body.classList.toggle('dark');
  });
});