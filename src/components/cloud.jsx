import React from 'react';
import './cloud.css';
import { connect } from 'react-redux';
import { createCloud, svgDataURL, downloadAsPng } from '../utils/svgToPng';

function Cloud({ cloud, toggleDisplay }) {
  const svg = createCloud(cloud);
  const xml = svgDataURL(svg);
  const download = () => downloadAsPng(xml);

  return (
    <div>
      <section className="ordsky">
        <img src={xml} alt="ordsky" className="ordsky__img" />
      </section>
      <div className="flex-container">
        <button type="button" onClick={download} className="button button--secondary">Last ned som png</button>
        <button type="button" onClick={toggleDisplay} className="button">Ny ordsky</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ clouds }) => ({
  cloud: clouds[clouds.length - 1],
});

export default connect(mapStateToProps)(Cloud);
