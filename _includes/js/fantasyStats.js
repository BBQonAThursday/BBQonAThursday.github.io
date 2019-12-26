var xhr = new XMLHttpRequest();
var playerDropDown = document.querySelector('.player-dropdown');

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

var playerDataStructure = {
  "player": "name",
  "position": "POS",
  "week1": {
    "location": "",
    "opponent": "opp",
    "gameResult": "",
    "targets": 0,
    "receptions": 0,
    "receivingYards": 0,
    "yardsPerReception": 0,
    "receivingTouchdowns": 0,
    "catch%": "00.0%",
    "yardsPerTarget": 0
  },
  "week2": {
    "location": "",
    "opponent": "opp",
    "gameResult": "",
    "targets": 0,
    "receptions": 0,
    "receivingYards": 0,
    "yardsPerReception": 0,
    "receivingTouchdowns": 0,
    "catch%": "00.0%",
    "yardsPerTarget": 0
  },
  "week3": {
    "location": "",
    "opponent": "opp",
    "gameResult": "",
    "targets": 0,
    "receptions": 0,
    "receivingYards": 0,
    "yardsPerReception": 0,
    "receivingTouchdowns": 0,
    "catch%": "00.0%",
    "yardsPerTarget": 0
  },
  "week4": {
    "location": "",
    "opponent": "opp",
    "gameResult": "",
    "targets": 0,
    "receptions": 0,
    "receivingYards": 0,
    "yardsPerReception": 0,
    "receivingTouchdowns": 0,
    "catch%": "00.0%",
    "yardsPerTarget": 0
  }
};



 