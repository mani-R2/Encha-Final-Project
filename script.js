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

//Contact form
const contactForm = document.getElementById('contactForm');

const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const comments = document.getElementById('comments');
const contactMethods = document.getElementById('contactMethod');

const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const commentsError = document.getElementById('commentsError');
const contactError = document.getElementById('contactError');

const successMessage = document.getElementById('formSuccess');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    let isValid = true;
    let preferredContact = "";

    if (fullName.value.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (comments.value.trim() === "") {
        commentsError.textContent = "Please include a comment or question.";
        isValid = false;
    }
    
    for (let i = 0; i < contactMethods.length; i++) {
        if (contactMethods[i].checked) {
            preferredContact = contactMethods[i].value;
        }
    }

    if (preferredContact === "") {
        contactError.textContent = "Please select a contact method.";
        isValid = false;
    }else if (preferredContact === "phone") {
        if (!phonePattern.test(phone.value)) {
            phoneError.textContent = "Please enter a valid 10-digit phone number.";
            isValid = false;
        }
    } else if (preferredContact === "email") {
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }
    }

    if (isValid) {
        const customer = {
            name: fullName.value,
            phone: phone.value,
            email: email.value,
            comments: comments.value,
            preferredContact: preferredContact
        };

        successMessage.textContent = "Thank you, " + customer.name + "! We will contact you by " + customer.preferredContact + "soon.";

        contactForm.reset();
    }
});
