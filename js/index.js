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

const list = [
  {
    img: "https://dummyimage.com/200x200/000/fff",
    titulo: "Lorem Ipsum",
    descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    img: "https://dummyimage.com/200x200/000/fff",
    titulo: "Lorem Ipsum",
    descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    img: "https://dummyimage.com/200x200/000/fff",
    titulo: "Lorem Ipsum",
    descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    img: "https://dummyimage.com/200x200/000/fff",
    titulo: "Lorem Ipsum",
    descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    img: "https://dummyimage.com/200x200/000/fff",
    titulo: "Lorem Ipsum",
    descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  }
];

list.forEach(item => {
  const list = `
    <li class="publications">
      <a href="#">
        <img src="${item.img}" alt="" class="d-block mx-auto">
        <p class="title-publication">${item.titulo}</p>
        <p>${item.descripcion}</p>
      </a>
    </li>
  `;

  document.getElementById('publications-list').innerHTML += list;
});