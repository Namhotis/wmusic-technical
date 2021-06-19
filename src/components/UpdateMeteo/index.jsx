import React, { useState } from 'react'
import { infos } from '../../data'

const UpdateMeteo = ({ appState, setAppState }) => {
  const [handledInfos] = useState(Object?.entries(infos));

  const onChange = (e) => {
    setAppState({
      ...appState,
      temperature: infos[e.target.value].temperature,
      temps: infos[e.target.value].title,
      rain: infos[e.target.value].rain
    });
  }

  return (
    <section>
      <select onChange={onChange}>
        {handledInfos.map(([title]) => (
          <option value={title} key={title}>
            {title}
          </option>
        ))}
      </select>
    </section>
  );
}

export default UpdateMeteo;
