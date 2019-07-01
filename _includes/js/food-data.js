window.onload = function() {
  init();
}

var xhr, dropdown, defaultOption, selection, output, jsonSearch, displayItem, displayMacros;
const url = '/_data/foods.json';

xhr = new XMLHttpRequest();
dropDown = document.getElementById("food-dropdown");
selection = document.getElementById('food-dropdown');
output = document.getElementById('food-selected');

dropDown.length = 0;
defaultOption = document.createElement('option');
defaultOption.text = 'Select a Food to log';
dropDown.add(defaultOption);
dropDown.selectedIndex = 0;

displayItem = document.getElementById('display-item');
displayMacros = document.getElementById('calculate-macros');
displayItem.addEventListener('click', displaySelection, false);
displayMacros.addEventListener('click', calculateMacros, false);


xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.food.length; i++){
      newContent += "<div id=\"food-" + i + "\" class=\"food-item " + removeWhiteSpace(responseObject.food[i].name) + "\">";
      newContent += "<h3 class=\"food-name " + "\">" + responseObject.food[i].name + "</h3>";
      newContent += "<p class=\"kcal-serving\">per " + responseObject.food[i].serving + "g</p><p class=\"kcal\">"  + responseObject.food[i].kCal + " kcal</p>";
      newContent += "<p class=\"fats\">fat: " + responseObject.food[i].fat + "g</p>";
      newContent += "<p class=\"carbs\">carbs: " + responseObject.food[i].carbs + "g</p>";
      newContent += "<p class=\"protein\">Protein: " + responseObject.food[i].protein + "g</p>";
      newContent += "</div>";
      //console.log(responseObject.food[i].name);
      var option;
      console.log(responseObject.food[i].name);
      option = document.createElement('option');
      option.text = responseObject.food[i].name;
      option.value = responseObject.food[i].name;
      dropDown.add(option);
    }
    
     
    document.getElementById('food-data-display').innerHTML = newContent;
    
  }
};




function displaySelection() {
 
  jsonSearch = selection.value;
  //Displays the selection in h3 in form;
  output.textContent = selection.value;
  console.log(selection.value);

  for(var i = 0; i < responseObject.food.length; i++){
    var propCount = responseObject.food.length;
    console.log(responseObject.food[i][i]);
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

function calculateMacros(){
  var macroOutput = document.getElementById('');
}
function removeWhiteSpace(stringInput) {
  stringInput.replace(/\s/g, "-").trim();
  return stringInput;
};

function addFoodItem(name, foodType, serving, fat, carbs, dietaryFiber, sugar, protein, kCal, calg) {
    // this.name = name;
    // this.foodType = foodType;
    // this.serving = serving;
    // this.fat = fat;
    // this.carbs = carbs;
    // this.dietaryFiber = dietaryFiber;
    // this.sugar = sugars;
    // this.protein = protein;
    // this.kCal = kCal;
    // this.calg = calg;
    
    responseObject.food.push({
      name: newName,
      foodType: newFoodType,
      serving: newServing,
      fat: newFat,
      carbs: newCarbs,
      dietaryFiber: newDietaryFiber,
      sugar: newSugar,
      protein: newProtein,
      kCal: newKCal,
      calg : newCalG
    })
}

function init() {
  xhr.open('GET', url, true);
  xhr.send(null);
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

}, false);
