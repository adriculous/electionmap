var makePolitician = function(name, partyColor) {

    var politician = {}; // blank object
      
      politician.partyColor = partyColor; // candidate's party color here
      
      politician.name = name; // candidate's name here
      politician.electionResults = null;
      politician.totalVotes = 0;
        
      politician.tallyTotalVotes = function() {
        this.totalVotes = 0;
        
        for(var i = 0; i < this.electionResults.length; i++) {
          this.totalVotes = this.totalVotes + this.electionResults[i];
          
        }
      }
    
      return politician;
    
  };
  
  var yona = makePolitician("Sho Yonashiro", [132, 17, 11]);
  var ren = makePolitician("Ren Kawashiri", [245, 141, 136]);
  
  console.log("Sho's color is " + yona.partyColor);
  console.log("Ren's color is " + ren.partyColor);
  
  yona.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4,
                          2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
  
  ren.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 
                         6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
  
  // Florida recount
  yona.electionResults[9] = 1;
  ren.electionResults[9] = 28;
  
  // California recount
  yona.electionResults[4] = 17;
  ren.electionResults[4] = 38;
  
  // Texas recount
  yona.electionResults[43] = 11;
  ren.electionResults[43] = 27;
  
  console.log(yona.electionResults);
  console.log(ren.electionResults);
  
  // State Results
  var setStateResults = function(state) {
    var stateInfo = document.getElementById('stateResults');
    var header = stateInfo.children[0];
    var body = stateInfo.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var can1Results = body.children[0].children[1];
    var can2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
    
      theStates[state].winner = null;
    
      if (yona.electionResults[state] > ren.electionResults[state]) {
        theStates[state].winner = yona;
      } else if (yona.electionResults[state] < ren.electionResults[state]) {
        theStates[state].winner = ren;
      }
    
    // State Colors
    var stateWinner = theStates[state].winner;
  
      if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
      } else {
        theStates[state].rgbColor = [11, 32, 57];
      }
    
    // Per state results
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  
    candidate1Name.innerText = yona.name;
    candidate2Name.innerText = ren.name;
  
    can1Results.innerText = yona.electionResults[state];
    can2Results.innerText = ren.electionResults[state];
  
    if (theStates[state].winner === null) {
      winnersName.innerText = "DRAW";
    } else {
      winnersName.innerText = theStates[state].winner.name;
      }
    };
  
  
  // Overall country results
  yona.tallyTotalVotes();
  ren.tallyTotalVotes();
  
  console.log(yona.totalVotes);
  console.log(ren.totalVotes);
  
  var winner = "???";
  
    if (yona.totalVotes > ren.totalVotes) {
      winner = yona.name;
    } else if (yona.totalVotes < ren.totalVotes) {
      winner = ren.name;
    } else {
    winner = "DRAW!";
    }
  
  console.log("AND THE WINNER IS " + winner + "!!!");
  
  var countryInfo = document.getElementById('countryResults');
  var row = countryInfo.children[0].children[0];
  
  row.children[0].innerText = yona.name;
  row.children[1].innerText = yona.totalVotes;
  row.children[2].innerText = ren.name;
  row.children[3].innerText = ren.totalVotes;
  row.children[5].innerText = winner;
    