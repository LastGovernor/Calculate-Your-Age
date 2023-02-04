'use strict';

const btn = document.getElementById('button');
let yourAge = document.getElementById('yourAge');
// Actual system date
const date = new Date();
const year = date.getFullYear();

function ageCalculator() { 
    const birthDay = Number(document.getElementById('birthday').value);
    let calculate = year - birthDay;

     if(birthDay <= year && birthDay > 1900){
        yourAge.textContent = calculate;
     } else{
        alert('Your birth year higher than actual year or lower than 1900!');
     }
}

btn.addEventListener('click', ageCalculator);

