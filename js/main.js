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

document.querySelector('#first-modal .modal__content').addEventListener('click', event => {
  event.isClickWithInModal = true;
})

document.getElementById('first-modal').addEventListener('click', event => {
  if (event.isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
})

// smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

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
