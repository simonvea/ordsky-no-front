import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Display from './components/display';


function App() {
  return (
    <div>
      <header>
        <section>
          <h1>Ordsky.no</h1>
        </section>
      </header>
      <main>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={Display} />
        </Router>
      </main>
      <footer />
    </div>
  );
}

export default App;
