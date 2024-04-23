/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const valueBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit-btn");
const poundsText = document.querySelector("#poundsText")
const gramsText = document.querySelector("#gramsText")
const ouncesText = document.querySelector("#ouncesText")

function kgToPounds() {
    kilograms = valueBar.value;
    pounds = kilograms * 2.2046
    poundsText.textContent = `Svarus: ${pounds}`
}

function kgToGrams() {
    kilograms = valueBar.value;
    grams = kilograms / 0.001
    gramsText.textContent = `Gramus: ${grams}`
}

function kgToOunces() {
    kilograms = valueBar.value;
    ounces = kilograms * 35.274
    ouncesText.textContent = `Uncijos: ${ounces}`
}

submitButton.addEventListener("click", (k) => {
    k.preventDefault();
    kgToPounds();
    kgToGrams();
    kgToOunces();
})