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

[This is a hovered link](/style-guide.md){: .hovered--link }

<button class="button">Click Me</button>
<button class="button--hovered">Hovered</button>
<div class="triangle"></div>


Paragraphs can be long and dangerous. Don't go alone. This one is somewhat short. Just long enough 
to demonstrate what it looks like when a paragraph wraps lines after hitting its max length.

## Color Palette

<div id="site-colors" class="site-colors">
  <div class="style-guide-color">
    <div class="color--block brand-primary"></div>
    <p class="color--variable">$brand-primary</p>
    <p class="color--hex"><span class="hex">HEX:</span> #5A2E2E</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block brand-secondary"></div>
    <p class="color--variable">$brand-secondary</p>
    <p class="color--hex"><span class="hex">HEX:</span> #DFBA69</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block brand-third"></div>
    <p class="color--variable">$brand-third</p>
    <p class="color--hex"><span class="hex">HEX:</span> #3E4147</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block brand-fourth"></div>
    <p class="color--variable">$brand-fourth</p>
    <p class="color--hex"><span class="hex">HEX:</span> #FFFEDF</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block brand-dark-accent"></div>
    <p class="color--variable">$brand-dark-accent</p>
    <p class="color--hex"><span class="hex">HEX:</span> #2A2C31</p>
    <p class="color-usage"></p>
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