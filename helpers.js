export const shuffle = list => {
  list = list.map(i=>i);
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

export const centerText = (text, targetLength) => {
  while (text.length < targetLength) {
    text += ' ';
    if (text.length === targetLength) return text;
    text = ' ' + text;
  }
  return text;
}

export const repeatString = (string, times) => {
  let result = '';
  while (times-->0) result += string;
  return result;
}