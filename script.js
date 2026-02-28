"use strict";
 //light & dark mode toggle
    const toggleButton = document.getElementById('themeToggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

//Product display
const productButtons = document.querySelectorAll('.product-controls button');
const productImage = document.getElementById('productImage');
const productName = document.getElementById('productName');
const productDescription = document.getElementById('productDescription');

const products = {
    ceremonial: {
        name: 'Ceremonial Grade Matcha',
        description: 'Smooth, vibrant matcha for ideal daily rituals and mindful moments.',
        image: 'images/ceremonial.jpg'
    },
    latte: {
        name: 'Latte Grade Matcha',
        description: 'A blend of organic matcha for a balanced flavor, perfect for lattes and smoothies.',
        image: 'images/latte.jpg'
    },
    culinary: {
        name: 'Culinary Grade Matcha',
        description: 'Versatile matcha for cooking and baking, with a rich flavor and vibrant color.',
        image: 'images/culinary.jpg'
    }
};

productButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const selectedProduct = button.getAttribute('data-product');

        productImage.src = products[selectedProduct].image;
        productImage.alt = products[selectedProduct].name;
        productName.textContent = products[selectedProduct].name;
        productDescription.textContent = products[selectedProduct].description;
    });
});

//Guessing game
const gameForm = document.getElementById('gameForm');
const guessInput = document.getElementById('guessInput');
const userGuessText = document.getElementById('userGuess');
const randomNumberText = document.getElementById('randomNumber');
const gameMessage = document.getElementById('gameMessage');

gameForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userGuess = Number(guessInput.value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    userGuessText.textContent = `Your Guess: ${userGuess}`;
    randomNumberText.textContent = `Random Number: ${randomNumber}`;

    if (userGuess === randomNumber) {
        gameMessage.textContent = "Congratulations! Your matcha ritual is complete! 🍵";
        gameMessage.style.color = "green";
    } else {
        gameMessage.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
        gameMessage.style.color = "red";
    }

    gameForm.reset();
});