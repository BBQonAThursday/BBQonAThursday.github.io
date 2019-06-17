window.onload = function() {
  init();
}

const url = '/_data/foods.json';

var xhr = new XMLHttpRequest();
var dropDown = document.getElementById("food-dropdown");
dropDown.length = 0;
var defaultOption = document.createElement('option');
defaultOption.text = 'Select a Food to log';

dropDown.add(defaultOption);
dropDown.selectedIndex = 0;



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
      console.log(responseObject.food[i].name);
      option = document.createElement('option');
      option.text = responseObject.food[i].name;
      option.value = responseObject.food[i].name;
      dropDown.add(option);
    }
    
     
    document.getElementById('food-data-display').innerHTML = newContent;
    
  }
};

var displayItem = document.getElementById('display-item');
displayItem.addEventListener('click', displaySelection, false);

function displaySelection() {
  var selection = document.getElementById('food-dropdown');
  var output = document.getElementById('food-selected');
  
  var jsonSearch = selection.value;

  //Displays the selection in h3 in form;
  output.textContent = selection.value;
  console.log(selection.value);

  for(var i = 0; i < responseObject.food.length; i++){
    if(jsonSearch === responseObject.food[i].name) {
      var statContainer = document.getElementById('food-stat-output');

      //Get and Set fat Stat for Selected Item
      var fatStatItem = document.getElementById('fat');
      var fatAmount = responseObject.food[i].fat;

      //Get and Set Kcal Stat
      var kcalStatItem = document.getElementById('kcal');
      var kCalAmount = responseObject.food[i].kCal;
      

      kcalStatItem.textContent = "kCal: " + kCalAmount + "g";
      fatStatItem.textContent = "fat: " + fatAmount + "g";
      statContainer.append(statItem);
      return;
    } 
  }

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
