// Styles
import "./Post.css"

// Hooks
import { useSelector, useDispatch } from "react-redux";

// Components
import { Tweet } from 'react-tweet';
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";



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

  const { topic, title, subtitle, date, blocks} = useSelector((state) => state.post.post)
  const generateFakeItems = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      image: `/studio/image-icon-wide.svg`, // URL de imagem genérica
      text: `Item ${index + 1}`,
    }));
  };

  const items = generateFakeItems(10);
  
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
          {/* <div className="block img">
            <img src="/studio/Totoro1.png" alt="image block" />
            <span className="image_description">From My neighbor Totoro</span>
          </div>

          <div className="block text">
            My Neighbour Totoro


            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </div>

          <div className="block img">
            <img src="/studio/Totoro2.png" alt="image block" />
            <span className="image_description">From My neighbor Totoro</span>
          </div>

          <div className="block text">
            My Neighbour Totoro


            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </div> */}

        </div>
      </div>
      <div className="more_content">
        <div className="ad">
          <img src="/studio/ad_smartphone.svg" />
        </div>
        <div className="more_posts">
          {items.map((item, index) => (
            <div key={index} className="mini_post">
              <img src={item.image}/>
              <div className="mini_post_details">
                <span className="mini_post_title">Totam rem aperiam</span>
                <span className="mini_post_data">November 19th, 2023</span>
                <span className="mini_post_subtitle">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Post