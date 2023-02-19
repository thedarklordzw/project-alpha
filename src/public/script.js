const modal = document.getElementById('modal');
const body = document.querySelector('body');
const modalChild = document.getElementById('layout');
const modalShowEl = document.getElementById('modal-show');

const close = document.getElementById('close');
const button = document.getElementById('button');

const showModal = event => {
  console.log(event);
  modal.classList.add('flex');
  modal.classList.remove('hidden');
  body.classList.add('overflow-hidden');
};

const hideModal = event => {
  console.log(event);
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  body.classList.remove('overflow-hidden');
};

const modalOverlayClick = event => {
  if (event.target === modal) {
    modal.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  } else {
    return;
  }
};

button.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
modal.addEventListener('click', modalOverlayClick);
modalShowEl.addEventListener('click', showModal);
