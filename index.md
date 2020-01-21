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

# I'm Joel Gamble

## Developer and Designer

This is a collection of my work on the web. Most of this is some sandbox projects that I bounce around working on whenever the mood strikes.

My main focus is as a web design and developer, but I also do video editing from time to time.

Lately, I've been mostly focused on expanding as a front-end developer. From a developer perspective, I've been drawn in to data visualization and manipulation which has lead me to using javascript in conjunction with CSS to build fun / interesting layouts and interfaces. I like the idea of seeing data visually and having as much control of it as possible.

Aside from Javascript, I've been slowly learning Python as a means to streamline my workflows at my job as well as my daily life. More on this to come.

### Professionally, I'm a web designer at Springs Window Fashions.

My work includes managing product ordering experiences and workflows, designing new landing pages and implementing UI features.

### Featured Projects

<section class="projects-container">
{% for project in site.projects %}
   {% if project.private == null %}
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
          </div>
      {% endif %}
    {% endfor %}
</section>
