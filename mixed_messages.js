const teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", 
                "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham", "Wolves"];

function getMatchDay() {
    const matchDay = [];
    const home = teams[Math.floor(Math.random() * teams.length)];
    const away = teams[Math.floor(Math.random() * teams.length)];
    while (home === away) {
        away = teams[Math.floor(Math.random() * teams.length)];
    }
    matchDay.push(home, away);
    return matchDay;
}

console.log(getMatchDay());