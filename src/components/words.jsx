import React, { setState } from 'react';
import { Link } from 'react-router-dom';
import SingleWord from './singleWord';

function Words() {
  const [words, setWords] = setState([{ word: 0 }]);

  function handleChange(word, number) {
    const newWords = [...words];
    newWords[word] = number;
    setWords(newWords);
  }

  const addWord = () => {
    const [word]
    setWords(words.push(''));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {words.map((word, index) => {
          const text = words[index];

          return (
            <SingleWord text={text} setText={setText} name={index.toString()} key={index} />
          )

        })}
        <SingleWord />
        <div className="notification">
          {notification || null}
        </div>
        <div className="flex-container">
          <button type="button" id="new-word" className="button button--secondary">Legg til ord</button>
          <button type="submit" id="submit" className="button">Generer ordsky</button>
          <Link to="/" className="button button--outline">Til forsiden</Link>
        </div>
      </form>
    </div>
  );
}

export default Words;
