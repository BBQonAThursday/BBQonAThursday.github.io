var xhr =new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.food.length; i++){
      newContent += "<div id=\"food-" + i + "\" class=\"food-item\">";
      newContent += "<div class=\"food-name\"><h3>" + responseObject.food[i].name + "</h3></div>";
      newContent += "<div class=\"kcal-serving\"> <p>Calories Per Serving (" + responseObject.food[i].serving + "g)</p><h4 class=\"kcal\">"  + responseObject.food[i].kCal + " kcal</h4></div>";
      newContent += "<div class=\"fats\"><h5>fat: " + responseObject.food[i].fat + "g</h5></div>";
      newContent += "<div class=\"fats\"><h5>carbs: " + responseObject.food[i].carbs + "g</h5></div>";
      newContent += "<div class=\"fats\"><h5>Protein: " + responseObject.food[i].protein + "g</h5></div>";
      newContent += "</div>";
      console.log(responseObject.food[i].name);
    }

    document.getElementById('food-data-display').innerHTML = newContent;
  }
};

function addFoodItem(name, foodType, serving, fat, carbs, dietaryFiber, sugar, protein, kCal, calg) {
    this.name = name;
    this.foodType = foodType;
    this.serving = serving;
    this.fat = fat;
    this.carbs = carbs;
    this.dietaryFiber = dietaryFiber;
    this.sugar = sugars;
    this.protein = protein;
    this.kCal = kCal;
    this.calg = calg;
    
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

window.onload = function() {
  init();
}

