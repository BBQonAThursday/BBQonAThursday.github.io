---
layout: project
title: Fantasy Football Graphs
post-date: 10/30/2019
year: 2019
preview: STATS. Football graphs

jsarr:
  - js/fantasyStats.js
---

CSV row headings for full week stats:

player,position,passCompletions,passAttempts,passYards,passTD,int,rushAttempts,rushYards,rushYardsPerAttempt,rushTD,targets,receptions,recYds,yardsPerRec,recTD,fumbles,fumbLost,totalTD,2PointsMade,2PointsPass

rank,player,position,games,gamesStarted,passCompletions,passAttempts,passYards,passTD,int,rushAttempts,rushYards,rushYardsPerAttempt,rushTD,targets,receptions,recYds,yardsPerRec,recTD,fumbles,fumbLost,totalTD,2PointsMade,2PointsPass

only using the top 250 players from after week 16. Also using week 16 as my base for rankings and games started.

<div id="stats-test">
<select class="player-dropdown">
        <option>Select player</option>
      </select>

</div>
