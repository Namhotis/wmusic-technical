import React, { useState } from 'react'
import MeteoDisplay from './components/MeteoDisplay';
import UpdateMeteo from './components/UpdateMeteo';
import './App.css';

function App() {
  const [appState, setAppState] = useState({
    temperature: null,
    spotifyId: null,
    deezerId: null
  })

  return (
    <div className="App">
      <MeteoDisplay appState={appState} setAppState={setAppState} />
      <UpdateMeteo appState={appState} setAppState={setAppState} />
    </div>
  );
}

export default App;
