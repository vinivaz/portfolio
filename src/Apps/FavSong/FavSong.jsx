// Styles
import "./youtubeVideo.css";

// Components
import Window from "../../Components/Window/Window";

// Hooks
import { useSelector } from "react-redux";
import { useRef } from "react";

const FavSong = () => {

  const { apps } = useSelector(state => state.app);


  return (
      <Window
        app={apps["lih"]}
      >
        <div className="false_window_content">
          <iframe
            src="https://www.youtube.com/embed/NMRhx71bGo4?si=Ni1EUourSwgU7zGH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
        </div>
      </Window>
  )
}

export default FavSong