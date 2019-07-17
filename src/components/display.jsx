import React from 'react';
import { connect } from 'react-redux';
import Cloud from './cloud';
import Form from './form';

function Display({ cloud }) {
  if (cloud) {
    return (
      <Cloud />
    );
  }
  return (
    <Form />
  );
}

const mapStateToProps = state => ({
  cloud: state.clouds[state.clouds.length - 1],
});

export default connect(mapStateToProps)(Display);
