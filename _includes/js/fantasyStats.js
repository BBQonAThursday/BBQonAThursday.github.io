var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    var htmlDis = "";
    var recArr = responseObject.receiving;
    var week1Stats = responseObject.receiving.week1;

    
      for(var i = 0; i < week1Stats.length; i++){
        var playerName = week1Stats[i].Player;
        var targets = week1Stats[i].Tgt;
        var receptions = week1Stats[i].Rec;
        console.log(playerName);
        console.log(receptions + " / " + targets);
  
        //htmlDis += ``
      }
    

    
  }
  document.getElementById('stats-test').innerHTML = htmlDis;
};

xhr.open('GET', '/_data/fantasy-stats-2019/receiving-stats/receiving-stats.json', true);
xhr.send(null);



 