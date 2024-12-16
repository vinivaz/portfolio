// Styles
import "./Home.css";

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Redux
import { setPage } from "../../../../state/app/appSlice";

// Components
import ImageSlide from "../ImageSlide/ImageSlide";

//Database
import { postsData } from "../../Database/postsData";


const Home = () => {

  const dispatch = useDispatch()

  const posts = postsData()

  useEffect(() => {
    console.log(posts)
  },[])
  
  return (
    <div className="home_page">
      
      <div className="hero">
        {/* <img
          // src="/studio/chihiro_cropped_gif_a.gif"
          src="/studio/totoro_cropped_a.gif"
          // src="/studio/totoro_short_gif.gif"
        /> */}
        <ImageSlide
          images={[
            "/studio/pinocchio_ocean.gif",
            "/studio/pinocchio_woods.gif",
            "/studio/pinocchio_fire.gif",
            "/studio/pinocchio_beach.gif"
            // "/studio/Main-Cast-Moon.png",
            // "/studio/arcane_poster.png",
            // "/studio/piltover_overview.gif",
            // "/studio/zaun_artwork.png",
            // "/studio/jinx_fishbones.gif",
            // "/studio/arcane_jinx_blood_moon_gif.gif",
            // "/studio/ocarina_of_time_artwork.png",
            // "/studio/zelda_majoras_mask_artwork.png",
            // "studio/totoro_waiting_bus.gif",
            // "/studio/totoro_cropped_a.gif",
            // "/studio/totoro2_cropped_a.gif",
            // "/studio/chihiro_cropped_gif_a.gif"
          ]}
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
        <h4>Highlights</h4>
        <div className="cards">
        <div className="hl_card">
          <div className="card_cover">
            {/* <img src="/studio/totoro2_cropped_a.gif" alt="post image"/> */}
            <ImageSlide
              images={[
                // "/studio/Main-Cast-Moon.png",
                // "/studio/arcane_poster.png",
                // "/studio/arcane_jinx_blood_moon_gif.gif",            
                // "/studio/ocarina_of_time_artwork.png",
                // "/studio/zelda_majoras_mask_artwork.png",
                "/studio/totoro_cropped_a.gif",
                "/studio/totoro2_cropped_a.gif",
                "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
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
            <ImageSlide
              images={[
                // "/studio/Main-Cast-Moon.png",
                // "/studio/arcane_poster.png",
                // "/studio/arcane_jinx_blood_moon_gif.gif",            
                "/studio/ocarina_of_time_artwork.png",
                "/studio/zelda_majoras_mask_artwork.png",
                // "/studio/totoro_cropped_a.gif",
                // "/studio/totoro2_cropped_a.gif",
                // "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
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
            <ImageSlide
              images={[
                // "/studio/Main-Cast-Moon.png",
                "/studio/arcane_poster.png",
                "/studio/piltover_overview.gif",
                "/studio/zaun_artwork.png", 
                "/studio/arcane_jinx_blood_moon_gif.gif",          
                // "/studio/ocarina_of_time_artwork.png",
                // "/studio/zelda_majoras_mask_artwork.png",
                // "/studio/totoro_cropped_a.gif",
                // "/studio/totoro2_cropped_a.gif",
                // "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="middle_content">
        <div className="recents">
        <h4>Recents</h4>
          <div className="rc_card">
            <div className="card_cover">
              <ImageSlide
                images={[
                  // "/studio/Main-Cast-Moon.png",
                  // "/studio/arcane_poster.png",
                  // "/studio/arcane_jinx_blood_moon_gif.gif",            
                  // "/studio/ocarina_of_time_artwork.png",
                  // "/studio/zelda_majoras_mask_artwork.png",
                  "/studio/totoro_cropped_a.gif",
                  "/studio/totoro2_cropped_a.gif",
                  "/studio/chihiro_cropped_gif_a.gif"
                ]}
              />
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
            <ImageSlide
              images={[
                // "/studio/Main-Cast-Moon.png",
                // "/studio/arcane_poster.png",
                // "/studio/arcane_jinx_blood_moon_gif.gif",            
                "/studio/ocarina_of_time_artwork.png",
                "/studio/zelda_majoras_mask_artwork.png",
                // "/studio/totoro_cropped_a.gif",
                // "/studio/totoro2_cropped_a.gif",
                // "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
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
            <ImageSlide
              images={[
                // "/studio/Main-Cast-Moon.png",
                "/studio/arcane_poster.png",
                "/studio/piltover_artwork.png",
                "/studio/zaun_artwork.png",
                "/studio/jinx_fishbones.gif",
                "/studio/arcane_jinx_blood_moon_gif.gif",            
                // "/studio/ocarina_of_time_artwork.png",
                // "/studio/zelda_majoras_mask_artwork.png",
                // "/studio/totoro_cropped_a.gif",
                // "/studio/totoro2_cropped_a.gif",
                // "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
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
      <h4>More posts</h4>
      <div className="cards">
      <div className="hl_card">
          <div className="card_cover">
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/chihiro_cropped_gif_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
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
            <img src="/studio/totoro2_cropped_a.gif" alt="post image"/>
            <span className="topic">Fantasy</span>
          </div>
          <div className="card_text">
            <h3>Totam rem aperiam</h3>
            <span className="data">November 19th, 2023</span>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
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