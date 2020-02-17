// The rules:
// Two teams, named "A" and "B" have 11 players each;
// players on each team are numbered from 1 to 11.
// Any player may be sent off the field by being given a red card.
// A player can also receive a yellow warning card, which is fine, but if he receives another yellow card,
// he is sent off immediately (no need for a red card in that case).
// If one of the teams has less than 7 players remaining,
// the game is stopped immediately by the referee, and the team with less than 7 players loses.
//
// A card is a string with the team's letter ('A' or 'B'),
// player's number, and card's color ('Y' or 'R') - all concatenated and capitalized.
// e.g the card 'B7Y' means player #7 from team B received a yellow card.
//
// The task:
// Given a list of cards (could be empty), return the number of remaining players
// on each team at the end of the game (as a tuple of 2 integers, team "A" first).
// If the game was terminated by the referee for insufficient number of players,
// you are to stop the game immediately, and ignore any further possible cards.
//
// If a player that has already been sent off receives another card - ignore it.

function checkTeams(cards) {
  let cardData;

  const teamA = fillTeam();
  const teamB = fillTeam();
  const amountOfPlayers = [11, 11];

  for (let i = 0; i < cards.length; i++) {
    cardData = parseCard(cards[i]);

    if (cardData.team === "A") {
      addCardToPlayer(teamA, cardData);
      amountOfPlayers[0] = calcAmountOfPlayers(teamA);
      if (amountOfPlayers[0] < 7) {
        console.log("Team A loses");
        return;
      }
    } else {
      addCardToPlayer(teamB, cardData);
      amountOfPlayers[1] = calcAmountOfPlayers(teamB);
      if (amountOfPlayers[1] < 7) {
        console.log("Team B loses");
        return;
      }
    }
  }

  console.log(cards, amountOfPlayers);

  return amountOfPlayers;
}

function fillTeam() {
  const arr = [];
  for (let i = 0; i < 11; i++) {
    arr[i] = 0;
  }
  return arr;
}

function parseCard(cardStr) {
  const [team, playerStr, color] = cardStr.split(/([0-9]+)/);
  const player = parseInt(playerStr);

  return {
    team,
    player,
    color,
  }
}

function addCardToPlayer(team, card) {
  const currentPlayer = card.player - 1;

  if (team[currentPlayer] === "Y" || team[currentPlayer] === "R") {
    team[currentPlayer] = "R";
  } else {
    team[currentPlayer] = card.color;
  }
}

function calcAmountOfPlayers(team) {
  return team.filter(value => {
    return value != "R"
  }).length;
}

checkTeams([]);
checkTeams(["A4Y", "A4Y"]);
checkTeams(["A4Y", "A4R"]);
checkTeams(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]);
checkTeams(["A4R", "A4R", "A4R"]);
checkTeams(["A4R", "A6R", "A8R", "A10R", "A11R"]);

