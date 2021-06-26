import React, { useState, useEffect } from "react";
import { infos } from '../../data.js'
import {
  getUserInfosServiceSpotify,
  getUserInfosServiceDeezer,
  getHash,
  likePlaylistOnSpotify,
  likePlaylistOnDeezer,
} from "../../tools/index.js";
import SpotifyIFrame from "../SpotifyIFrame/index.jsx";
import DeezerIFrame from '../DeezerIFrame'
import './index.scss';

const EndState = ({ appState, setAppState }) => {
  const [hash, setHash] = useState(null)
  const [user, setUser] = useState(null)

  const requestSpotifyAuth = () => {
    let _SpotifyToken = hash.access_token;
    let _DeezerToken = hash.code;

    if (hash.state) {
      setAppState({
        ...appState,
        temps: infos[hash.state].slug,
      });
    } else if (hash.code) {
      setAppState({
        ...appState,
        temps: infos[hash.state].slug,
      });
    }

    if (_SpotifyToken) {
      getUserInfosOnSpotify(_SpotifyToken)
      likePlaylistOnSpotify(infos[appState.temps].spotify, _SpotifyToken);
    } else if (_DeezerToken) {
      getUserInfosOnDeezer(_DeezerToken);
    }
  };

  const getUserInfosOnSpotify = (_SpotifyToken) => {
    getUserInfosServiceSpotify(_SpotifyToken)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUser(res);
        setAppState({
          ...appState,
          user
        })
      })
      .catch((err) => console.log(err));
  };

  const getUserInfosOnDeezer = (_DeezerToken) => {
    console.log("getUserInfosOnDeezer");
    getUserInfosServiceDeezer(_DeezerToken)
      .then((res) => res.json())
      .then((res) => {

        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/me?access_token=${res.access_token}`
        )
          .then((_res) => _res.json())
          .then((_res) => {
            setUser(_res)

            likePlaylistOnDeezer(infos[appState.temps].spotify, res.access_token, _res.id)
              .then((_res) => _res.json())
              .then((_res) => console.log("DAB", _res))
              .catch((_err) => console.log(_err));
          })
          .catch((_err) => console.log(_err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("hash2", getHash())
      hash === null && setHash(getHash());
      hash !== null && requestSpotifyAuth();
  }, [hash])

  useEffect(() => {
    console.log("USER", user)
    user !== null && setAppState({ ...appState, user });
  }, [user]);

  if (user !== null) {
    return (
      <section className="endState">
        <p>Merci {user.display_name || user.name}, la playlist a été ajoutée à votre bibliothèque.</p>
        {
          user.display_name && (
            <SpotifyIFrame playlistId={infos[appState.temps].spotify} />
          )
        }
        {
          user.name && (
            <DeezerIFrame playlistId={infos[appState.temps].deezer} />
          )
        }
      </section>
    );
  } else return null
}

export default EndState
