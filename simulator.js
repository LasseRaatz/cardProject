import { cards } from './cards.js';

const [,,iterations] = process.argv;

const results = {};

let i = 0;

while (i++ < iterations) {
  let player = {
    g: 0,
    r: 0,
    y: 0,
    combo: 0,
    stumbles: 0,
    deck: [],
    playedCards: [],
  }
  let j = 20;
  let playedCardIds = [];

  while (j-->0) {
    player.deck.push(Math.floor(Math.random()*cards.length));
  }
  while (player.deck.length > 0) {
    const cardIndex = player.deck.pop();
    playedCardIds.push(cardIndex);
    const canPay = cards[cardIndex].handle(player);
    if (canPay) player.combo++;
    else {
      player.combo = 0;
      player.stumbles++;
    }
  }
  if (player.stumbles <= 25) playedCardIds.forEach(id => {
    results[id] ??= [];
    results[id].push(player.stumbles);
  });
}

Object.entries(results).map(([id, stumbleList]) => {
  return { id, num: stumbleList.length, avg: stumbleList.reduce((a,c)=>a+c)/stumbleList.length };
}).sort((a,b) => a.avg - b.avg).forEach(e => console.log(e.id, e.num, e.avg));