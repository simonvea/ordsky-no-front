import React from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Websites from './pages/websites';
import Services from './pages/service';
import Text from './pages/text';
import Cloud from './pages/cloud';
import Words from './pages/words';

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Ordsky.no</h1>
      </header>
      <main className="main-container">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={Text} />
          <Route path="/words" component={Words} />
          <Route path="/websites" component={Websites} />
          <Route path="/services" component={Services} />
          <Route path="/cloud" component={Cloud} />
        </Router>
      </main>
      <footer className="footer" />
    </div>
  );
}

export default App;
