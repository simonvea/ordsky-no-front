import React from 'react';
import { connect } from 'react-redux';
import {
  startCountAction, finishCountAction, textErrorAction, finishCloudAction,
} from '../reducers/textReducer';
import TextForm from '../components/form';
import Visualization from '../components/visualization';
import countWords from '../utils/countWords';

function Text({
  textState, startCount, finishCount,
}) {
  const handleTextOnSubmit = (data) => {
    startCount(data);
    try {
      const wordCount = countWords(data);
      finishCount(wordCount);
    } catch (err) {
      textErrorAction(err);
    }
  };
  return (
    <div>
      {!textState.wordCount
        ? (
          <TextForm
            onSubmit={handleTextOnSubmit}
            loading={textState.loading}
            savedText={textState.text}
          />
        )
        : <Visualization barChartData={textState.barChart} />}
    </div>
  );
}

const mapDispatchToProps = {
  startCount: startCountAction,
  finishCount: finishCountAction,
  textError: textErrorAction,
  finishCloud: finishCloudAction,
};

const mapStateToProps = (state) => ({ textState: state.text });

export default connect(mapStateToProps, mapDispatchToProps)(Text);
