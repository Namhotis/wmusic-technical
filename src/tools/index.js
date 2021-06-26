export const kelToCel = (k) => k - 273.15;

export const getUserInfosServiceSpotify = (token) => {
  return fetch(`https://api.spotify.com/v1/me`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
} 

export const getUserInfosServiceDeezer = (token) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=${process.env.REACT_APP_DEEZER_ID}&secret=${process.env.REACT_APP_DEEZER_SECRET}&code=${token}&output=json`
  );
}; 


export const getHash = () => {
  // SPOTIFY || DEEZER
  return (
    (window.location.hash ||
    window.location.search)
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {})
  );
}

export const likePlaylistOnSpotify = (playlistId, userToken) => {
  fetch(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
    method: "PUT",
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
      "Content-Length": "0",
    }),
  })
};


export const likePlaylistOnDeezer = (playlistId, userToken, userId) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/${userId}/playlists?access_token=${userToken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playlist_id: playlistId,
      }),
    }
  )
};
