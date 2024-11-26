// Styles
import "./ImageBlock.css"


import DOMPurify from "dompurify";

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Components

// Redux
import { setImageBlock, setDeletingBlock } from "../../../../state/post/postSlice";
import { readFile } from "../../../../services/appService";

const ImageBlock = ({ block }) => {

  const [ linkPopup, setLinkPopup ] = useState({
    showing: false,
    alert: false,
    link: block.credits.content,
    url: block.credits.url
  })

  const dispatch = useDispatch();

  const handleSelectedFile = async(e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      const modifiedBlock = {
        ...block,
        url: imageDataUrl,
      }
      dispatch(setImageBlock({blockId: block.id, modifiedBlock}))
      e.target.value = null;
    }
  }

  const handleInsertLink = () =>{
    const { link, url } = linkPopup;

    if(!link || link === " "){
      setLinkPopup({
        ...linkPopup,
        alert: true
      })
      return;
    }

    if(!url || url === " "){
      setLinkPopup({
        ...linkPopup,
        alert: true
      })
      return;
    }

    const modifiedBlock = {
      ...block,
      credits: {
        content: link,
        link: url
      },
    }
    dispatch(setImageBlock({blockId: block.id, modifiedBlock}))

    setLinkPopup({
      showing: false,
      alert: false,
    })
  }

  const handleClick = (e) => {
    e.target.setAttribute("contentEditable", true);

    e.target.focus();

    const selection = window.getSelection();
    const range = document.createRange();

    // Get the node and position of the click
    const x = e.clientX;
    const y = e.clientY;

    // Determine the exact point where the click occurred
    const caretPosition = document.caretPositionFromPoint
      ? document.caretPositionFromPoint(x, y)// For modern browsers
      : document.caretRangeFromPoint(x, y);// For older browsers

    if (caretPosition) {
      range.setStart(caretPosition.offsetNode, caretPosition.offset);
      range.collapse(true); // Collapse the range at the clicked position
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  const handleBlur = (e) => {
    const pictureDescription = e.target.innerHTML
    .replace(/&lt;.*?&gt;/g, "")
    .replace(/<[^>]*>/g, '');


    const modifiedBlock = {
      ...block,
      description: pictureDescription
    }

    dispatch(setImageBlock({blockId: block.id, modifiedBlock}))
    
    e.target.innerHTML = pictureDescription;
    e.target.removeAttribute("contentEditable");
  };

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
  }

  const handleRemoveLink = () => {
    const modifiedBlock = {
      ...block,
      credits: {
        content: "",
        url: ""
      },
    }
    dispatch(setImageBlock({blockId: block.id, modifiedBlock}))
  }

  return (
    <>
      {linkPopup && linkPopup.showing ?
      (<>
        <div
          className="insert_link_background"
          onClick={() => setLinkPopup({
            showing: false,
            alert:false,
          })}
        >
        </div>
        <div className="insert_link">
          <div className="close_btn">
            <span
              onClick={() => setLinkPopup({
                showing: false,
                alert:false,

              })}
            >&#10005;</span>
          </div>

          {linkPopup.alert &&<span className="alert">All fields are necessary</span>}     
          <label>
            <span>Type the link's words...</span>
            <input
              type="text"
              placeholder="Some website"
              onChange={(e) => setLinkPopup({
                ...linkPopup,
                alert: false,
                link: e.target.value
              })}
              value={linkPopup.link || ""}
            />
          </label>
          
          <label>
            <span>Insert the URL</span>
            <input
              type="text"
              placeholder="https://somewebsite.com"
              onChange={(e) => setLinkPopup({
                ...linkPopup,
                alert: false,
                url: e.target.value
              })}
              value={ linkPopup.url|| ""}
            />
          </label>
          <button
            onClick={handleInsertLink}
          >Enter</button>
        </div>
      </>)
      : 
      ""      
      }

      <div className="block img" id={block.id}>

        <div className="block-ctrl">
          <label
            id="548142114780-get-img-btn"
            className="get-img"
          >
            select image
            <input
              type="file"
              name="image"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={(e) => handleSelectedFile(e)}
            />
          </label>
          
          <span
            className="get-img"
            id="548142114780-add-link-btn"
            onClick={() => setLinkPopup({
              showing: true,
              link: block.credits.content,
              url: block.credits.url
            })}
          >
            <img src="/studio/insert-link.svg"/>
          </span>
          <button
            onClick={() => handleDeleteBlock(block)}
            id="548142114780-button">
              &#10005;
            </button>
        </div>
        <div className="block-content img" id="548142114780-img-p">
          <img 
            src={block.url}
            onError={(e) => {e.target.src = "/studio/image-icon-wide.svg"}}
          />
        </div>
        <div className="img-details">
          <div className="editable_hint">
              <div className="editable_icon">
                <img src="/studio/pencil.svg" alt="pencil icon"/>
              </div>
              <span>descrição: </span>
            </div>
          <div
            className="description notranslate"
            id="548142114780-img-descript"
            onClick={handleClick}
            onBlur={handleBlur}
            // onInput={handleDescriptionInput}
          >
            {block.description === "" || block.description === " " ?
            "Picture description"
            :
            block.description
            }
          </div>
          {block.credits.content && block.credits.link ?
          <div className="credits">
            <a href={block.credits.url} target="blank">{block.credits.content}</a>

            <button
              onClick={handleRemoveLink}
            >
              <img src="/studio/trash_icon.svg"/>
            </button>
          </div>
          :
          ""        
          }

        </div>
      </div>
      {/* {dialogue && <ConfirmDialogue/>} */}
    </>
    
  );
};

export default ImageBlock;
