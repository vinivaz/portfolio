import { useState } from "react";

import DOMPurify from "dompurify";

// Hooks
import { useDispatch } from "react-redux";

// Redux
// import { setTextBlock } from '../../../../state/post/postSlice';
import { setDeletingBlock } from "../../../../state/post/postSlice";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [
      { list: "ordered" },
      { list: "bullet" },
      // {indent: "-1"},
      // {indent: "+1"}
    ],
  ],
};

const VideoBlock = ({ block }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleBlur = (e) => {
    if (e.target.classList.contains("editable")) {
      console.log(e.target.innerHTML);
      console.log(e.target.innerText);
      const sanitizedContent = DOMPurify.sanitize(e.target.innerHTML, {
        ALLOWED_TAGS: ["b", "q", "div", "p", "a", "i", "span"],
        ALLOWED_ATTR: ["style", "href"],
      });
      console.log(sanitizedContent);

      dispatch(setTextBlock({ block, content: sanitizedContent }));

      e.target.innerHTML = sanitizedContent;
      e.target.removeAttribute("contentEditable");
    }
  };

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
  }

  return (
    <div className="block yt" id={block.id}>
      <div className="block-ctrl">
        <input
          type="text"
          className="youtube-input"
          id="15618181980-input"
          // value=""
          placeholder="video ID"
        />
        <button onClick={() => handleDeleteBlock(block)} id="15618181980-button">x</button>
      </div>
      <div className="block-content youtube" id="15618181980-yt-p">
        <iframe
          className="block-content youtube"
          id="15618181980-yt"
          frameBorder="0"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Let It Happen"
          width="640"
          height="390"
          src="https://www.youtube.com/embed/NMRhx71bGo4?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3333&amp;widgetid=3"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBlock;
