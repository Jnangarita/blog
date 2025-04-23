'use strict';

const goTopBtn = document.getElementById('top-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

function goToTopPage() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}