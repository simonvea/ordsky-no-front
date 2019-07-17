import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createCloud, svgDataURL, createPng } from '../utils/svgToPng';


function Cloud({ cloud, toggleDisplay }) {

  let downloadUrl;
  useEffect(() => {
    if (!cloud) return undefined;
    const cloudElement = document.querySelector('#cloud');
    const svg = createCloud(cloud);
    const xml = svgDataURL(svg);
    downloadUrl = createPng(xml, cloudElement);
  }, [cloud]);

  return (
    <div>
      <div id="cloud" style={{ height: 510, width: 510 }} />
      <button type="button" onClick={toggleDisplay} className="button">Ny ordsky</button>
    </div>
  );
}

const mapStateToProps = ({ clouds }) => ({
  cloud: clouds[clouds.length - 1],
});

export default connect(mapStateToProps)(Cloud);
