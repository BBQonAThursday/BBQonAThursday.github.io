window.onload = function() {
  init();
}

function init() {
  xhr.open('GET', url, true);
  xhr.send(null);
}

var xhr, dropdown, defaultOption, output, jsonSearch, displayItem, displayMacros, recipeDropdowns, responseObject, recipeItemContainer;
const url = '/_data/foods.json';

recipeItemContainer = document.querySelector('.recipe--input');
recipeDropdowns = document.querySelectorAll('.food-dropdown');

xhr = new XMLHttpRequest();
dropDown = document.getElementById("food-dropdown");
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

function addNewItem() {
  var itemCount = document.querySelectorAll('.recipe--item').length;
  console.log(itemCount);
  var ingredList = document.querySelector('.recipe--input');
  var recipeItem = document.createElement('div');
  recipeItem.classList.add('recipe--item');
  recipeItem.setAttribute('data-itemNumber', itemCount + 1);
  var foodItemTemplate = `
    <select data-dropdown="${itemCount}" class="food-dropdown">
        <option>Select an Ingredient</option>
      </select>
      <input class="recipe--quantity-input" id="recipe--item-quantity-${itemCount}" placeholder="100g">
      <button class="food--calculate">Add to Recipe</button>
      <button class="food--delete">x</button>
      <ul class="macros">
        <li data-macro="servingSize" class="macro">Serving Size: </li>
        <li data-macro="calories" class="macro">Calories: </li>
        <li data-macro="fat" class="macro">Fat: </li>
        <li data-macro="carbs" class="macro">Carb: </li>
        <li data-macro="protein" class="macro">Protein: </li>
      </ul>`;
    recipeItem.innerHTML = foodItemTemplate;
ingredList.appendChild(recipeItem);
buildFoodList();
}

function removeFoodItem(e) {
  var parentItemNumber = e.target.parentNode.dataset.itemnumber;
  var parentDiv = document.querySelector('[data-itemNumber="' + `${parentItemNumber}` + '"]');
  recipeItemContainer.removeChild(parentDiv);

  
  //console.log(parentDiv);
}

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

// TODO need to add other element node lists here so that they get regenerated on add new food

function buildFoodList(){
  var foodData =  responseObject;
  var ingredDropdowns = document.querySelectorAll('.food-dropdown');
  ingredDropdowns.forEach(recipeDropdown => {
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
  var calculatedItem = calculateItemMacros(food, weight, parentNode);
  displayItemMacros(calculatedItem);
}));

// TODO create a function that updates the individually calculated marcos after hitting the add to recipe button
function displayItemMacros(calculatedItem) {
  console.table(calculatedItem);
  var itemContainers = document.querySelectorAll('.recipe--item');
  console.log(calculatedItem.inputIndex);
  var inputTarget = itemContainers[calculatedItem.inputIndex - 1];
  var outputKCal = inputTarget.querySelector('[data-macro="calories"]');
  var outputFat = inputTarget.querySelector('[data-macro="fat"]');
  var outputCarbs = inputTarget.querySelector('[data-macro="carbs"]');
  var outputProtein = inputTarget.querySelector('[data-macro="protein"]');
  var outputServingSize = inputTarget.querySelector('[data-macro="servingSize"]');
  outputKCal.textContent = "Calories: " + calculatedItem.calcKCal + "g";
  outputFat.textContent = "Fat: " + calculatedItem.calcFat + "g";
  outputCarbs.textContent = "Carbs: " + calculatedItem.calcCarbs + "g";
  outputProtein.textContent = "Protein: " + calculatedItem.calcProtein + "g";
  outputServingSize.textContent = "Serving Size: " + calculatedItem.servingSize + "g";

}

function calculateItemMacros(food, weight, elementTarget) {
  
  this.food = food;
  this.weight = weight;
  //var parent = this.parentNode;
  //var parentDropdown = parent.getAttribute('data-dropdown');
  //console.log(food, weight);
  var foodData = getSelectedFoodData(food);
  //console.log(foodData);
  var servingSize = foodData.servingSize;
  console.log(elementTarget);
  var calculatedFoodData = {
    name : foodData.name,
    inputWeight: Number(weight),
    servingSize : servingSize,
    calcKCal : Math.round((foodData.kCal * weight) / servingSize),
    calcFat :   Math.round((foodData.fat * weight) / servingSize),
    calcProtein : Math.round((foodData.protein * weight) / servingSize),
    calcCarbs : Math.round((foodData.carbs * weight) / servingSize),
    inputIndex: elementTarget.dataset.itemnumber
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
      servingSize: servingSize,
      foodIndex: itemIndex
  };
  return macroData;
}

//Get the Item Weight
function getItemWeight() {  
  var weight = this.value;
  // console.log(this.value);
  return weight;
}

var foodClicked = document.getElementById("food-data-display");
var newFoodForm = document.getElementById("new-food-form");
var foodItems = document.getElementsByClassName("food-item");
var addIngredientButton = document.getElementById('add-new-item');
const removeIngredientButtons = document.querySelectorAll('.food--delete');

removeIngredientButtons.forEach(deleteButton => deleteButton.addEventListener('click', removeFoodItem));

addIngredientButton.addEventListener("click", addNewItem);

foodClicked.addEventListener("click", function(e){ 
  var foodSelected = e.target;
  console.log(foodSelected);
  console.log(foodSelected.name + " was clicked");
  //var foodSelected = e.target;
  //foodSelected.classList.add(foodSelected.name);
  //newFoodForm.classList.add("show-form");

});

var recipeTitle = document.getElementById('recipe--name');

recipeTitle.addEventListener('change', function(){
  var newTitle = recipeTitle.value
  var recipeOutputTitle = document.getElementById('recipe--output-name');
  recipeOutputTitle.textContent = newTitle + " Recipe";
});
