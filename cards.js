export const cards = [
  {
    id: 0,
    costString: '🟢🟢',
    effectString: '🟢🟢',
    handle: state => {
      if (state.g >= 2) {
        return true;
      }
      state.g += 2;
      return false;
    }
  },
  {
    id: 1,
    costString: '🟢',
    effectString: '🟡',
    handle: state => {
      state.y++;
      if (state.g >= 1) {
        state.g -= 1;
        return true;
      }
      return false;
    }
  },
  {
    id: 2,
    costString: '🟢🟢🟢🟢',
    effectString: '🟢🟢🟢',
    handle: state => {
      if (state.g >= 4) {
        state.g -= 1;
        return true;
      }
      state.g += 3;
      return false;
    }
  },
  {
    id: 3,
    costString: 'Combo > 1',
    effectString: '',
    handle: state => {
      if (state.combo >= 2) {
        return true;
      }
      return false;
    }
  },
  {
    id: 4,
    costString: 'Combo > 2',
    effectString: '🟢',
    handle: state => {
      state.g++;
      if (state.combo >= 3) {
        return true;
      }
      return false;
    }
  },
  {
    id: 5,
    costString: 'Combo = 0',
    effectString: '🟢🟢🔴🔴',
    handle: state => {
      state.g += 2;
      state.r += 2;
      if (state.combo == 0) {
        return true;
      }
      return false;
    }
  },
  {
    id: 6,
    costString: '🟢🔴',
    effectString: '🟢🟢🟢',
    handle: state => {
      if (state.g >= 1 && state.r >= 1) {
        state.g += 2;
        state.r--;
        return true;
      }
      state.g += 3;
      return false;
    }
  },
  {
    id: 7,
    costString: '🟢🟢',
    effectString: '🔴🔴',
    handle: state => {
      if (state.g >= 2) {
        state.g -= 2;
        state.r += 2;
        return true;
      }
      state.r += 2;
      return false;
    }
  },
  {
    id: 8,
    costString: '🟢🟢🟢',
    effectString: '🟢 x Combo',
    handle: state => {
      if (state.g >= 3) {
        state.g -= 3;
        state.g += state.combo;
        return true;
      }
      state.g += state.combo;
      return false;
    }
  },
  {
    id: 9,
    costString: '🔴',
    effectString: '🔥Burn 2 cards🔥',
    handle: state => {
      let card = state.deck.pop();
      state.playedCards.push(card);
      card = state.deck.pop();
      state.playedCards.push(card);
      if (state.r >= 1) {
        state.r -= 1;
        return true;
      }
      return false;
    }
  },
  {
    id: 10,
    costString: '🟡',
    effectString: '🔴🔴',
    handle: state => {
      state.r += 2;
      if (state.y >= 1) {
        state.y -= 1;
        return true;
      }
      return false;
    }
  },
  {
    id: 11,
    costString: '🔴🔴🔴',
    effectString: '🔥Burn a card🔥 x Combo',
    handle: state => {
      let i = 0;
      while (i++ < state.combo) {
        const card = state.deck.pop();
        state.playedCards.push(card);
      }
      if (state.r >= 3) {
        state.r -= 3;
        return true;
      }
      return false;
    }
  },
  {
    id: 12,
    costString: '🔴',
    effectString: '🟢🟢',
    handle: state => {
      state.g += 2;
      if (state.r >= 1) {
        state.r--;
        return true;
      }
      state.r++;
      return false;
    }
  },
  {
    id: 13,
    costString: '🔴🔴',
    effectString: '🔥Burn 3 cards🔥',
    handle: state => {
      let card = state.deck.pop();
      state.playedCards.push(card);
      card = state.deck.pop();
      state.playedCards.push(card);
      card = state.deck.pop();
      state.playedCards.push(card);
      if (state.r >= 2) {
        state.r -= 2;
        return true;
      }
      return false;
    }
  },
  {
    id: 14,
    costString: '🟢🟢',
    effectString: '🟢 (+🟢🟢 if Combo > 2)',
    handle: state => {
      if (state.g >= 2) {
        state.g -= 1;
        if (state.combo >= 2) state.g += 2;
        return true;
      }
      state.g++;
      if (state.combo >= 2) state.g += 2;
      return false;
    }
  },
  {
    id: 15,
    costString: 'Combo > 2',
    effectString: '-3 Combo, 🟡',
    handle: state => {
      state.y++;
      if (state.combo >= 3) {
        state.combo -= 3;
        return true;
      }
      return false;
    }
  },
  {
    id: 16,
    costString: 'Combo = 0 / 🟡',
    effectString: '+20 Combo',
    handle: state => {
      if (state.combo == 0) {
        state.combo += 20;
        return true;
      }
      if (state.y >= 1) {
        state.combo += 20;
        state.y--;
        return true;
      }
      return false;
    }
  },
  {
    id: 17,
    costString: '',
    effectString: 'Trip!',
    handle: state => {
      if (state.trips == 0) {
        state.trips++;
        return true;
      }
      state.trips++;
      return false;
    }
  },
]