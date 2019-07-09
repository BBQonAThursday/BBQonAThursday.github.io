---
layout: project
title: Data building UI
post-date: 7/1/2019
year: 2019
preview: creating JSON data from user input
jsarr: 
- js/prism.js
- js/data-builder.js
---

# Building JSON files
<section class="data-ui">
  <h5 class="brand-ui" id="brand-ui"></h5>

</section>


#### Select your brand
<select id="selector--brand" class="selector--brand">
<option value="graber">Graber</option>
<option value="budget-blinds">Budget Blinds</option>
<option value="jcp-custom-dec">JCP Custom Dec</option>
</select>

#### Select the Product Guide
<select id="selector--product-guide">
</select>

#### Document Sections
<section class="build-document-sections">
  <input class="" id="" placeholder="i.e. Features, Size Considerations, etc.">
  <table class="article-data" id="">
  <tr class="table-headings">
    <th class="heading--title">Article Title</th>
    <th class="heading--start-page">Start Page</th>
    <th class="heading--end-page">End Page</th>
  </tr>
    <tr class="article">
      <td class="article--title" contenteditable="true">Joel</td>
      <td class="article--start-page" contenteditable="true">20</td>
      <td class="article--end-page" contenteditable="true">20</td>
    </tr>
    <tr class="article">
    <td class="article--title" contenteditable="true">Joel</td>
    <td class="article--start-page" contenteditable="true">20</td>
    <td class="article--end-page" contenteditable="true">20</td>
    </tr>
  </table>
  <button class="" id="">add new article</button>
</section>


### Build out Section Data
<section class="build-section-data" id="build-section-data">
  <div class="ui-element">
    <label>TOC start page?</label>
    <input id="toc--start-page">
  </div>
  <div class="ui-element">
    <label>What is the last page from the TOC?</label>
    <input id="toc-end-page">
  </div>
</section>


