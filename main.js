// query selectors
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var desertRadio = document.querySelector('#desert');
var letsCookBtn = document.querySelector('.lets-cook');
// may not need querySelectorAll
// var selectedRadio = document.querySelectorAll('input[name="food"]:checked');
// var addRecipeBtn = document.querySelector('button');
// var outputContainer = document.querySelector('.output');

// variables to store the checked state of radio buttons
var isSideChecked = false;
var isMainChecked = false;
var isDesertChecked = false;

//event listeners
sideRadio.addEventListener('change', function() {
    isSideChecked = sideRadio.checked;
});
mainRadio.addEventListener('change', function() {
    isMainChecked = mainRadio.checked;
});
desertRadio.addEventListener('change', function() {
    isDesertChecked = desertRadio.checked;
});
letsCookBtn.addEventListener('click', function() {
    if (isSideChecked || isMainChecked || isDesertChecked) {
    if (isSideChecked) {
        randomSide();
    } else if (isMainChecked) {
        randomMain();
    } else if (isDesertChecked) {
        randomDesert();
    } else {
        alert("you must choose one")
    }
    }
});


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
function getRandomFood(array) {
    var i =  Math.floor(Math.random() * (array.length));
    return array[i];
}
function randomSide() {
    var randSide = getRandomFood(sides);
    alert (randSide)
}

function randomMain() {
    var randMain = getRandomFood(mains);
    alert(randMain)
}

function randomDesert() {
    var randDesert = getRandomFood(deserts);
    alert(randDesert)
}

// function entireMeal ()

// I need a function that will give the output of the selected radio
// button whe the lets cook button is clicked. 
// function getRandomFood() {
//     // var rando = randomDesert();
//     alert('This is what we found:' + randomDesert());
// }