
// Components
import YouTube from 'react-youtube';

const YoutubeEmbed = ({ videoId }) => {

  const onPlayerReady= (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
    className="block-content youtube"
    videoId={videoId}
    opts={opts}
    onReady={onPlayerReady}
  />
  );
};

export default YoutubeEmbed 
