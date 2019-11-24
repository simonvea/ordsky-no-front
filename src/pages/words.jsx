import React from 'react';
import { connect } from 'react-redux';
import Visualization from '../components/visualization';
import TextForm from '../components/form';
import {
  startCountAction, finishCountAction, textErrorAction,
} from '../reducers/wordsReducer';

function Words({
  wordsState, startCount, finishCount,
}) {
  const interpretText = (text) => {
    const words = text.split('\n');
    const countedWords = words.map((wordPair) => {
      const [word, count] = wordPair.split(',');
      return { text: word, count: Number(count) };
    });
    return countedWords;
  };

  const handleSubmit = (text) => {
    startCount(text);
    const countedWords = interpretText(text);
    finishCount(countedWords);
    // create cloud
  };
  return (
    <div>
      {!wordsState.wordCount
        ? (
          <TextForm
            onSubmit={handleSubmit}
            loading={wordsState.loading}
            savedText={wordsState.text}
          />
        )
        : <Visualization barChartData={wordsState.wordCount} />}
    </div>
  );
}

const mapStateToProps = (state) => ({ wordsState: state.words });

const mapDispatchToProps = {
  startCount: startCountAction,
  finishCount: finishCountAction,
  textError: textErrorAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);
