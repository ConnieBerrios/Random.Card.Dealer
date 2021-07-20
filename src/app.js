/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function(randomcard) {
  let pinta = ["♠", "♥", "♣", "♦"];
  let random_pinta = Math.floor(Math.random() * pinta.length);
  let result = pinta[random_pinta];

  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let random_num = Math.floor(Math.random() * num.length);
  let result2 = num[random_num];

  document.getElementById("card").innerHTML = result;

  document.getElementById("numero").innerHTML = result2;

  document.getElementById("card2").innerHTML = result;
  console.log(randomcard);
};
