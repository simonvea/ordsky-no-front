import React from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Display from './components/display';


function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Ordsky.no</h1>
      </header>
      <main className="main-container">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={Display} />
        </Router>
      </main>
      <footer className="footer" />
    </div>
  );
}

export default App;
