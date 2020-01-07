var xhr = new XMLHttpRequest();
var playerDropDown = document.querySelector('.player-dropdown');
const positionDropDown = document.querySelector('.position-dropdown');
const statsOutput = document.querySelector('.stats-output');

var fullStats;

playerDropDown.addEventListener('change', function(){
  findPlayer(playerDropDown.value);
});


function findPlayer(playerName) {
  fullStats.forEach((player, i) => {
    if(playerName === fullStats[i].player) {
      var player = fullStats[i];
      console.log(player);
      for(var prop in player) {
        console.log(`${prop}: ${player[prop]}`);
        let playerStat = document.createElement('li');
        playerStat.classList.add(`${prop}`);
        playerStat.innerHTML = `${prop}: ${player[prop]}`;

        statsOutput.appendChild(playerStat);
      }
    }
  }); 
}

function getPlayerStats(player) {
  
}

xhr.onload = function() {
  if(xhr.status === 200) {
    let qb = [];
    let wr = [];
    let te = [];
    let rb = [];
    fullStats = JSON.parse(xhr.responseText);
    console.log(fullStats);
    
    for (var i = 0; i < fullStats.length; i++) {
      if (fullStats[i].position === "WR") {
        wr.push(fullStats[i]);
      }
      else if (fullStats[i].position === "QB") {
        qb.push(fullStats[i]);
      }
      else if (fullStats[i].position === "RB") {
        rb.push(fullStats[i]);
      }
      if (fullStats[i].position === "TE") {
        te.push(fullStats[i]);
      }
      // populate player dropdown
      var option = document.createElement('option');
      option.value = fullStats[i].player;
      option.innerHTML = fullStats[i].player; 
      playerDropDown.add(option);


  }



  console.log(wr);
  // document.getElementById('stats-test').innerHTML = htmlDis;
  };
}


//xhr.open('GET', '/_data/fantasy-stats-2019/receiving-stats/receiving-stats.json', true);


xhr.open('GET', '/_data/fantasy-stats-2019/full-stats-week16.json', true);
xhr.send(null);





 