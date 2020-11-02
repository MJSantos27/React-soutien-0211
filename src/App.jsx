import React from 'react';
import './App.css';
import SportCard from './components/SportCard';

function App() {
  return (
    <div className="App">
      <SportCard sportName="soccer" />
      <SportCard sportName="tennis" />
    </div>
  );
}

export default App;
