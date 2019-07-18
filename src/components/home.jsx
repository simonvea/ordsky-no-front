import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <section className="main-info">
        <h3>
            Velkommen til ordsky.no!
        </h3>
        <p>
          Her kan du lage en ordsky ved å lime inn en eller flere tekster.
        </p>
      </section>
      <section style={buttonDivStyle}>
        <Link to="/text" className="button">Lag en ordsky</Link>
      </section>
    </div>
  );
}

export default Home;
