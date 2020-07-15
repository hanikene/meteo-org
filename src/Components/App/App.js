import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Main, Footer } from '../';
import './app.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='Body'>
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
