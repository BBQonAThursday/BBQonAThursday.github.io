var habitData = new XMLHttpRequest();
var dataUrl = '/_data/habit-tracker-oct-2019.json';

habitData.open('GET', dataUrl, true);
habitData.send(null);

habitData.onload = function() {
  if(habitData.status === 200) {
    
    var habitJSON = JSON.parse(habitData.responseText);
    var habitTracker = document.querySelector('.habit-tracker');
    
    for(i = 0; i < habitJSON.length; i++){
      var habit = habitJSON[i];
      let habitDay = habit.day;
      let hang = habit.hang;
      let ironGrip = habit.ironGrip;
      let countCalories = habit.countCalories;
      let fast = habit.fast;
      let read = habit.read;
      let runWalk = habit.runWalk;
      let development = habit.development;
      let trackSleep = habit.trackSleep;
      let weight = habit.weight;


      console.log(habitDay);
      var dayHTML = document.createElement('div');
      dayHTML.classList.add('habit');
      var habitInner = `
        <ul class="habits">
          <li class="day">${habitDay}</li>
          <li class="habit ${hang} hang">${hang}</li>
          <li class="habit ${ironGrip} ironGrip">${ironGrip}</li>
          <li class="habit ${countCalories} countCalories">${countCalories}</li>
          <li class="habit ${fast} fast">${fast}</li>
          <li class="habit ${read} read">${read}</li>
          <li class="habit ${runWalk} runWalk">${runWalk}</li>
          <li class="habit ${development} development">${development}</li>
          <li class="habit ${trackSleep} trackSleep">${trackSleep}</li>
        </ul>
      `;
      dayHTML.innerHTML = habitInner;
      habitTracker.appendChild(dayHTML);
     
    }
  
  }
};