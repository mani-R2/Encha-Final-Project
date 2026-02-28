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
        description: 'Versatile matcha for cooking and baking, with a rich flavor and vibrant color.',
        image: 'images/latte.jpg'
    },
    culinary: {
        name: 'Culinary Grade Matcha',
        description: 'A blend of organic matcha for a balanced flavor, perfect for lattes and smoothies.',
        image: 'images/culinary.jpg'
    }
};