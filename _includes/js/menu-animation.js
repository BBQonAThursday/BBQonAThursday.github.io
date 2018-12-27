var mobileButton = document.getElementById('menu-icon');

mobileButton.addEventListener("click", function(){
  var menuContainer = document.getElementById('navigation-display-hook');
  mobileButton.classList.toggle('menu-showing');
  menuContainer.classList.toggle('hidden-menu');
  console.log("clicked menu icon");
});