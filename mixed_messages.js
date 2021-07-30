const teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", 
                "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham", "Wolves"];

function getMatchDay() {
    const home = teams[Math.floor(Math.random() * teams.length)];
    let away = teams[Math.floor(Math.random() * teams.length)];
    while (home === away) {
        away = teams[Math.floor(Math.random() * teams.length)];
    }
    return [home, away];
}

function getScore() {
    const homeGoals = Math.floor(Math.random() * 7);
    const awayGoals = Math.floor(Math.random() * 7);
    return `${homeGoals}-${awayGoals}`;
}

function getOdds() {
    const leftOdd = Math.floor(Math.random() * 11) + 1;
    const rightOdd = Math.floor(Math.random() * 11) + 1;
    return `${leftOdd}/${rightOdd}`;
}
function getPredictions(matchDay, score, odds) {
    if (score[0] < score[1]) {
        return `${matchDay[0]} to lose to ${matchDay[1]} ${score} at ${odds} odds.`;
    }
    else if (score[0] > score[1]) {
        return `${matchDay[0]} to beat ${matchDay[1]} ${score} at ${odds} odds.`;
    }
    else {
        return `${matchDay[0]} to draw to ${matchDay[1]} ${score} at ${odds} odds.`;
    }
}

const matchDay = getMatchDay();
const score = getScore();
const odds = getOdds();
console.log(matchDay);
console.log(score);
console.log(odds);
console.log(getPredictions(matchDay, score, odds));