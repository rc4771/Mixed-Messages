/*
A program to predict scores of random games in the Premier League along with their betting odds.
Made by: Rafeed Choudhury
Date: 07/30/2021
*/

// The teams in the Premier League
const teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", 
                "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham", "Wolves"];

/*
Function that returns the teams of the randomly generated match fixture.
Note: The home team always comes first.
*/
function getMatchDay() {
    const home = teams[Math.floor(Math.random() * teams.length)];
    let away = teams[Math.floor(Math.random() * teams.length)];
    while (home === away) {                                      // change the away team if the away team is also the home team
        away = teams[Math.floor(Math.random() * teams.length)];
    }
    return [home, away];
}

/*
Function that generates a random score.
Score appears in the format Home - Away
*/
function getScore() {
    const homeGoals = Math.floor(Math.random() * 7);
    const awayGoals = Math.floor(Math.random() * 7);
    return [homeGoals, awayGoals];
}

/*
Function that returns randomly generated betting odd for the fixture.
*/
function getOdds() {
    const leftOdd = Math.floor(Math.random() * 11) + 1;
    const rightOdd = Math.floor(Math.random() * 11) + 1;
    return `${leftOdd}/${rightOdd}`;
}

/*
Function that returns a template string displaying the predictions with a given matchday, score and odds
*/
function getPredictions(matchDay, score, odds) {
    const homeGoals = score[0];
    const awayGoals = score[1];
    const scoreDisplay = `${homeGoals}-${awayGoals}`;
    if (homeGoals < awayGoals) {                                                              // if away team wins
        return `${matchDay[0]} to lose to ${matchDay[1]} ${scoreDisplay} at ${odds} odds.`;
    }
    else if (homeGoals > awayGoals) {                                                         // if home team wins
        return `${matchDay[0]} to beat ${matchDay[1]} ${scoreDisplay} at ${odds} odds.`;
    }
    else {                                                                                  // draw
        return `${matchDay[0]} to draw to ${matchDay[1]} ${scoreDisplay} at ${odds} odds.`;
    }
}

const matchDay = getMatchDay();
const score = getScore();
const odds = getOdds();

//Testing purposes
//console.log(matchDay);
//console.log(score);
//console.log(odds);

//Runs the program
console.log(getPredictions(matchDay, score, odds));