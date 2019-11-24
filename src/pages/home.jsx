import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="welcome">
        <article className="welcome__text">
          <p>
            Ordsky.no er et verktøy for å lage en enkel ordsky fra tekst.
            Ordskyen gir større vekt til ord som fremkommer oftere i teksten.
          </p>
          <p>
            Ordskyen er perfekt å bruke til presentasjoner
             laget i for eksempel word eller powerpoint.
          </p>
          <p>
            Ordsky.no gir deg også muligheten til å lese gjennom nettsider
              og visualisere ordene som er på nettsidene.
          </p>
        </article>
      </section>
      <section className="flex-container">
        <Link to="/services" className="button">Kom i gang</Link>
      </section>
    </div>
  );
}

export default Home;
