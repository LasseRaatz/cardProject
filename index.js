import { cards } from './cards.js';
import { shuffle } from './helpers.js';
import { askDraftPick, showPlay, animateDraftCardsTurning } from './prompt.js';
import fs from 'fs';
import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const savedDecks = JSON.parse(fs.readFileSync('./saves.json'));

const deckSize = 20;

// setup game
let player = {
  g: 0,
  r: 0,
  y:0,
  trips: 0,
  combo: 0,
  stumbles: 0,
  deck: [],
  playedCards: [],
}

let finishedDraft = false;
let finishedPlay = false;
let [card1, card2, card3] = shuffle(cards);
animateDraftCardsTurning(card1, card2, card3, null, player.deck);

// draft
const handleDraft = (key) => {
  if (['1', '2', '3'].includes(key)) {
    if (key == '1') player.deck.push(card1);
    if (key == '2') player.deck.push(card2);
    if (key == '3') player.deck.push(card3);
    if (player.deck.length >= deckSize) {
      finishedDraft = true;
      savedDecks.push(player.deck.map(card => card.id));
      fs.writeFileSync('./saves.json', JSON.stringify(savedDecks));
      player.deck = shuffle(player.deck);
      console.clear();
      console.log('Draft has finished and your deck has been saved.');
      console.log('Press any key to start playing your deck');
    }
    else {
      [card1, card2, card3] = shuffle(cards);
      animateDraftCardsTurning(card1, card2, card3, key, player.deck);
    }
  }
}

// play
const handleGameplay = (key) => {
  if (player.deck.length === 0) {
    console.clear();
    console.log('Game finished with', player.stumbles, 'stumbles.');
    finishedPlay = true;
  }
  else {
    const card = player.deck.pop();
    const canPay = card.handle(player);
    player.playedCards.push(card);
    showPlay(player, card, canPay);
    if (canPay) player.combo++;
    else {
      player.trips = 0;
      player.combo = 0;
      player.stumbles++;
    }
  }
}


process.stdin.on('keypress', (key) => {
  if (!finishedDraft) handleDraft(key);
  else if (!finishedPlay) handleGameplay(key);
});



