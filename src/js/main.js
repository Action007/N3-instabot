$(".star").rateYo({
  starWidth: "24px",
  normalFill: "#D9D9D9",
  ratedFill: "#4754eb",
  spacing: "5px",
  readOnly: true,
  starSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8967 1.68721C12.5299 0.943963 11.4701 0.943966 11.1033 1.68721L8.14126 7.68889L1.518 8.65131C0.697782 8.77049 0.370276 9.77847 0.963791 10.357L5.75642 15.0287L4.62503 21.6252C4.48492 22.4421 5.34236 23.065 6.07598 22.6793L12 19.5649L17.924 22.6793C18.6576 23.065 19.5151 22.4421 19.375 21.6252L18.2436 15.0287L23.0362 10.357C23.6297 9.77847 23.3022 8.77049 22.482 8.65131L15.8587 7.68889L12.8967 1.68721Z" stroke="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="24" y1="0.999999" x2="-2.14577e-06" y2="25" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5" /><stop offset="1" stop-color="white" stop-opacity="0" /></linearGradient></defs></svg>'
});

$(document).ready(function () {
  $('.question__add').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
})

const iconMenu = document.querySelector('.burger-wrap');
const menuBody = document.querySelector('.menu-nav__wrapper');
const menuPopup = document.querySelector('.menu-nav__wrapper');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock1');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  })
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto], .footer__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock1');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

$('.reviews__link').on('click', function () {
  $('.reviews__item, .reviews__link , .reviews__link-normal, .reviews__link-active').toggleClass('normal');
})

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// lazy load
const images = document.querySelectorAll('img');

const options = {
  root: null,
  rootMargin: '200px',
  threshold: 0.1
}

function handleImg(myImg, observer) {
  myImg.forEach(myImgSingle => {
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  })
}

function loadImage(image) {
  image.src = image.getAttribute('data-src');
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
  observer.observe(img);
});

AOS.init();