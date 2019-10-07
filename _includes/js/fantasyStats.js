var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    var htmlDis = "";
    var recData = {};
    var week1Stats = responseObject.receiving.week1;
    var week2Stats = responseObject.receiving.week2;
    var week3Stats = responseObject.receiving.week3;
    var week4Stats = responseObject.receiving.week4;
    
    
      for(var i = 0; i < week1Stats.length; i++){
        var playerName = week1Stats[i].Player;
        recData[playerName] = {};
        recData[playerName].week1 = {};
        var week1 = recData[playerName].week1;
        week1.gameLocation = week1Stats[i].Location;
        week1.gameResult = week1Stats[i].Result
        week1.opponent = week1Stats[i].Opp;
        week1.targets = week1Stats[i].Tgt;
        week1.receptions = week1Stats[i].Rec;
        week1.receivingYards = week1Stats[i].recYards;
        week1.touchdowns = week1Stats[i].TD;
        week1.yardsPerReception  = week1Stats[i].yardsPerReception
        week1.yardsPerTarget = week1Stats[i].yardsPerTarget;
        week1.catchPercent = week1Stats[i].CtchPer;
       
  
         htmlDis += `
        <div class="player">
          <h3 class="player-name">${playerName}</h3>
          <h4>Week 1</h4>
          <p>Catch Percent: ${week1.catchPercent}</p>
          <p>Yards per target: ${week1.yardsPerTarget}</p>
          <p>target/receptions: ${week1.targets} / ${week1.receptions}</p>
        </div>
        `;
      }
    
      console.log(recData);
    
  }
  document.getElementById('stats-test').innerHTML = htmlDis;
};

xhr.open('GET', '/_data/fantasy-stats-2019/receiving-stats/receiving-stats.json', true);
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



 