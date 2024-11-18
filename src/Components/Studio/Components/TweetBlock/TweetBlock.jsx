import { useEffect, useState } from "react";

import DOMPurify from "dompurify";
import { Tweet } from 'react-tweet';

// Hooks
import { useDispatch } from "react-redux";

// Redux
// import { setTextBlock } from '../../../../state/post/postSlice';
import { setDeletingBlock, setBlock } from "../../../../state/post/postSlice";

const TweetBlock = ({ block }) => {
  const [ tweetId, setTweetId ] = useState(block.content)

  const dispatch = useDispatch();

  useEffect(() => {

    const timeout = setTimeout(() => {
      const modifiedBlock = {
        ...block,
        content: tweetId,
      }
      dispatch(setBlock({blockId: block.id, modifiedBlock}))
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }

  },[tweetId])

  const handleBlur = (e) => {
    if (e.target.classList.contains("editable")) {

    }
  };

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
    console.log(block)
  }

  return (
    <div className="block tt" id={block.id}>
      <div className="block-ctrl">
        <input
          type="text"
          className="tweet-input"
          value={ tweetId|| ""}
          onChange={(e) => setTweetId(e.target.value)}
          id="344765269147-input"
          placeholder="tweet ID"
        />
        <button
          onClick={() => handleDeleteBlock(block)}
          id="344765269147-button">
            &#10005;
          </button>
      </div>
      <div className="block-content tweet" id="344765269147-tt">
        <Tweet id={block.content}/>
        {/* <div
          className="twitter-tweet twitter-tweet-rendered"
          style={{
            display: "flex",
            maxWidth: "550px",
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <iframe
            id="twitter-widget-1"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen={true}
            className=""
            title="X Post"
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1854264521168154650&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3333%2Fapp%2Fstudio%2F%3Ftype%3Dpost%26id%3D672eb50ad2711f9110c8abe8&amp;sessionId=4dcba9e62f25ab106bdea540426fa59d709dae16&amp;theme=dark&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px"
            style={{
              position: "static",
              visibility: "visible",
              width: "550px",
              height: "570px",
              display: "block",
              flexGrow: "1",
            }}
            data-tweet-id="1854264521168154650"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default TweetBlock;
