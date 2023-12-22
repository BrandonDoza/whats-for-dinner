// query selectors
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var desertRadio = document.querySelector('#desert');
// may not need querySelectorAll
var radios = document.querySelectorAll('input[name="food"]');
var letsCookBtn = document.querySelector('.lets-cook');
var addRecipeBtn = document.querySelector('button');
var outputContainer = document.querySelector('.output');

//event listeners

letsCookBtn.addEventListener('click', randomFunction);
sideRadio.addEventListener('change', randomSide);
mainRadio.addEventListener('change', randomMain);
desertRadio.addEventListener('change', randomDesert);


// Foods
var sides = [
    'French Fries', 'Mashed Potatoes', 'Green Beans',
    'Broccoli', 'Sweet Potatoes', 'Sweet Corn', 'Spanish Rice',
    'Brussels Sprouts', 'Garlic Bread', 'Baked Potato', 'Mac N\' Cheese',
    'Cole Slaw', 'Baked Beans'
]

var mains = [
    'New York Strip', 'Grilled Chicken', 'Salmon Filet', 'Elk Medallions',
    'Halibut', 'Bratwurst', 'BBQ Shrimp', 'Lamb Kabab', 'Grilled Tofu', 
    'Turkey Burger', 'Fried Chicken', 'Pork Chops', 'Beer Batered Cod'
]

var deserts = [
    'Pumpkin Pie', 'Strawberry Shortcake', 'Vanilla Ice Cream',
    'Chocolate Cake', 'Banana Pudding', 'Chocolate Chip Cookies',
    'Apple Pie', 'Brownies', 'Pistachio Ice Cream', 'Popcorn', 
    'Skittles', 'Donuts', 'Cherry Pie'
]

// functions
function randomSide(sides) {
    var i =  Math.floor(Math.random() * (sides.length));
   return sides[i]
}

function randomMain(mains) {
    var i = Math.floor(Math.random() * (mains.length));
    return mains[i]
}

function randomDesert (deserts) {
    var i = Math.floor(Math.random() * (deserts.length));
    return deserts[i]
}

// function entireMeal ()

// I need a function that will give the output of the selected radio
// button whe the lets cook button is clicked. 
function output (randomFunction) {

}