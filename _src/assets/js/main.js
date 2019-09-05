'use strict';


const form = document.querySelector('.form__inputs');
const gap = document.querySelectorAll('.gap__number');
const card4 = document.getElementById('#choose__option1');
const card6 = document.getElementById('#choose__option2');
const card8 = document.getElementById('#choose__option3');
const btnComenzar = document.querySelector('.choose--number');
const cardList = document.querySelector('.card__list');
let cardNotShow=document.querySelector('.image-back');

const urlCards = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';

// Aquí recojo el value del input y guardo los datos en el local storage;
function getNumber () {

  for (const itemGap of gap) {
    const value = itemGap.value;
    if (itemGap.checked === true){
      localStorage.setItem('gapValue', value);
    }
  }
}

function selectOption () {
// recogo el estado del form y ese dato me lleva a la API
  getNumber();
  // pongo el 4  para que sea por defecto 4 y no esté vacio y la url siempre tenga un número
  const getGapNumber = localStorage.getItem('gapValue') || 4;
  const urlCardsShow =`https://raw.githubusercontent.com/Adalab/cards-data/master/${getGapNumber}.json`;
  console.log(urlCardsShow);

  fetch(urlCardsShow)
    .then (response => response.json())
    .then (data => {

      for(let item of data) {

        let content = `<li class="card" data-index${item.pair}>
        <img class="image image-front hidden" src="${item.image}" alt="${item.name}">
        <img class="image image-back" src="${urlCards}" alt="adalab">
        <p>${item.name} </p>
        </li>`;
        cardList.innerHTML += content;

        // Aquí  creo una variable donde guardo todos los elementos que contienen la clase img, los recorro con un for y le digo que cuando haga click sobre item me vaya a la función showImage
        const card = document.querySelectorAll('.card');
        for (const item of card) {
          item.addEventListener('click', showImage);

        }
      }

    });
}

function showImage (event){
  const card = event.currentTarget;
  console.log(card);
  card.querySelector('.image-front').classList.toggle('hidden');
  card.querySelector('.image-back').classList.toggle('hidden');
}

btnComenzar.addEventListener('click', selectOption);
