import React from 'react';
import { connect } from 'react-redux';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
} from 'victory';
import { textRetryAction } from '../reducers/textReducer';

function Visualization({ barChartData, textRetry }) {
  const tryAgain = () => textRetry();
  return (
    <div>
      <section className="chart">
        <h2 className="chart__title">Topp 10 ord</h2>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material} animate={{ duration: 2000, easing: 'bounce' }}>
          <VictoryAxis />
          <VictoryAxis dependentAxis tickFormat={(x) => x} />
          <VictoryBar horizontal data={barChartData} x="text" y="count" />
        </VictoryChart>
      </section>
      <button type="button" className="button button--outline" onClick={tryAgain}>Prøv igjen</button>
    </div>
  );
}

const mapDispatchToProps = {
  textRetry: textRetryAction,
};

export default connect(undefined, mapDispatchToProps)(Visualization);
