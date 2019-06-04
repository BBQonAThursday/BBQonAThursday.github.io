window.onload = function() {
  init();
}

var xhr =new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.food.length; i++){
      newContent += "<div id=\"food-" + i + "\" class=\"food-item\">";
      newContent += "<h3 class=\"food-name " + removeWhiteSpace(responseObject.food[i].name) + "\">" + responseObject.food[i].name + "</h3>";
      newContent += "<p class=\"kcal-serving\">Calories Per Serving (" + responseObject.food[i].serving + "g)</p><p class=\"kcal\">"  + responseObject.food[i].kCal + " kcal</p>";
      newContent += "<p class=\"fats\">fat: " + responseObject.food[i].fat + "g</p>";
      newContent += "<p class=\"carbs\">carbs: " + responseObject.food[i].carbs + "g</p>";
      newContent += "<p class=\"protein\">Protein: " + responseObject.food[i].protein + "g</p>";
      newContent += "</div>";
      //console.log(responseObject.food[i].name);
    }

    document.getElementById('food-data-display').innerHTML = newContent;
  }
};

function removeWhiteSpace(stringInput) {
  this.stringInput = stringInput;
  stringInput.replace(/\s/g, "-");
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
  xhr.open('GET', '/_data/foods.json', true);
  xhr.send(null);
}




var foodClicked = document.getElementById("food-data-display");
var newFoodForm = document.getElementById("new-food-form");
var foodItems = document.getElementsByClassName("food-item");

foodClicked.addEventListener("click", function(){ 
  console.log("clicked");
  newFoodForm.classList.add("show-form");

}, false);
