// modal
const btnModal = document.getElementById('open-modal-btn');
const firstModal = document.getElementById('first-modal');
const closeBtnFirstModal = document.getElementById('close-first-modal');

btnModal.addEventListener('click', function() {
  firstModal.classList.add('open');
})

closeBtnFirstModal.addEventListener('click', function() {
  firstModal.classList.remove('open');
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    firstModal.classList.remove('open');
  }
})


// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 800,
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  mousewheel: true,
  oneWayMovement: false,
  navigation: {
    prevEl: '.swiper-button-prev',
  },
})
