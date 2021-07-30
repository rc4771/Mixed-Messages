const teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", 
                "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham", "Wolves"];

function getMatchDay() {
    const home = teams[Math.floor(Math.random() * teams.length)];
    const away = teams[Math.floor(Math.random() * teams.length)];
    while (home === away) {
        away = teams[Math.floor(Math.random() * teams.length)];
    }
    return [home, away];
}

function getScore() {
    const homeGoals = Math.floor(Math.random() * 11);
    const awayGoals = Math.floor(Math.random() * 11);
    return [homeGoals, awayGoals];
}

console.log(getMatchDay());
console.log(getScore());