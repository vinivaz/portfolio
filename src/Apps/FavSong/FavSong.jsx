// Styles
import "./youtubeVideo.css";

// Components
import Window from "../../Components/Window/Window";

// Hooks
import { useSelector } from "react-redux";
import { useRef } from "react";

const FavSong = () => {

  const { apps } = useSelector(state => state.app);

  const carouselRef = useRef(null);

  const scrollToCard = (direction) => {
    const { current } = carouselRef;

    if (current) {
      const cardWidth = current.firstChild.offsetWidth; // Largura de um card
      const visibleArea = current.offsetWidth; // Largura visível
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // Ajustar centralização após a rolagem
      setTimeout(() => {
        const scrollPos = current.scrollLeft;
        const closestCardIndex = Math.round(scrollPos / cardWidth);
        const targetScrollPos = closestCardIndex * cardWidth - (visibleArea - cardWidth) / 2;

        current.scrollTo({ left: targetScrollPos, behavior: 'smooth' });
      }, 300); // Espera o scroll inicial concluir antes de ajustar
    }
  };

  return (
      <Window
        app={apps["lih"]}
      >
        <div className="false_window_content">
          {/* <iframe
            src="https://www.youtube.com/embed/NMRhx71bGo4?si=Ni1EUourSwgU7zGH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe> */}
    <div className="carousel-container">
      <button onClick={() => scrollToCard('left')} className="scroll-button left">
        &#9664;
      </button>
      <div className="carousel" ref={carouselRef}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="card">
            Card {index + 1}
          </div>
        ))}
      </div>
      <button onClick={() => scrollToCard('right')} className="scroll-button right">
        &#9654;
      </button>
    </div>
        </div>
      </Window>
  )
}

export default FavSong