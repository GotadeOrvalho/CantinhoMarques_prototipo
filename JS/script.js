var Carrosel = new Swiper('.carrosel', {
  slidesPerView: 4,       // Mostra 4 cards por vez
  slidesPerGroup: 1,      // Passa 1 card por vez
  spaceBetween: 20,       // Espaço entre os cards
  loop: true,             // Loop infinito
  grabCursor: true,
  centeredSlides: false,  // Não centraliza os slides

  // Efeito padrão (sem coverflow pra manter os 4 visíveis)
  effect: 'slide',

  // Paginação e botões
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // Responsividade
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});