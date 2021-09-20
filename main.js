"use strict"

const block_of_burger = document.querySelector(".block_of_burger")
const showMenu = document.querySelector(".show_menu")
const cross = document.querySelector(".cross");
const points = document.querySelectorAll("div.menu li");




block_of_burger.addEventListener("click", () => returnBack());
cross.addEventListener("click", () => returnBack());
for(let i = 0; i < points.length; i++)
  points[i].addEventListener("click", () => returnBack());

function returnBack() {
  block_of_burger.classList.toggle('statusBurger');
  showMenu.classList.toggle('statusMenu');
}

let letter1 =  "1.	вёрстка валидная +10 \n 2.	вёрстка семантическая +20 \n 3.	для оформления СV используются css-стили +10 \n",
letter2 = "4.	контент размещается в блоке, который горизонтально центрируется на странице, Фоновый цвет(#f2f2f2) +10 \n",
letter3 = "5.	вёрстка адаптивная: +10 \n 6.	есть адаптивное бургер-меню. (меню на десктопном разрешанее не делал, т к содержание блоков и оно едва ли там нужно. Сам же бургер появляется при уменьшении ширины экрана) +10",
letter4 = "7.	на странице СV присутствует изображение +10 \n 8.	контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n",
letter5 = "9.	CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n",
letter6 = "10.	CV содержит пример вашего кода +10 11.	CV содержит изображения-ссылки на выполненные вами проекты. +10 \n",
letter7 = "CV выполнено на английском языке +10 13.	выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, \n",
letter8 = "ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 \n 14. Дизайн +10 )\n";
console.log(`${letter1}${letter2}${letter3}${letter4}${letter5}${letter6}${letter7}${letter8}`);
console.log("Оцениваю себя на 150/160\nЕсли нужно будет что-нибудь подправить, напишите мне");

