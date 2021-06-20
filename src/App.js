import React, { useState } from 'react'
import MeteoDisplay from './components/MeteoDisplay';
import UpdateMeteo from './components/UpdateMeteo';
import Header from './components/Header'
import PushBtns from './components/PushBtns';
import './App.scss';

function App() {
  const [appState, setAppState] = useState({
    temperature: null,
    spotifyId: null,
    deezerId: null
  })

  return (
    <div className="App">
      <Header />
      <div className="flex row">
        <MeteoDisplay appState={appState} setAppState={setAppState} />
        <div className="flex column rightPart">
          <UpdateMeteo appState={appState} setAppState={setAppState} />
          <PushBtns />
        </div>
      </div>
      {/* PUSH THE PLAYLIST */}
    </div>
  );
}

export default App;
