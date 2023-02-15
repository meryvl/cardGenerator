/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = ["♦", " ♥ ", "♠", "♣"];
  const numbers = ["Q", " k", "J", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  document.querySelector(".card-heart").innerHTML = `<div id='card' > 
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
      if (icon === " ♥ " || icon === "♦") {
        card.innerHTML = ` <div id="palo" class="red">${icon}</div>
        <div id="valor" class="red">${number}</div>
        <div id="palo2"  class="red">${icon}</div>`;
      }
    };
    randomCard();
  };

  render();
  const button = document.querySelector("#button");
  button.addEventListener("click", render);
};
