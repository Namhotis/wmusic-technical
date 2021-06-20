import React from 'react'
import spotifyIcon from '../../icons/spotifyIcon.png'
import deezerIcon from "../../icons/deezerIcon.png";
import './index.scss'

const redirect_uri = "http://localhost:3000/callback";
const client_id = process.env.REACT_APP_SPOTIFY_ID;

const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];

const PushBtns = ({ appState }) => {
  const authorizeUser = () => {
    window.location = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true&state=${appState.temps}`;
  }

  const addPlaylistToSpotifyLib = () => {
    fetch(
      `https://accounts.spotify.com/authorize?response_type=token&redirect_uri=https%3A%2F%2Fdeveloper.spotify.com/&client_id=774b29d4f13844c495f206cafdad9c86&scope=playlist-modify-public+playlist-modify-private&state=l5ue09&state=43`,
      {
        method: "PUT",
        headers: new Headers({
          Authorization: `Basic ${process.env.REACT_APP_SPOTIFY_ID}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: "public=false",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <section onClick={authorizeUser} className="pushBtns">
      <button className="pushBtn spotifyPushBtn">
        Découvrir votre playlist sur Spotify <img src={spotifyIcon} alt="" />
      </button>
      <button className="pushBtn deezerPushBtn">
        Découvrir votre playlist sur Deezer
        <img src={deezerIcon} alt="" />
      </button>
    </section>
  );
}

export default PushBtns
