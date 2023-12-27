// query selectors
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var desertRadio = document.querySelector('#desert');
var letsCookBtn = document.querySelector('.lets-cook');
var outputContainer = document.querySelector('#output');
// may not need querySelectorAll
// var selectedRadio = document.querySelectorAll('input[name="food"]:checked');
// var addRecipeBtn = document.querySelector('button');


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
        var side = randomSide();
        outputValue(side);
    } else if (isMainChecked) {
        var main = randomMain();
        outputValue(main);
    } else if (isDesertChecked) {
        var desert = randomDesert();
        outputValue(desert);
    } else {
        alert("you must choose one")
    }
}
});


// Variables
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

// Variables to store the checked state of radio buttons
var isSideChecked = false;
var isMainChecked = false;
var isDesertChecked = false;

// functions
function outputValue(food) {
    outputContainer.innerHTML = `You Should Make ${food}`;
    // outputContainer.innerHTML += '<img src="./assets/selected_image.jpg" alt="selected image">';
}

function getRandomFood(array) {
    var i =  Math.floor(Math.random() * (array.length));
    return array[i];
}
function randomSide() {
    var randSide = getRandomFood(sides);
    return randSide;
}

function randomMain() {
    var randMain = getRandomFood(mains);
    return randMain;
}

function randomDesert() {
    var randDesert = getRandomFood(deserts);
    return randDesert;
}

// function entireMeal ()

// I need a function that will give the output of the selected radio
// button whe the lets cook button is clicked. 
// function getRandomFood() {
//     // var rando = randomDesert();
//     alert('This is what we found:' + randomDesert());
// }