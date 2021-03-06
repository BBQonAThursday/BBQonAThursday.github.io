---
layout: project
title: Food Tracking
class: working-with-data
post-date: 6/02/2019
brand: N/a
type: Data Science
featured: true
image: /assets/img/css-grid-professionally/css-grid-implementation.png
year: 2019
preview: Playing around with importing json data and using javascript to work with it.
jsarr:
  - js/prism.js
  - js/food-data.js
---

# Food Data and Recipe Building

6/02/19: This is currently a test with json. Below, I've imported foods.json and then looped through the object to build cards with each one. I want to add a button to add items to the json and also be able to fill out items for logging. Filtering the data would be cool as well. I should build out tags for each item though and have that data validate too.

8/29/19: I now have each input calculating the input macros. I'm working on being able to add and delete food items and HTML sections. From there, I'm going to work on having the recipe object with all the ingredients calculated together.

<section class="ui-container">
  <div class="recipe--input">
    
    <input type="text" id="recipe--name" class="input-element" placeholder="Add a name to your awesome meal" length="25">
    <h2 class="recipe--name" id="recipe--output-name">Recipe</h2>
    <div data-itemNumber="1" class="recipe--item">
      <select data-dropdown="1" class="food-dropdown">
        <option>Select an Ingredient</option>
      </select>
      <input class="recipe--quantity-input" id="recipe--item-quantity-1" placeholder="150g">
      <div class="buttons">
          <button class="food--calculate">Add to Recipe</button>
          <button class="food--delete">&times;</button>
      </div>
        <ul class="macros">
          <li data-macro="servingSize" class="macro">Serving Size: </li>
          <li data-macro="calories" class="macro">Calories: </li>
          <li data-macro="fat" class="macro">Fat: </li>
          <li data-macro="carbs" class="macro">Carb: </li>
          <li data-macro="protein" class="macro">Protein: </li>
        </ul>
    </div>
    <div data-itemNumber="2" class="recipe--item">
        <select data-dropdown="2" class="food-dropdown">
            <option>Select an Ingredient</option>
        </select>
        <input class="recipe--quantity-input" id="recipe--item-quantity-2" placeholder="100g">
        <div class="buttons">
            <button class="food--calculate">Add to Recipe</button>
            <button class="food--delete">&times;</button>
        </div>
        <ul class="macros">
          <li data-macro="servingSize" class="macro">Serving Size: </li>
          <li data-macro="calories" class="macro">Calories: </li>
          <li data-macro="fat" class="macro">Fat: </li>
          <li data-macro="carbs" class="macro">Carb: </li>
          <li data-macro="protein" class="macro">Protein: </li>
        </ul>
      </div>
  </div>
  <div class="recipe--buttons">
    <button id="add-new-item">Add New Food</button>
  </div>
  <div class="recipe--output"> 
    <div class="recipe--nutrition-label">
      
      <h3>Nutritional Information</h3>
      <div class="recipe--macros">
        <p class="macro fat--output">Fat: </p>
        <p class="macro protein--output">Protein: </p>
        <p class="macro carbs--output">Carbs: </p>
      </div>
    </div>

  </div>
</section>

<section class="food-stat-output" id="food-stat-output">
  <select id="food-dropdown" class="food-dropdown" name="food-item"></select>
  <button class="data-button" id="display-item">Load Data</button>
  <input id="food-quantity" class="input-field" placeholder="grams to log">
  <button class="data-button" id="calculate-macros">Calculate Macros</button>
  <div class="food-item--displayed">
    <h3 id="food-selected"></h3>
    <p class="stat food-item-serving" id="serving"></p>
    <p class="stat food-item-kcal" id="kcal"></p>
    <p class="stat food-item-fat" id="fat"></p>
    <p class="stat food-item-carbs" id="carbs"></p>
    <p class="stat food-item-dietary-fiber" id="dietary-fiber"></p>
    <p class="stat food-item-sugar" id="sugar"></p>
    <p class="stat food-item-protein" id="protein"></p>
  </div>
  <div class="food-item--macros">
      <p class="stat food-item-serving" id="macro-serving"></p>
      <p class="stat food-item-kcal" id="macro-kcal"></p>
      <p class="stat food-item-fat" id="macro-fat"></p>
      <p class="stat food-item-carbs" id="macro-carbs"></p>
      <p class="stat food-item-dietary-fiber" id="macro-dietary-fiber"></p>
      <p class="stat food-item-sugar" id="macro-sugar"></p>
      <p class="stat food-item-protein" id="macro-protein"></p>
  </div>
</section>
<section id="food-data-display" class="food-item-container">

</section>
