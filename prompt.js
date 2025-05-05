import { centerText, repeatString } from './helpers.js';
import { cards } from './cards.js';
import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



export const askDraftPick = (card1, card2, card3, deck) => {
  console.clear();
  console.log(` ---~~~---//1\\\\---~~~---       ---~~~---//2\\\\---~~~---       ---~~~---//3\\\\---~~~--- `);
  console.log(`|${centerText(card1.costString, 23)}|     |${centerText(card2.costString, 23)}|     |${centerText(card3.costString, 23)}|`);
  console.log(`|---~~~---\\\\1//---~~~---|     |---~~~---\\\\2//---~~~---|     |---~~~---\\\\3//---~~~---|`);
  console.log(`|                       |     |                       |     |                       |`)
  console.log(`|                       |     |                       |     |                       |`)
  console.log(`|${centerText(card1.effectString, 23)}|     |${centerText(card2.effectString, 23)}|     |${centerText(card3.effectString, 23)}|`);
  console.log(`|                       |     |                       |     |                       |`)
  console.log(`|                       |     |                       |     |                       |`)
  console.log(` ---~~~---//1\\\\---~~~---       ---~~~---//2\\\\---~~~---       ---~~~---//3\\\\---~~~--- `);
  console.log();
  printDecklist(deck);
}

export const showPlay = (player, playedCard, canPay) => {
  console.clear();
  console.log('COMBO:', player.combo);
  console.log(canPay ? `\
           _____ __                  __          
  __/|_   / ___// /_________  ____ _/ /__   __/|_
 |    /   \\__ \\/ __/ ___/ _ \\/ __ \`/ //_/  |    /
/_ __|   ___/ / /_/ /  /  __/ /_/ / ,<    /_ __| 
 |/     /____/\\__/_/   \\___/\\__,_/_/|_|    |/    
                                                 
 ` : `\
    __   __   __   _____________  ____  _______  __    ______   __   __   __
   / /  / /  / /  / ___/_  __/ / / /  |/  / __ )/ /   / ____/  / /  / /  / /
  / /  / /  / /   \\__ \\ / / / / / / /|_/ / __  / /   / __/    / /  / /  / / 
 /_/  /_/  /_/   ___/ // / / /_/ / /  / / /_/ / /___/ /___   /_/  /_/  /_/  
(_)  (_)  (_)   /____//_/  \\____/_/  /_/_____/_____/_____/  (_)  (_)  (_)   
                                                                            
`)
  console.log(` ---~~~---//o\\\\---~~~--- `);
  console.log(`|${centerText(playedCard.costString, 23)}|`);
  console.log(`|---~~~---\\\\o//---~~~---|`);
  console.log(`|                       |`)
  console.log(`|                       |`)
  console.log(`|${centerText(playedCard.effectString, 23)}|`);
  console.log(`|                       |`);
  console.log(`|                       |`)
  console.log(` ---~~~---//o\\\\---~~~--- `);
  console.log(`
  Resources left:
    `);
  console.log('|', repeatString(`🟢`, player.g));
  console.log('|', repeatString(`🔴`, player.r));
  console.log('|', repeatString(`🟡`, player.y));
  console.log(player.trips > 0 ? 'Player HAS Tripped.' : 'Player has not Tripped.');
  console.log(player.deck.length, 'cards left in deck');
}

export const animateDraftCardsTurning = (card1, card2, card3, greenColoredCard, deck) => {
  const animationSpeed = 40;
  const g1 = greenColoredCard == 1;
  const g2 = greenColoredCard == 2;
  const g3 = greenColoredCard == 3;
  const frames = [
    `\
 ${g1?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m       ${g2?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m       ${g3?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
${g1?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g2?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m     ${g3?'\x1b[32m':''}|/ / / / / / / / / / / /|\x1b[0m
 ${g1?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m       ${g2?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m       ${g3?'\x1b[32m':''}---~~~---XXXXX---~~~---\x1b[0m
    `,
    `\
     ${g1?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m               ${g2?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m               ${g3?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
    ${g1?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g2?'\x1b[32m':''}|/ / // //////X/|\x1b[0m             ${g3?'\x1b[32m':''}|/ / // //////X/|\x1b[0m
     ${g1?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m               ${g2?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m               ${g3?'\x1b[32m':''}--~~--XXX--~~--\x1b[0m
    `,
    `\
         ${g1?'\x1b[32m':''}-~-X-~-\x1b[0m                       ${g2?'\x1b[32m':''}-~-X-~-\x1b[0m                       ${g3?'\x1b[32m':''}-~-X-~-\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
        ${g1?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g2?'\x1b[32m':''}|///XXXX|\x1b[0m                     ${g3?'\x1b[32m':''}|///XXXX|\x1b[0m
         ${g1?'\x1b[32m':''}-~-X-~-\x1b[0m                       ${g2?'\x1b[32m':''}-~-X-~-\x1b[0m                       ${g3?'\x1b[32m':''}-~-X-~-\x1b[0m
    `,
    `\
            K                             K                             K   
            |                             |                             |    
            K                             K                             K    
            |                             |                             |    
            |                             |                             |
            |                             |                             |
            |                             |                             |    
            |                             |                             |    
            K                             K                             K   
    `,
    `\
         -~//\\~-                       -~//\\~-                       -~//\\~-
        |:. .   |                     |:. .   |                     |:. .   |
        |--\\\\/--|                     |--\\\\/--|                     |--\\\\/--|
        |:.     |                     |:.     |                     |:.     |
        |:.     |                     |:.     |                     |:.     |
        |:. .   |                     |:. .   |                     |:. .   |
        |:.     |                     |:.     |                     |:.     |
        |:.     |                     |:.     |                     |:.     |
         -~//\\~-                       -~//\\~-                       -~//\\~-
    `,
    `\
     --~~-//X\\\\-~~--               --~~-//X\\\\-~~--               --~~-//X\\\\-~~--
    |.              |             |.              |             |.              |
    |-----\\\\X//-----|             |-----\\\\X//-----|             |-----\\\\X//-----|
    |.              |             |.              |             |.              |
    |.              |             |.              |             |.              |
    |.              |             |.              |             |.              |
    |.              |             |.              |             |.              |
    |.              |             |.              |             |.              |
     --~~--/X\\--~~--               --~~--/X\\--~~--               --~~--/X\\--~~--
    `
  ];

  frames.reverse().reduce((acc, frame) => {
    return () => {
      console.clear();
      console.log(frame);
      setTimeout(acc, animationSpeed);
    }
  }, () => askDraftPick(card1, card2, card3, deck))();
}

const printDecklist = deck => {
  console.log(deck.length, 'of 20 cards drafted');
  Object.entries(
    deck
    .map(card => card.id)
    .sort((a,b) => a - b)
    .reduce((acc, cur) => {
      acc[cur] ??= 0;
      acc[cur]++;
      return acc;
    },{})
  ).forEach(([id, n]) => console.log(n, `| ${cards[id].costString} // ${cards[id].effectString}`));
}