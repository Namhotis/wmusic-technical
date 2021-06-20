import React from 'react'
import spotifyIcon from '../../icons/spotifyIcon.png'
import deezerIcon from "../../icons/deezerIcon.png";
import './index.scss'

const PushBtns = () => {
  return (
    <section className="pushBtns">
      <a href="#" className="pushBtn spotifyPushBtn">
        Découvrir votre playlist sur Spotify <img src={spotifyIcon} alt="" />
      </a>
      <a href="#" className="pushBtn deezerPushBtn">
         Découvrir votre playlist sur Deezer
        <img src={deezerIcon} alt="" />
      </a>
    </section>
  );
}

export default PushBtns
