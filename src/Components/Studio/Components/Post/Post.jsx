// Styles
import "./Post.css"

const Post = () => {
  
  return (
    <div className="post">
      <div className="post_header">
        <span className="topic">FANTASY</span>
        <h1 className="title">Dive deep into the Ghibli’s universe.</h1>
        <h4 className="subtitle">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </h4>
        <span className="data">November 19th, 2023</span>
      </div>
      <div className="post_body">
        <div className="block img">
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
        </div>

      </div>
    </div>
  )
}

export default Post