import React, { useState, useEffect } from "react";
import { infos } from '../../data.js'
import './index.scss';

const EndState = ({ appState, setAppState }) => {
  const [hash, setHash] = useState(null)
  const [user, setUser] = useState(null)

  const requestSpotifyAuth = () => {
    let _SpotifyToken = hash.access_token;
    
    console.log(infos, hash.state)

    if (hash.state) {
      setAppState({
        ...appState,
        temps: infos[hash.state].slug,
      });
    }

    if (_SpotifyToken) {
      getUserInfos(_SpotifyToken)
    }
  };

  const getUserInfos = (_SpotifyToken) => {
    fetch(`https://api.spotify.com/v1/me`, {
      headers: new Headers({
        Authorization: `Bearer ${_SpotifyToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
    .then((res) => res.json())
    .then((res) => setUser(res))
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function (initial, item) {
          if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
    }, {});

    setHash(hash)
  }, []);

  useEffect(() => {
      hash !== null && requestSpotifyAuth();
  }, [hash])

  useEffect(() => {
    console.log("user", user);
    if (user !== null) {
      setAppState({ ...appState, user })
    }
  }, [user]);

  return (
    <section className="endState">
      {user !== null && (
        <>
          <h2>
            Merci {user.display_name}, la playlist a été ajoutée à votre
            bibliothèque.
          </h2>
          <iframe
            src={`https://open.spotify.com/embed/playlist/${
              infos[appState.temps].spotify
            }`}
            width="100%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </>
      )}
    </section>
  );
}

export default EndState
