---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: main-layout
id: home
title: home
menu-item: Home
jsarr: 
- js/menu-animation.js
---
# Joel Gamble

## HTML &amp; CSS Specialist

This is a culmination of my work on the web. I also keep some of my sandbox projects here where I like to test out new features and learn. My main focus is as a web design and developer, but I also do video editing from time to time.

### Professionally, I'm a web designer at Springs Window Fashions. 

My work includes managing product ordering experiences and workflows, designing new landing pages and implementing UI features.

### Featured Projects


<section class="projects-container">
{% assign featured = site.projects %}
{% for project in featured %}
    {% if project.featured == 'true' %}
          <div class="project-card {{project.class}}">
            <div class="project-type">
              <h3 class="project-title">{{project.title}}</h3>
              <p class="project--preview">{{project.preview}}</p>
              {% comment %}
              <p class="project-category">{{project.type}}</p>
              {% if project.post-date != null %}
              <p class="project-year">{{ project.published_at | date: "%b, %y" }}</p>
              {% endif %}
              {% endcomment %}
              <a class="project-link" href="{{ project.url | relative_url }}">View Project</a>
            </div>
            <div class="overlay"></div>
            <div class="overlay--2"></div>       
          </div>
        {% endif %}
    {% endfor %}
</section>