// Styles
import "./youtubeVideo.css"

// Components
import Window from "../Window/Window"

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Redux
import { closeApp } from "../../state/app/appSlice";
const FalseWindow1 = () => {

  const { apps } = useSelector(state => state.app);

  return (
      <Window
        app={apps["lih"]}
      >
        <div className="false_window_content">
          <iframe
            width="560"
            height="315"
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

export default FalseWindow1