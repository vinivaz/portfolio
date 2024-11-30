// Styles
import "./Home.css";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setPage } from "../../../../state/app/appSlice";

const Home = () => {

  const dispatch = useDispatch()
  return (
    <div className="home_page">
      <div className="hero">
        <img
          src="/studio/totoro_cropped_a.gif"
          // src="/studio/totoro_short_gif.gif"
        />
        <div className="text">
          <span className="category">Fantasy</span>
          <h1>Dive deep into the Ghibli’s universe.</h1>
          <h3>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</h3>
          <div className="buttons">
            <button>Read it</button>
            <button
              onClick={() => dispatch(setPage({
                name: "studio_pop",
                page: "studio"
              }))}
            >
              Edit it
            </button>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
      </div>
      <div className="middle_content">
        <div className="recents">
          <div className="rc_card">
            <div className="card_cover">
              <img src="/studio/Totoro2.png" alt="post image"/>
            </div>
            <div className="card_text">
              <span className="topic">Fantasy</span>
              <h3>Totam rem aperiam</h3>
              <span className="data">November 19th, 2023</span>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
            </div>
          </div>
          <div className="rc_card">
            <div className="card_cover">
              <img src="/studio/Totoro2.png" alt="post image"/>
            </div>
            <div className="card_text">
              <span className="topic">Fantasy</span>
              <h3>Totam rem aperiam ipsam voluptas enim ipsam</h3>
              <span className="data">November 19th, 2023</span>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
            </div>
          </div>
          <div className="rc_card">
            <div className="card_cover">
              <img src="/studio/Totoro2.png" alt="post image"/>
            </div>
            <div className="card_text">
              <span className="topic">Fantasy</span>
              <h3>Totam rem aperiam ipsam voluptas enim ipsam</h3>
              <span className="data">November 19th, 2023</span>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
            </div>
          </div>
        </div>
        <div className="advertisement">
          <img
            src="/studio/ad_smartphone.svg"
            alt="advertisement"
            className="squared"
          />
          <img
            src="/studio/ad_vertical.png"
            alt="advertisement"
            className="vertical"
          />
        </div>
      </div>
      <div className="highlights">
      <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>

        <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/Totoro2.png" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
      </div>
      
      <footer>
        abubleh
      </footer>
    </div>
  )
}

export default Home