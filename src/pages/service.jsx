import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './service.css';

export default function Service() {
  const history = useHistory();
  return (
    <section className="menu">
      <Link to="/text" className="button">Visualiser ordene i en tekst</Link>
      <Link to="/words" className="button">Lag en egendefinert ordsky </Link>
      <button type="button" className="button" disabled>Visualiser ordene fra en samling nettsider</button>
      <button type="button" className="button button--outline" onClick={() => history.goBack()}>Tilbake</button>
    </section>
  );
}
