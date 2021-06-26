import React from 'react'
import spotifyIcon from '../../icons/spotifyIcon.png'
import deezerIcon from "../../icons/deezerIcon.png";
import './index.scss'

const redirect_uri = process.env.REACT_APP_ROOT_URL + "callback/";
const client_id = process.env.REACT_APP_SPOTIFY_ID;

const SpotifyAuthEndpoint = "https://accounts.spotify.com/authorize";
const DeezerAuthEndpoint = "https://connect.deezer.com/oauth/auth.php?";

const scopes = ["playlist-modify-private", "playlist-modify-public"];

const PushBtns = ({ appState }) => {
  return (
    <section className="pushBtns">
      <a
        href={`${SpotifyAuthEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true&state=${appState.temps}`}
        className="pushBtn spotifyPushBtn"
      >
        Liker la playlist sur Spotify <img src={spotifyIcon} alt="" />
      </a>
      <a
        href={`${DeezerAuthEndpoint}app_id=${process.env.REACT_APP_DEEZER_ID}&redirect_uri=${redirect_uri}&perms=basic_access,email,manage_library&state=${appState.temps}`}
        className="pushBtn deezerPushBtn"
      >
        Liker la playlist sur Deezer
        <img src={deezerIcon} alt="" />
      </a>
    </section>
  );
}

export default PushBtns
