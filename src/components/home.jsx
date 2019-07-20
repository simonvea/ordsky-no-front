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
          Her kan du lage en gratis ordsky. Ordsky generatoren er enkel å bruke.
          Alt du trenger å gjøre er å lime inn den teksten eller samlingen med ord som du ønsker å lage en ordsky av.
          Ordskyen er perfekt å bruke til presentasjoner laget i for eksempel word eller powerpoint.
        </p>
        <p>
          Start med å lage en ordsky ved å trykke på knappen under.
        </p>
      </section>
      <section style={buttonDivStyle}>
        <Link to="/text" className="button">Lag en ordsky</Link>
      </section>
    </div>
  );
}

export default Home;
