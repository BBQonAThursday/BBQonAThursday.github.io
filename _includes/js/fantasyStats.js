var xhr = new XMLHttpRequest();
var playerDropDown = document.querySelector('.player-dropdown');
const positionDropDown = document.querySelector('.position-dropdown');
const statsOutput = document.querySelector('.stats-output');

var fullStats;

playerDropDown.addEventListener('change', function(){
  while (statsOutput.firstChild) {
    statsOutput.removeChild(statsOutput.firstChild);
  }
  findPlayer(playerDropDown.value);
});


function findPlayer(playerName) {
  fullStats.forEach((player, i) => {
    if(playerName === fullStats[i].player) {
      var player = fullStats[i];
      var stats;
      console.log(player);
      for(var prop in player) {
        //console.log(`${prop}: ${player[prop]}`);
        let playerStat = document.createElement('li');
        let statName = convertStatNames(prop);
        playerStat.classList.add(`${prop}`);
        playerStat.innerHTML = `${statName}: ${player[prop]}`;

        statsOutput.appendChild(playerStat);
      }
    }
  }); 
}

function convertStatNames (prop) {
  //console.log(prop);
  let friendlyName;
  switch(prop) {
    case 'rank': 
      friendlyName = "Rank";
      break;
    case 'player':
      friendlyName = "Player";
      break;
    case 'position':
      friendlyName = "Position";
      break;
    case 'games':
      friendlyName = "Games Played";
      break;
    case 'passCompletions':
      friendlyName = "Passes Completed";
      break;
    case 'passAttempts':
      friendlyName = "Passing Attempts";
      break;
    case 'passYards':
      friendlyName = "Passing Yards";
      break;
    case 'passTD':
      friendlyName = "Passing Touchdowns";
      break;
    case 'int':
      friendlyName = "Interceptions";
      break;
    case 'rushAttempts':
      friendlyName = "Rushing Attempts";
      break;
    case 'rushYards':
      friendlyName = "Rushing Yards";
      break;
    case 'rushYardsPerAttempt':
      friendlyName = "Rushing Yards Per Attempt";
      break;
    case 'rushTD':
      friendlyName = "Rushing Touchdowns";
      break;
    case 'targets':
      friendlyName = "Targets";
      break;
    case 'receptions':
      friendlyName = "Receptions";
      break;
    case 'recYds':
      friendlyName = "Reception Yards";
      break;
    case 'yardsPerRec':
      friendlyName = "Yards Per Reception";
      break;
    case 'recTD':
      friendlyName = "Receiving Touchdowns";
      break;
    case 'fumbles':
      friendlyName = "Fumbles";
      break;
    case 'fumbLost':
      friendlyName = "Fumbles Lost";
      break;
    case 'totalTD':
      friendlyName = "Total Touchdowns";
      break;
    case '2PointsMade':
      friendlyName = "2 Point Conversions Made";
      break;
    case '2PointsPass':
      friendlyName = "2 Point Conversions - Passing";
      break;
    }
    return friendlyName;
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