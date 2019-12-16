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
<a class="project-link" href="{{ project.url | relative_url }}">View Project</a>
<div class="triangle"></div>

<!--<video class="video--hero" data- loop autoplay muted
    src="http://embed.widencdn.net/stream/sd/springswindowfashions/nzcvivfglq/18-10276-Graber-Video-Loop.mp4?u=fpq9bh"
    poster="//embed.widencdn.net/poster/640/springswindowfashions/nzcvivfglq/18-10276-Graber-Video-Loop.jpg?u=fpq9bh"
    width="100%">
</video>-->


Paragraphs can be long and dangerous. Don't go alone. This one is somewhat short. Just long enough 
to demonstrate what it looks like when a paragraph wraps lines after hitting its max length.

## Color Palette

<div id="site-colors" class="site-colors">
  <div class="style-guide-color">
    <div class="color--block c1"></div>
    <p class="color--hex"><span class="hex">HEX:</span> #d5b86f</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block c2"></div>
    <p class="color--hex"><span class="hex">HEX:</span> #485851</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block c3"></div>
    <p class="color--hex"><span class="hex">HEX:</span> #1e1e24</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block c4"></div>
    <p class="color--hex"><span class="hex">HEX:</span> #8b5752</p>
    <p class="color-usage"></p>
  </div>
  <div class="style-guide-color">
    <div class="color--block c5"></div>
    <p class="color--hex"><span class="hex">HEX:</span> #1a535c</p>
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