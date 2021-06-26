import React, { useState } from 'react'
import './index.scss'
import { infos } from '../../data'

const UpdateMeteo = ({ appState, setAppState }) => {
  const [handledInfos] = useState(Object?.entries(infos));

  const onChange = (e) => {
    setAppState({
      ...appState,
      temperature: infos[e.target.value].temperature,
      temps: infos[e.target.value].slug,
      rain: infos[e.target.value].rain
    });
  }

  return (
    <section className="updateMeteo">
      { infos[appState.temps]?.text && <p className="text">{infos[appState.temps].text}</p>}
      <h2>Et si vous aviez le pouvoir de changer la météo ?</h2>
      <select onChange={onChange}>
        {handledInfos.map(([slug, { title }]) => {
          return (
            <option value={slug} key={slug}>
              {title}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default UpdateMeteo;
