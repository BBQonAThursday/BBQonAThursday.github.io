---
layout: project
title: Working with Data
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
# Working with Data

6/02/19: This is currently a test with json. Below, I've imported foods.json and then looped through the object to build cards with each one. I want to add a button to add items to the json and also be able to fill out items for logging. Filtering the data would be cool as well. I should build out tags for each item though and have that data validate too.

<section class="ui-container">
  <div class="recipe--input">
    
    <input type="text" id="recipe--name" class="input-element" placeholder="Add a name to your awesome meal" length="25">
    <div data-itemNumber="1" class="recipe--item">
      <select data-dropdown="1" class="food-dropdown">
        <option>Select an Ingredient</option>
      </select>
      <input class="recipe--quantity-input" id="recipe--item-quantity-1" placeholder="150g">
      <button class="food--calculate">Add to Recipe</button>
      <button class="food--delete">x</button>
        <ul class="macros">
          <li data-macro="calories" class="macro">calorie: </li>
          <li data-macro="fat" class="macro">fat: </li>
          <li data-macro="carbs" class="macro">carb: </li>
          <li data-macro="protein" class="macro">protein: </li>
          <li data-macro="servingSize" class="macro">serving size: </li>
        </ul>

    </div>
    <div data-itemNumber="2" class="recipe--item">
        <select data-dropdown="2" class="food-dropdown">
            <option>Select an Ingredient</option>
        </select>
        <input class="recipe--quantity-input" id="recipe--item-quantity-1" placeholder="100g">
        <button class="food--calculate">Add to Recipe</button>
        <button class="food--delete">x</button>
        <ul class="macros">
          <li data-macro="calories" class="macro">calorie: </li>
          <li data-macro="fat" class="macro">fat: </li>
          <li data-macro="carbs" class="macro">carb: </li>
          <li data-macro="protein" class="macro">protein: </li>
          <li data-macro="servingSize" class="macro">serving size: </li>
        </ul>
      </div>
  </div>
  <div class="recipe--buttons">
    <button id="add-new-item">Add New Food</button>
  </div>
  <div class="recipe--output">
    <h2 class="recipe--name" contenteditable="true">Recipe</h2> 
    <div class="recipe--nutrition-label">
      <ul class="macros">
        <li>Fat: </li>
        <li>Carbohydrates: 
        <ul>
          <li>Dietary Fiber: </li>
          <li>Sugar: </li>
        </ul>
        </li>
        <li>Protein: </li>
      </ul>
      <ul class="nutrition-outputs">
        <li>total kCal:
          <ul>
            <li>Grams per 4 servings:
              <ul class="macros">
                <li>Fat: </li>
                <li>Carbohydrates: 
                  <ul>
                    <li>Dietary Fiber: </li>
                    <li>Sugar: </li>
                  </ul>
                </li>
                <li>Protein: </li>
              </ul>
            </li>
            <li>Grams per 6 servings: 
              <ul class="macros">
                <li>Fat: </li>
                <li>Carbohydrates: 
                  <ul>
                    <li>Dietary Fiber: </li>
                    <li>Sugar: </li>
                  </ul>
                </li>
              <li>Protein: </li>
            </ul>

            </li>
          </ul>
      </li>
        
      </ul>
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