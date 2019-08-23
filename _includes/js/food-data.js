window.onload = function() {
  init();
}

function init() {
  xhr.open('GET', url, true);
  xhr.send(null);
}

var xhr, dropdown, defaultOption, output, jsonSearch, displayItem, displayMacros, recipeDropdowns, responseObject;
const url = '/_data/foods.json';

xhr = new XMLHttpRequest();
dropDown = document.getElementById("food-dropdown");
recipeDropdowns = document.querySelectorAll('.food-dropdown');
output = document.getElementById('food-selected');

dropDown.length = 0;
defaultOption = document.createElement('option');
defaultOption.text = 'Select a Food to log';
dropDown.add(defaultOption);
dropDown.selectedIndex = 0;

displayItem = document.getElementById('display-item');
displayMacros = document.getElementById('calculate-macros');
displayItem.addEventListener('click', displaySelection, false);


function removeWhiteSpace(stringInput) {
  stringInput.replace(/\s/g, "-").trim();
  return stringInput;
};

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.food.length; i++){
      newContent += "<div id=\"food-" + i + "\" class=\"food-item " + removeWhiteSpace(responseObject.food[i].name) + "\">";
      newContent += "<h3 class=\"food-name " + "\">" + responseObject.food[i].name + "</h3>";
      newContent += "<p class=\"kcal-serving\">Calories Per Serving (" + responseObject.food[i].serving + "g)</p><p class=\"kcal\">"  + responseObject.food[i].kCal + " kcal</p>";
      newContent += "<p class=\"fats\">fat: " + responseObject.food[i].fat + "g</p>";
      newContent += "<p class=\"carbs\">carbs: " + responseObject.food[i].carbs + "g</p>";
      newContent += "<p class=\"protein\">Protein: " + responseObject.food[i].protein + "g</p>";
      newContent += "</div>";
      //console.log(responseObject.food[i].name);
      var option;
      //console.log(responseObject.food[i].name);
      option = document.createElement('option');
      option.text = responseObject.food[i].name;
      option.value = responseObject.food[i].name;
      dropDown.add(option);
    }
    
     
    document.getElementById('food-data-display').innerHTML = newContent;
    
    buildFoodList();
  }
};

function displaySelection() {
   jsonSearch = dropDown.value;
  //Displays the selection in h3 in form;
  output.textContent = dropDown.value;
  console.log(dropDown.value);
  for(var i = 0; i < responseObject.food.length; i++){
    var propCount = responseObject.food.length;
    //console.log(responseObject.food[i][i]);
    
    if(jsonSearch === responseObject.food[i].name) {
      var statContainer = document.getElementById('food-stat-output');

      //Get and Set Kcal Stat
      var servingStatItem = document.getElementById('serving');
      var servingAmount = responseObject.food[i].serving;
      
      //Get and Set fat Stat for Selected Item
      var fatStatItem = document.getElementById('fat');
      var fatAmount = responseObject.food[i].fat;

      //Get and Set Kcal Stat
      var kcalStatItem = document.getElementById('kcal');
      var kCalAmount = responseObject.food[i].kCal;

      //building the strings for each stat
      servingStatItem.textContent = "Serving size: " + servingAmount + "g";
      kcalStatItem.textContent = "kCal: " + kCalAmount + "g";
      fatStatItem.textContent = "fat: " + fatAmount + "g";
      statContainer.append(statItem);
      return;
    } 
  }

}

function buildFoodList(){
  var foodData =  responseObject;
  recipeDropdowns.forEach(recipeDropdown => {
    for (var i = 0; i < foodData.food.length; i++){
      // console.log(foodData.food[i].name + ' added');
      var foodOption = document.createElement('option');
      foodOption.text = foodData.food[i].name;
      foodOption.value = foodData.food[i].name;
      foodOption.dataset.order = i;
      recipeDropdown.add(foodOption);
    }
  });
}

function calculateMacros(weight) {
  var parentDropdown = weight.target.parentNode;
  var dropdown = parentDropdown.firstChild;

  //getSelectedFoodData(food);
  console.log(dropdown);
  console.log(food + " " + weight + "g");
}

const ingredients = document.querySelectorAll('.food-dropdown');
const itemWeights = document.querySelectorAll('.recipe--quantity-input');
const calculateButtons = document.querySelectorAll('.food--calculate');
const macros = document.querySelectorAll('.macro');

// ingredients.forEach(ingredient => ingredient.addEventListener('change', getSelectedFoodData));
itemWeights.forEach(itemWeight => itemWeight.addEventListener('change', getItemWeight));
calculateButtons.forEach(calculateButton => calculateButton.addEventListener('click', (e) => {
  var parentNode = e.target.parentNode;
  var parentItemNumber = parentNode.getAttribute('data-itemNumber');
  var inputs = parentNode.childNodes;
  // console.log(inputs);
  var food = (inputs[1].selectedIndex) - 1;
  var weight = inputs[3].value;
  // console.log(food,weight);
  var calculatedItem = calculateItemMacros(food, weight);
  displayItemMacros(calculatedItem);
}));

// TODO create a function that updates the individually calculated marcos after hitting the add to recipe button
function displayItemMacros() {

}

function calculateItemMacros(food, weight) {
  
  this.food = food;
  this.weight = weight;
  //var parent = this.parentNode;
  //var parentDropdown = parent.getAttribute('data-dropdown');
  //console.log(food, weight);
  var foodData = getSelectedFoodData(food);
  //console.log(foodData);
  var servingSize = foodData.servingSize;

  var calculatedFoodData = {
    name : foodData.name,
    inputWeight: Number(weight),
    servingSize : servingSize,
    calcKCal : Math.round((foodData.kCal * weight) / servingSize),
    calcFat :   Math.round((foodData.fat * weight) / servingSize),
    calcProtein : Math.round((foodData.protein * weight) / servingSize),
    calcCarbs : Math.round((foodData.carbs * weight) / servingSize)
  };
  
  console.log(calculatedFoodData);
  return calculatedFoodData;
}

function getSelectedFoodData(itemIndex) {
  
  //console.log(itemIndex);
  // var selectedFood = dropdown.options[itemIndex];
  var data = responseObject.food[itemIndex];
  // console.log(data);
  var foodName = data.name;
  var selectedKCal = Math.floor(data.kCal);
  var selectedFat =  data.fat;
  var selectedCarbs = data.carbs;
  var selectedProtein = data.protein;
  var servingSize = data.servingSize;
  var macroData =  {
      name :   foodName,
      kCal : selectedKCal,
      fat: selectedFat,
      carbs: selectedCarbs,
      protein: selectedProtein,
      servingSize: servingSize
  };
  return macroData;
}

function getItemWeight() {  
  var weight = this.value;
  // console.log(this.value);
  return weight;
}

var foodClicked = document.getElementById("food-data-display");
var newFoodForm = document.getElementById("new-food-form");
var foodItems = document.getElementsByClassName("food-item");

foodClicked.addEventListener("click", function(e){ 
  var foodSelected = e.target;
  console.log(foodSelected);
  console.log(foodSelected + " was clicked");
  //var foodSelected = e.target;
  //foodSelected.classList.add(foodSelected.name);
  //newFoodForm.classList.add("show-form");

});

