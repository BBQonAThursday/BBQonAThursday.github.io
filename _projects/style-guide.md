---
layout: project
title: Style Guide
class: style-guide
image: "/assets/img/style-guide/style-guide-colors.png"
preview: "You know what this is"
year: 2019
jsarr: 
- js/prism.js
- js/app.js
---

# Style Guide

This contains the typography styles for my site as well as the colors used and components I want to test out. Mostly, I just want a little playground page.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

[This is a link](/style-guide.md)

Paragraphs can be long and dangerous. Don't go alone. This one is somewhat short. Just long enough 
to demonstrate what it looks like when a paragraph wraps lines after hitting its max length.

<div id="site-colors" class="site-colors">
  <div class="style-guide-color brand-primary">
    <h4 class="color-name">Shallow Abyss</h4>
    <p class="color-hex">#5A2E2E</p>
  </div>
  <div class="style-guide-color brand-secondary">
    <h4 class="color-name">Glowing Eiffel Tower</h4>
    <p class="color-hex">#DFBA69</p>
  </div>
  <div class="style-guide-color brand-third">
    <h4 class="color-name">Bicycle Tyres</h4>
    <p class="color-hex">#3E4147</p>
  </div>
  <div class="style-guide-color brand-fourth">
    <h4 class="color-name">sunrise glow</h4>
    <p class="color-hex">#FFFEDF</p>
  </div>
  <div class="style-guide-color brand-dark-accent">
    <h4 class="color-name">death2</h4>
    <p class="color-hex">#2A2C31</p>
  </div>
</div>



<pre>
  Key : Value pairs for projects
  Front Matter for project pages
  <code class="language-css">
  ---
  layout: project
  type: what type of project is this? think tags
  title: Title of the page
  class: class-to-apply-to-project-container
  image: "/assets/img/xxx/xxx.png"
  description: A brief classification? Is this needed?
  preview: A preview consisting of 1 or 2 sentences.
  year: 2016
  ---
  </code>
</pre>