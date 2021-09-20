"use strict"

const block_of_burger = document.querySelector(".block_of_burger")
const showMenu = document.querySelector(".show_menu")
const cross = document.querySelector(".cross");


block_of_burger.addEventListener("click", () => useMenu());
cross.addEventListener("click", () => useMenu())
showMenu.addEventListener("click", () => useMenu())

function useMenu() {
  block_of_burger.classList.toggle('experiment');
  showMenu.classList.toggle('experiment2');
  console.log("Script was working!")
}

function returnBack() {
  showMenu.classList.toggle('experiment2');
}

console.log("Script is work");