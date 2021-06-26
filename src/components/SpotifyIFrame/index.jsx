import React from 'react'

const SpotifyIFrame = ({ playlistId }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${
        playlistId
      }`}
      width="100%"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default SpotifyIFrame
