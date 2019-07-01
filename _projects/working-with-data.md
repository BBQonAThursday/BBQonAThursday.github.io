---
layout: project
title: Working with Data
post-date: 6/02/2019
brand: N/a
type: Data Science
image: /assets/img/css-grid-professionally/css-grid-implementation.png
year: 2019
preview: Playing around with importing json data and using javascript to work with it.
jsarr: 
- js/prism.js
- js/food-data.js
---
# Working with Data

6/02/19: This is currently a test with json. Below, I've imported foods.json and then looped through the object to build cards with each one. I want to add a button to add items to the json and also be able to fill out items for logging. Filtering the data would be cool as well. I should build out tags for each item though and have that data validate too.

<div class="ui-container">
<button id="add-new-item">Add New Food</button>
</div>
<div class="hidden-form" id="new-food-form">
<h3></h3>
<form class="">
  <div class="fields">
    <div class="field">
      
    </div>
    <!--<div class="field">
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div class="field">
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div class="field">
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>-->
  </div>
</form>
<div class="food-stat-output" id="food-stat-output">
  <select id="food-dropdown" name="food-item"></select>
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
</div>
</div>
<div id="food-data-display" class="food-item-container">

</div>