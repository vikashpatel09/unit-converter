/* 1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound */

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
    let input = inputEl.value;
    length.innerHTML = `${input} meter = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meter`;
    volume.innerHTML = `${input} liter = ${(input * 0.264).toFixed(3)} gallon | ${input} gallon = ${(input / 0.264).toFixed(3)} liter`;
    mass.innerHTML = `${input} kilo = ${(input * 2.204).toFixed(3)} pound | ${input} pound = ${(input / 2.204).toFixed(3)} kilo`;
});