
export function transformList(list) {
  const words = list.split('\n');
  const counts = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const wordCount of words) {
    let [word, count] = wordCount.split(',');
    word = word.trim();
    count = Number(count);
    counts[word] = count;
  }
  return counts;
}

export function checkIfList(list) {
  const words = list.map(word => Object.keys(word));
  const counts = list.map(count => Object.values(count));
  const allWords = words.every(word => word !== undefined);
  const allCounts = counts.every(count => count !== undefined);
  return allWords && allCounts;
}
