export default function countWords(string) {
  const regExp = /\S+/gi;
  const wordsRaw = string.toLowerCase().match(regExp);
  const words = wordsRaw.map((word) => word.replace(/[.,/#!$%^&*;:{}=\-_`'´~()?]/g, '')).filter((word) => word.length > 0);
  const count = {};

  // eslint-disable-next-line no-unused-expressions
  words.forEach((word) => { !count[word] ? count[word] = 1 : count[word] += 1; });

  return count;
}
