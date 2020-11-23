'use strict';
const buttons=document.querySelectorAll(".button");

/* let handleClick (event) = function  () { console.log(this.innerHTML); }; */
let handleClick = (event) => { console.log(event.target.textContent); }

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', handleClick);
};