import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { appendCloud } from '../utils/domfunc';

function Cloud({ clouds }) {

  useEffect(() => {
    const cloud = clouds[clouds.length - 1];
    if (!cloud) return undefined;
    const cloudElement = document.querySelector('#cloud');
    appendCloud(cloud, cloudElement);
  }, [clouds]);

  return (
    <div>
      <div id="cloud" style={{ height: 510, width: 510 }} />
    </div>
  );
}

const mapStateToProps = state => ({
  clouds: state.clouds,
});

export default connect(mapStateToProps)(Cloud);
