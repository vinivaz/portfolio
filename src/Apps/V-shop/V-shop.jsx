// Styles
import "./youtubeVideo.css";

// Components
import Window from "../../Components/Window/Window";

// Hooks
import { useSelector } from "react-redux";


const FavSong = () => {

  const { apps } = useSelector(state => state.app);


  return (
      <Window
        app={apps["Vshop"]}
      >
        <div className="false_window_content">
          <iframe
            // src="http://localhost:3000"
            src="https://v-shop-eight.vercel.app/"
            // title="YouTube video player"
            // frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerPolicy="strict-origin-when-cross-origin"
            // allowFullScreen
          >
          </iframe>
        </div>
      </Window>
  )
}

export default FavSong