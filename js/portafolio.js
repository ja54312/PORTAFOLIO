const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(validation);
validation(ipad);
  function validation(event) {
      if (event.matches) {
            console.log('true');
          burgerButton.addEventListener('click', hideShow);
          } else {
            console.log('false');
          burgerButton.removeEventListener('click', hideShow);
  }
}

function hideShow() {
menu.classList.contains('is-active') ? menu.classList.remove('is-active') : menu.classList.add('is-active');
}