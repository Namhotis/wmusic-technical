import React, { useState } from 'react'
import MeteoDisplay from './components/MeteoDisplay';
import UpdateMeteo from './components/UpdateMeteo';
import Header from './components/Header'
import PushBtns from './components/PushBtns';
import EndState from './components/EndState'
import './App.scss';

function App() {
  const [appState, setAppState] = useState({
    temperature: null,
    spotifyId: null,
    deezerId: null,
    user: null
  })

  return (
    <div className="App">
      <Header />
      <div className="flex row">
        <MeteoDisplay appState={appState} setAppState={setAppState} />
        <div className="flex column rightPart">
          <UpdateMeteo appState={appState} setAppState={setAppState} />
          {!appState.user && <PushBtns appState={appState} />}
        </div>
      </div>
      <EndState appState={appState} setAppState={setAppState} />
      {/* PUSH THE PLAYLIST */}
    </div>
  );
}

export default App;
