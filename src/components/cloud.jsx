import React from 'react';
import { connect } from 'react-redux';
import { createCloud, svgDataURL, downloadAsPng } from '../utils/svgToPng';

function Cloud({ cloud, toggleDisplay }) {
  const buttonContainerStyle = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  };

  const svg = createCloud(cloud);
  const xml = svgDataURL(svg);
  const download = () => downloadAsPng(xml);

  return (
    <div>
      <div id="cloud" style={{ height: 510, width: 510 }}>
        <img src={xml} alt="ordsky" />
      </div>
      <div style={buttonContainerStyle}>
        <button type="button" onClick={download} className="button btn-download">Last ned som png</button>
        <button type="button" onClick={toggleDisplay} className="button">Ny ordsky</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ clouds }) => ({
  cloud: clouds[clouds.length - 1],
});

export default connect(mapStateToProps)(Cloud);
