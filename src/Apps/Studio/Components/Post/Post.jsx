// Styles
import "./Post.css"

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// Components
import { Tweet } from 'react-tweet';
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import ImageSlide from "../ImageSlide/ImageSlide";

// Redux
import { setPost } from "../../../../state/post/postSlice";

const BlocksRender = ({block}) => {
  switch (block.type) {
    case 'img':
      return (
        <div className="block img">
          <img
            src={block.url}
            alt="image block"
          />
          {block.description && 
            <span
              className="image_description"
            >
              {block.description}
            </span>
          }
          {block.credits.content && block.credits.link && (
            <a href={block.credits.link} target="blank">{block.credits.content}</a>
          )
          }
        </div>
      );
    case 'text':
      return (
        <div
          className="block text"
          dangerouslySetInnerHTML={{ __html: block.content }}
        >
        </div>
      );
    case 'tt-embed':
      return <Tweet id={block.content}/>;
    case 'yt-embed':
      return <YoutubeEmbed videoId={block.content} />;
    default:
      return null;
  }
}

const Post = () => {

  const { posts } = useSelector((state) => state.post)
  const { topic, title, subtitle, date, blocks} = useSelector((state) => state.post.post)
  
  const dispatch = useDispatch()

  const scrollToTop = () =>{
    const scrollingElement = document.querySelector(".post_container");
    scrollingElement.scrollTo({ top: 100, behavior: 'smooth' });
  }

  return (
    <div className="post_container">
      <div className="post">
        <div className="post_header">
          <span className="topic">{topic}</span>
          <h1 className="title">{title}</h1>
          <h4 className="subtitle">{subtitle}</h4>
          <span className="data">{date}</span>
        </div>
        <div className="post_body">
          {blocks && blocks.map((block) => (
            <BlocksRender key={block.id} block={block}/>
          ))}
        </div>
      </div>
      <div className="more_content">
        <div className="ad">
          <img src="/studio/ad_smartphone.svg" />
        </div>
        <div className="more_posts">
          {posts && posts.map((post, index) => (
            <div
              onClick={() => {
                scrollToTop()
                dispatch(setPost(post))
              }}
              key={index}
              className="mini_post"
            >
              <ImageSlide
                images={post.cover_images}
              />
              <div className="mini_post_details">
                <span className="mini_post_title">{post.title}</span>
                <span className="mini_post_data">{post.date}</span>
                <span className="mini_post_subtitle">{post.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Post