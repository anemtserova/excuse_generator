/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "The Big Yellow bird",
    "Harry Potter"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "drank",
    "stole",
    "replaced"
  ];
  let what = [
    "my homework",
    "the keys to my house",
    "the car",
    "my grandma's glasses",
    "my time machine"
  ];
  let when = [
    "before the class",
    "in the hallway",
    "when I wasn't looking",
    "during my third lunch",
    'while I was singing "Jingle Bells"'
  ];

  let excuse = document.getElementById("excuse");

  excuse.innerHTML = `${who[Math.floor(Math.random() * (who.length - 1))]}
  ${action[Math.floor(Math.random() * (action.length - 1))]} ${
    what[Math.floor(Math.random() * (what.length - 1))]
  } ${when[Math.floor(Math.random() * (when.length - 1))]}`;
  document.getElementById("test").innerHTML = Math.floor(Math.random() * 6);
  //console.log(w
};
