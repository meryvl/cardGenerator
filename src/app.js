/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = ["♦", " ♥ ", "♠", "♣"];
  const numbers = ["Q", " k", "J", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  document.querySelector(".card").innerHTML = `<div id='card' > 
  <div id="palo">${icons[1]}</div>
  <div id="valor">${numbers[1]}</div>
  <div id="palo2">${icons[1]}</div>

</div>`;

  const render = () => {
    const randomCard = () => {
      const numberRamdomIcon = Math.floor(Math.random() * icons.length);
      const numberRandomValor = Math.floor(Math.random() * numbers.length);
      const icon = icons[numberRamdomIcon];
      const number = numbers[numberRandomValor];
      card.innerHTML = `
      <div id="palo">${icon}</div>
      <div id="valor">${number}</div>
      <div id="palo2">${icon}</div>
      </div>`;
      if (icon === " ♥ ") {
        card.innerHTML = `<div class='card-heart red'> 
        <div id="palo" >${icon}</div>
        <div id="valor" >${number}</div>
        <div id="palo2" >${icon}</div></div>`;
      } else if (icon === "♦") {
        card.innerHTML = `<div class='card-Diamond red'> 
      <div id="palo" >${icon}</div>
      <div id="valor" >${number}</div>
      <div id="palo2" >${icon}</div></div>`;
      } else if (icon === "♠") {
        card.innerHTML = `<div class='card-spades'> 
        <div id="palo" >${icon}</div>
        <div id="valor" >${number}</div>
        <div id="palo2" >${icon}</div></div>`;
      } else {
        card.innerHTML = `<div class='card-clubs'> 
        <div id="palo" >${icon}</div>
        <div id="valor" >${number}</div>
        <div id="palo2" >${icon}</div></div>`;
      }
    };
    randomCard();
  };

  render();
  const button = document.querySelector("#button");
  button.addEventListener("click", render);
};
