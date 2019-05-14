---
layout: project
title: Using CSS Grid Professionally
post-date: 5/13/2019
brand: Bali Blinds
type: Web Design
---

# Using CSS Grid Professionally

## Implementing a responsive CSS Grid and supporting IE 11


Recently, I published a menu component on baliblinds.com that used CSS Grid. This happens to be my first major instance of implementing the grid layout on a large, consumer facing site.

My task was to update our menu system to include the Bali Essentials sub-menu you see below. This was originally built on bootstrap but our company is moving away from that. This allowed for a great opportunity to implement a responsive grid. The most difficult element here was supporting IE 11. 

![Final grid implementation](../assets/img/css-grid-professionally/css-grid-menu-baliblinds.png)

For reference, this site is built in Episerver. Prior to building out the grid, I needed to re-develop the Razor templates and classes to work dynamically inside of the CMS. This proved to be a challenge as I had to strip out some old bootstrap HTML and rebuild the way we populate information in the menu.

*** 

I've used it before on some page layouts for a Sharepoint site being a long in wall, but that site really is more of a playground for smaller ideas and projects

Grid has a fairly even pros/cons list for usage on the sites I work on. Is it worth doing the work to base support IE 11? Should I just use Flexbox instead and fudge it until I get it to work? How many directions am I trying to accomodate in my layout? 

Early into development, I needed to strip out the bootstrap. This was an opportunity to clean up the HTML as well as being a new layout and flow. Previously, the menu was made up of the below colors: white for the menus and a color block to the right that served as an accent to any given menu.

I needed to create a menu that could place blocks of elements horizontally while also being able to align the sub-menus horizontally inside of there.

I fussed around with flexbox to start but found that having to layer flexbox inside of flexbox would cause some extra work. The color block posed the largest issue. The way the background color was being applied within bootstrap was useful when we were using direct column widths, but when I switched to flexbox, I noticed that the color box needed to have somewhat rigid width but allow for the color to stretch outside of the container, to the end of the screen. This would have required specifically setting flexbox widths based on breakpoints and having to nest flexbox several times for the desired effect. 

From here, I decided to try out Grid. I ended up making the following grid for the outer layer of the menu and content container for margings. Grid ended up working out best for two reasons: fr units for responsiveness and the ability to have blank grid areas I can target.

![Grid Example One](../assets/img/css-grid-professionally/grid-example-layer-one.png)


