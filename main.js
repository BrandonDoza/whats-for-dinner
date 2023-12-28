// query selectors
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var desertRadio = document.querySelector('#desert');
var entireMealRadio = document.querySelector('#entire-meal')
var letsCookBtn = document.querySelector('.lets-cook');
var outputContainer = document.querySelector('.output');
// var clearButton = document.querySelector('#clear');

// variables to store the default state of radio/clear button(s)
var isSideChecked = false;
var isMainChecked = false;
var isDesertChecked = false;
var isEntireChecked = false;
// clearButton.classList.add('hidden');
// clearButton.style.visibility = 'hidden';

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
entireMealRadio.addEventListener('change', function() {
    isEntireChecked = entireMealRadio.checked;
})
letsCookBtn.addEventListener('click', function() {
    if (isSideChecked || isMainChecked || isDesertChecked || isEntireChecked) {
        if (isSideChecked) {
            var side = randomSide();
            outputValue(side);
        } else if (isMainChecked) {
            var main = randomMain();
            outputValue(main);
        } else if (isDesertChecked) {
            var desert = randomDesert();
            outputValue(desert);
        } else if (isEntireChecked) {
            var entire = entireMeal();
            outputValue(entire);
        } 
        sideRadio.checked = false;
        mainRadio.checked = false;
        desertRadio.checked = false;
        entireMealRadio.checked = false;
        isSideChecked = false;
        isMainChecked = false;
        isDesertChecked = false;
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
    clearButton.style.width = '75px';
    clearButton.style.marginTop = '100px';
    clearButton.style.borderRadius = '5px';
    clearButton.style.backgroundColor = '#95a5a6';
    clearButton.style.color = 'white'
        // clearButton.classList.remove('hidden');
        // clearButton.style.visibility = 'visible';
    } else {
        alert("Choose One Please!");
        // clearButton.classList.add('hidden');
        // clearButton.style.visibility = 'hidden';
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

var deserts = [
    'Pumpkin Pie', 'Strawberry Shortcake', 'Vanilla Ice Cream',
    'Chocolate Cake', 'Banana Pudding', 'Chocolate Chip Cookies',
    'Apple Pie', 'Brownies', 'Pistachio Ice Cream', 'Popcorn', 
    'Skittles', 'Donuts', 'Cherry Pie'
]

// functions
function outputValue(food) {
    if (isSideChecked || isMainChecked || isDesertChecked) {
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

function randomDesert() {
    var randDesert = getRandomFood(deserts);
    return randDesert;
}

function entireMeal () {
    var randMain = randomMain();
    var randSide = randomSide(); 
    var randDesert = randomDesert();
    return `${randMain} with a side of<br>${randSide}, and<br>${randDesert} for desert`
}

// console.log('Before:', isSideChecked, clearButton.style.display);

// Set the display property to 'none' or 'block' as needed

// console.log('After:', isSideChecked, clearButton.style.display);

// console.log("isSideChecked:", isSideChecked);
// console.log("clearButton.style.display:", clearButton.style.display);

// function clearButton() {
//     if (isSideChecked || isMainChecked || isDesertChecked || isEntireChecked) {
//         return clearButton.hidden = false;
//     }
// }

// function for clear button
// function clearButton() {
//     var newButton = document.createElement('button');
//     newButton.id = 'newButton';
//     newButton.textContent = 'Click Me';
//     newButton.addEventListener('click', function() {
//       alert('Button Clicked!');
//     });
// }



// function entireMeal (mains, sides, deserts) {
//     var randMain = getRandomFood(mains);
//     var randSide = getRandomFood(sides); 
//     var randDesert = getRandomFood(deserts);
//     return `${randMain}, ${randSide}, ${randDesert}`
// }

// I need a function that will give the output of the selected radio
// button whe the lets cook button is clicked. 
// function getRandomFood() {
//     // var rando = randomDesert();
//     alert('This is what we found:' + randomDesert());
// }
// if (isSideChecked || isMainChecked || isDesertChecked) {

  // var clearButton = document.createElement('button');
    // clearButton.id = 'clearButton';
    // clearButton.textContent = 'Clear';
    // clearButton.addEventListener('click', function() {
    //     outputContainer.innerHTML = '<img src="./assets/cookpot.svg" alt="cookpot image">';
    //     clearButton.style.display = 'none';
    // });
    // outputContainer.appendChild(clearButton);
    // clearButton.style.display = 'block';
    // clearButton.style.margin = 10;