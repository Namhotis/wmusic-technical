import React from 'react'

const DeezerIFrame = ({ playlistId  }) => {
  return (
    <iframe
      title="deezer-widget"
      src={`https://widget.deezer.com/widget/auto/playlist/${playlistId}`}
      width="100%"
      height="300"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media; clipboard-write"
    ></iframe>
  );
};

export default DeezerIFrame
