// Styles
import "./Home.css";

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// Redux
import { setPage } from "../../../../state/app/appSlice";
import { setPost } from "../../../../state/post/postSlice";

// Components
import ImageSlide from "../ImageSlide/ImageSlide";

//Database
import { postsData } from "../../Database/postsData";


const Home = () => {

  const dispatch = useDispatch()
  const [posts, setPosts] = useState()
  const [handlingPostClick, setHandlingPostClick] = useState()

  // const posts = postsData()

  useEffect(() => {
    setPosts(postsData().map((singlePost) => {
        singlePost.blocks.map((block, index) => {
          if(block.type == "img" && block.autoplay){
            singlePost.cover_images = [
            ...singlePost.cover_images,
            block.url
            ]
          }
        })

        return singlePost;
    }))

  },[])

  useEffect(() => {
  console.log(posts)
  },[posts])

  
  return (
    <>
      {handlingPostClick && handlingPostClick.showing ?
        (<>
          <div
            className="post_click_background"
            onClick={() => setHandlingPostClick({
              showing: false,
              post:null,
            })}
          >
          </div>
          <div className="post_click_screen">
            <div className="close_btn">
              <span
                onClick={() => setHandlingPostClick({
                  showing: false,
                  post:null,
                })}
              >&#10005;</span>
            </div>

            <span>Deseja editar ou ler essa notícia?</span>
            <div className="options">
              <button
                onClick={() => {
                  dispatch(setPost(handlingPostClick.post))
                  dispatch(setPage({
                  name: "studio_pop",
                  page: "studio"
                  }))}
                }
              >
                Editar
              </button>
              <button
                onClick={() => {
                  dispatch(setPost(handlingPostClick.post));
                  dispatch(setPage({
                    name: "studio_pop",
                    page: "post"
                  }));
                }}
              >
                Ler
              </button>
            </div>

          </div>
        </>)
        : 
        ""      
        }
      {posts && <div className="home_page">
        
        
          <div className="hero">
            <ImageSlide
              images={posts[0].cover_images}
            />
            {/*
            <ImageSlide
              images={[
                "/studio/pinocchio_ocean.gif",
                "/studio/pinocchio_woods.gif",
                "/studio/pinocchio_fire.gif",
                "/studio/pinocchio_beach.gif",
                "/studio/arcane_poster.png",
                "/studio/piltover_overview.gif",
                "/studio/zaun_artwork.png",
                "/studio/jinx_fishbones.gif",
                "/studio/arcane_jinx_blood_moon_gif.gif",
                "/studio/ocarina_of_time_artwork.png",
                "/studio/zelda_majoras_mask_artwork.png",
                "studio/totoro_waiting_bus.gif",
                "/studio/totoro_cropped_a.gif",
                "/studio/totoro2_cropped_a.gif",
                "/studio/chihiro_cropped_gif_a.gif"
              ]}
            />
            */}
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
            {posts && posts.map((post) => (
              <div
                className="hl_card"
                onClick={() => setHandlingPostClick({
                  showing: true,
                  post
                })}
              >
              <div className="card_cover">
                {post.cover_images != undefined && 
                  <ImageSlide
                  images={post.cover_images}
                />
                }
                <span className="topic">{post.topic}</span>
              </div>
              <div className="card_text">
                <h3>{post.title}</h3>
                <span className="data">{post.date}</span>
                <p>{post.subtitle}</p>
              </div>
            </div>
            ))}
            {/* <div className="hl_card">
              <div className="card_cover">
                <ImageSlide
                  images={[
                    "/studio/Main-Cast-Moon.png",
                    "/studio/arcane_poster.png",
                    "/studio/arcane_jinx_blood_moon_gif.gif",            
                    "/studio/ocarina_of_time_artwork.png",
                    "/studio/zelda_majoras_mask_artwork.png",
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
            </div> */}

            
          </div>
          
        </div>
        <div className="middle_content">
          <div className="recents">
          <h4>Recents</h4>
            <div
              className="rc_card"
              onClick={() => setHandlingPostClick({
                showing: true,
                post: posts[0]
              })}
            >
              <div className="card_cover">
                <ImageSlide
                  images={posts[0].cover_images}
                />
              </div>
              <div className="card_text">
                <span className="topic">{posts[0].topic}</span>
                <h3>{posts[0].title}</h3>
                <span className="data">{posts[0].date}</span>
                <p>{posts[0].subtitle}</p>
              </div>
            </div>
            <div
              className="rc_card"
              onClick={() => setHandlingPostClick({
                showing: true,
                post: posts[1]
              })}
            >
              <div className="card_cover">
              <ImageSlide
                images={posts[1].cover_images}
              />
              </div>
              <div className="card_text">
                <span className="topic">{posts[1].topic}</span>
                <h3>{posts[1].title}</h3>
                <span className="data">{posts[1].date}</span>
                <p>{posts[1].subtitle}</p>
              </div>
            </div>
            <div
              className="rc_card"
              onClick={() => setHandlingPostClick({
                showing: true,
                post: posts[2]
              })}
            >
              <div className="card_cover">
              <ImageSlide
                images={posts[2].cover_images}
              />
              </div>
              <div className="card_text">
                <span className="topic">{posts[2].topic}</span>
                <h3>{posts[2].title}</h3>
                <span className="data">{posts[0].date}</span>
                <p>{posts[2].subtitle}</p>
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
        {posts && posts.map((post) => (
          <div
            className="hl_card"
            onClick={() => setHandlingPostClick({
              showing: true,
              post
            })}
          >
            <div className="card_cover">
              <ImageSlide images={post.cover_images}/>
              <span className="topic">{post.topic}</span>
            </div>
            <div className="card_text">
              <h3>{post.title}</h3>
              <span className="data">November 19th, 2023</span>
              <p>{post.subtitle}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
        
        <footer>
          abubleh
        </footer>
      </div>
      }
    </>
    
  )
}

export default Home