import { useState } from "react";

import DOMPurify from "dompurify";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Components

// Redux
// import { setTextBlock } from '../../../../state/post/postSlice';
import { setImageBlock, setDeletingBlock } from "../../../../state/post/postSlice";
import { readFile } from "../../../../services/appService";

const ImageBlock = ({ block }) => {

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

  const handleSelectedFile = async(e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)
      dispatch(setImageBlock({block, url: imageDataUrl}))
      e.target.value = null;
    }
  }

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
    console.log(block)
  }

  const checkAspectRatio = (e) => {
    var img = e.target;
        
    var imgAspectRatio = (img.naturalWidth/img.naturalHeight)
    var expectedAspectRation = (16/9)
  }

  return (
    <>
      <div className="block img" id="548142114780">
        <div className="block-ctrl">
          <label
            id="548142114780-get-img-btn"
            className="get-img"
          >
            Picture
            <input
              type="file"
              name="image"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={(e) => handleSelectedFile(e)}
            />
          </label>
          
          <button className="add-img-link-btn" id="548142114780-add-link-btn">add link</button>
          <button onClick={() => handleDeleteBlock(block)} id="548142114780-button">x</button>
        </div>
        <div className="block-content img" id="548142114780-img-p">
          <img 
            onLoad={checkAspectRatio}
            src={block.url}
          />
        </div>
        <div className="img-details">
          <div className="description notranslate" id="548142114780-img-descript" contenteditable="">picture description</div>
          
        </div>
      </div>
      {/* {dialogue && <ConfirmDialogue/>} */}
    </>
    
  );
};

export default ImageBlock;
