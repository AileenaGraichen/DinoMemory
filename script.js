"use strict";

window.addEventListener("load", start);

const images =["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];
const CARDS_ON_BOARD = 20;
let selectedCard = null;

function start() {
    initializeCards();
    makeCardsClickable();
}

function initializeCards(){
    const numbers = [];

    for(let i = 0; i < CARDS_ON_BOARD/2; i++){
        numbers[i] = i;
        numbers[i + CARDS_ON_BOARD/2] = i;
    }

    console.log(numbers);

    const cards = [];
    while (numbers.length > 0) {
        const random = Math.floor(Math.random() * numbers.length);
        cards.push(numbers[random]);
        numbers.splice(random, 1);
    }
    console.log(cards);
    displayCards(cards);
}

function displayCards(cards){
    const elements = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
        element.dataset.image = cards[index];
        const image = element.querySelector("img");
        image.src = "Images/" + images[cards[index]];
    });
}

function makeCardsClickable(){
    document.querySelectorAll(".card").forEach(card =>
        card.addEventListener("click", (event) => clickCard(card)));
}

function clickCard(card){
    if(selectedCard){
        selectedCard.classList.add("selected");
        const firstCard = selectedCard;
        const secondCard = card;

        console.log("Two cards selected");
        console.log(firstCard);
        console.log(secondCard);

        if(firstCard.dataset.image == secondCard.dataset.image){
            console.log("It's a match!");
        } else {
            firstCard.classList.remove("selected");
            secondCard.classList.remove("selected");
            console.log("It's not a match!");
        }

        selectedCard = null;

    } else {
        card.classList.add("selected");
        selectedCard = card;
    }
}

