// query selectors
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#entire-meal')
var letsCookBtn = document.querySelector('.lets-cook');
var outputContainer = document.querySelector('.output');

// variables to store the default state of radio/clear button(s)
var isSideChecked = false;
var isMainChecked = false;
var isDessertChecked = false;
var isEntireChecked = false;

//event listeners
sideRadio.addEventListener('change', function() {
    isSideChecked = sideRadio.checked;
});
mainRadio.addEventListener('change', function() {
    isMainChecked = mainRadio.checked;
});
dessertRadio.addEventListener('change', function() {
    isDessertChecked = dessertRadio.checked;
});
entireMealRadio.addEventListener('change', function() {
    isEntireChecked = entireMealRadio.checked;
})
letsCookBtn.addEventListener('click', function() {
    if (isSideChecked || isMainChecked || isDessertChecked || isEntireChecked) {
        if (isSideChecked) {
            var side = randomSide();
            outputValue(side);
        } else if (isMainChecked) {
            var main = randomMain();
            outputValue(main);
        } else if (isDessertChecked) {
            var dessert = randomDessert();
            outputValue(dessert);
        } else if (isEntireChecked) {
            var entire = entireMeal();
            outputValue(entire);
        } 
        sideRadio.checked = false;
        mainRadio.checked = false;
        dessertRadio.checked = false;
        entireMealRadio.checked = false;
        isSideChecked = false;
        isMainChecked = false;
        isDessertChecked = false;
        isEntireChecked = false;
    var clearButton = document.createElement('button');
    clearButton.id = 'clearButton';
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', function() {
        outputContainer.innerHTML = '<img src="./assets/cookpot.svg" alt="cookpot image">';
        clearButton.style.display = 'none';
    });
    outputContainer.appendChild(clearButton);
    clearButton.style.display = 'block';
    clearButton.style.width = '100px';
    clearButton.style.height = '35px';
    clearButton.style.marginTop = '100px';
    clearButton.style.borderRadius = '3px';
    clearButton.style.backgroundColor = '#95a5a6';
    clearButton.style.color = 'white'
    } else {
        alert("Choose One Please!");
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
    'Turkey Burgers', 'Fried Chicken', 'Pork Chops', 'Beer Batered Cod'
]

var desserts = [
    'Pumpkin Pie', 'Strawberry Shortcake', 'Vanilla Ice Cream',
    'Chocolate Cake', 'Banana Pudding', 'Chocolate Chip Cookies',
    'Apple Pie', 'Brownies', 'Pistachio Ice Cream', 'Popcorn', 
    'Skittles', 'Donuts', 'Cherry Pie'
]

// functions
function outputValue(food) {
    if (isSideChecked || isMainChecked || isDessertChecked) {
        outputContainer.innerHTML = `<em>You Should Make:</em><br><span style="font-size: xx-large; font-weight: bold">${food}!</span>`;
    } else if (isEntireChecked) {
        outputContainer.innerHTML = `<em>You Should Make:</em><br><span style="font-size: larger; font-weight: bold; text-align: center">${food}!</span>`;
    }
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

function randomDessert() {
    var randDessert = getRandomFood(desserts);
    return randDessert;
}

function entireMeal () {
    var randMain = randomMain();
    var randSide = randomSide(); 
    var randDessert = randomDessert();
    return `${randMain} with a side of<br>${randSide}, and<br>${randDessert} for desert`
}

