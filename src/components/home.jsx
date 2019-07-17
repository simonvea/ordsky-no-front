import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="main-info">
        <h3>
            Velkommen til ordsky.no!
        </h3>
        <p>
          Her kan du lage en ordsky ved å lime inn en eller flere tekster.
          Alternativt så kan du legge inn en egen definert liste med ord og antall.
        </p>
      </section>
      <section className="actions">
        <Link to="/text" className="button">Ordsky fra en tekst</Link>
        <Link to="/text" className="button">Ordsky fra en liste</Link>
      </section>
    </div>
  );
}

export default Home;
