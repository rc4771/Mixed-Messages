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
    return [homeGoals, awayGoals];
}

function getPredictions(matchDay, score) {
    if (score[0] < score[1]) {
        return `${matchDay[0]} to lose to ${matchDay[1]} ${score[0]}-${score[1]}`;
    }
    else if (score[0] > score[1]) {
        return `${matchDay[0]} to beat ${matchDay[1]} ${score[0]}-${score[1]}`;
    }
    else {
        return `${matchDay[0]} to draw to ${matchDay[1]} ${score[0]}-${score[1]}`;
    }
}

const matchDay = getMatchDay();
const score = getScore();
console.log(matchDay);
console.log(score);
console.log(getPredictions(matchDay, score));