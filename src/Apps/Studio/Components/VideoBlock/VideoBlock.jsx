// Styles
import "./VideoBlock.jsx";

// Hooks
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// Redux
import { setDeletingBlock, setBlock } from "../../../../state/post/postSlice";

import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";


const VideoBlock = ({ block }) => {

  const [ videoIdInput, setVideoIdInput ] = useState(block.content);

  const dispatch = useDispatch();

  useEffect(() => {

    const timeout = setTimeout(() => {
      const modifiedBlock = {
        ...block,
        content: videoIdInput,
      }
      dispatch(setBlock({blockId: block.id, modifiedBlock}))
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }

  },[videoIdInput])


  return (
    <div className="block yt" id={block.id}>
      <div className="block-ctrl">
        <input
          type="text"
          className="youtube-input"
          value={videoIdInput || ""}
          placeholder="video ID"
          onChange={(e) => setVideoIdInput(e.target.value)}
        />
        <button
          onClick={() => dispatch(setDeletingBlock(block))}
        >
          &#10005;
        </button>
      </div>
        <YoutubeEmbed videoId={block.content} />
       {/*<div className="block-content youtube" id="15618181980-yt-p">

        <iframe
          className="block-content youtube"
          id="15618181980-yt"
          frameBorder="0"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Let It Happen"
          width="640"
          height="390"
          src="https://www.youtube.com/embed/NMRhx71bGo4?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3333&amp;widgetid=3"
        ></iframe>
      </div>*/}
    </div>
  );
};

export default VideoBlock;
