'use strict';


const form = document.querySelector('.form__inputs');
const gap = document.querySelectorAll('.gap__number');
const card4 = document.getElementById('#choose__option1');
const card6 = document.getElementById('#choose__option2');
const card8 = document.getElementById('#choose__option3');
const btnComenzar = document.querySelector('.choose--number');
const cardList = document.querySelector('.card__list');

const urlCards = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';



// Aquí recojo el value del input y guardo los datos en el local storage;
function getNumber (event) {
  for (const itemGap of gap) {
    const itemGap = event.currentTarget.value;
    localStorage.setItem('gapValue', itemGap);
  }
}

function selectOption () {
// recogo el estado del form y ese dato me lleva a la API
  const getGapNumber = localStorage.getItem('gapValue');
  const urlCardsShow = `https://raw.githubusercontent.com/Adalab/cards‒data/master/${getGapNumber}.json`;

  fetch(urlCardsShow)
    .then (response => response.json())
    .then (data => {
      for(let item of data) {
        // item = `<li>${item.image}${item.name}${item.pair}</li>`;
        // cardList.innerHTML += item;
      }
    })

}


btnComenzar.addEventListener('click', getNumber);



// function selectGapNumber(){
//     let i;
//     for (i=0;i<document.form__inputs.choose__option.length;i++){
//       if (document.form__inputs.choose__option[i].checked)
//         break;
//     }
//     document.item = document.form__inputs.choose__option[i].value;
//   }
