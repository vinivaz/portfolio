// Styles
import "./Home.css";

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Redux
import { setPage } from "../../../../state/app/appSlice";
import { setPost } from "../../../../state/post/postSlice";

// Components
import ImageSlide from "../ImageSlide/ImageSlide";


const Home = () => {
  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  const [handlingPostClick, setHandlingPostClick] = useState()

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
                  dispatch(setPost(handlingPostClick.post));
                  dispatch(setPage({
                    name: "studio_pop",
                    page: "post"
                  }));
                }}
              >
                Ler
              </button>
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
            </div>

          </div>
        </>)
        : 
        ""      
        }
      {posts && posts.length > 0 && <div className="home_page">
        <div className="hero">
          <ImageSlide
            images={posts[0].cover_images}
          />
          <div className="text">
            <span className="category">{posts[0].topic}</span>
            <h1>{posts[0].title}</h1>
            <h3>{posts[0].subtitle}</h3>
            <div className="buttons">
              <button
                onClick={() => {
                  dispatch(setPost(posts[0]))
                  dispatch(setPage({
                    name: "studio_pop",
                    page: "post"
                  }))
                }}
              >
                Ler
              </button>
              <button
                onClick={() => {
                  dispatch(setPost(posts[0]))
                  dispatch(setPage({
                    name: "studio_pop",
                    page: "studio"
                  }))
                }}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        
        <div className="highlights">
          <h4>Recentes</h4>
          <div className="cards">
            {posts && posts.map((post) => (
              <div
                key={post.id}
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
          </div>
          
        </div>
        <div className="middle_content">
          <div className="recents">
          <h4>Destaques</h4>
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
            key={post.id}
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