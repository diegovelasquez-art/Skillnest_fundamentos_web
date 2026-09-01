const btn1 = document.querySelector('#btn-1');
const count1 = document.querySelector('#count-1');

const btn2 = document.querySelector('#btn-2');
const count2 = document.querySelector('#count-2');

const btn3 = document.querySelector('#btn-3');
const count3 = document.querySelector('#count-3');


let likes1 = 0;
let likes2 = 0;
let likes3 = 0;


btn1.addEventListener('click', function () {
    likes1++;
    count1.innerText = likes1;
});

btn2.addEventListener('click', function () {
    likes2++;
    count2.innerText = likes2;
});

btn3.addEventListener('click', function () {
    likes3++;
    count3.innerText = likes3;
});