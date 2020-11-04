import React from 'react';
import './App.css';
import SportCard from './components/SportCard';

function App() {
  return (
    <div className="App">
      <SportCard
        sportName="soccer"
        image="https://www.foot-national.com/content/photos/700/20180604iconsport_icon_fir_141117_230_108.jpg"
      />
      <SportCard
        sportName="tennis"
        image="https://img.20mn.fr/XfPv6TjzTvecHsTk0v9r-Q/830x532_reprise-tennis-reste-suspens.jpg"
      />
    </div>
  );
}

export default App;
