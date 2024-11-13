import "./ad-editor.css";
import "./img-block.css";
import "./place-link.css";
import "./post-simulation.css";
import "./post-style.css";
import "./style.css";
import "./text-block.css";
import "./topic-section.css";
import "./tweet-block.css";
import "./video-block.css";
import "./navigation-bar.css";

//https://www.tokyvideo.com/embed/296089

// Assets
import image_icon from "/studio/image-icon.svg";


// Components
import Window from "../../Components/Window/Window";
import Navbar from "./Components/Navbar/Navbar";
//Hooks
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// Redux
import { setTitle } from "../../state/post/postSlice";

import DOMPurify from 'dompurify';
import BlockHandler from "./Components/BlockHandler/BlockHandler";
import DeleteBLockDialogue from "./Components/DeleteBlockDialogue/DeleteBlockDialogue";

const Studio = () => {
  const { apps } = useSelector(state => state.app)
  const { title, blocks, deletingBlock } = useSelector(state => state.post)
   

  const dispatch = useDispatch()
    // const handleInput = () => {
    //   if (editorRef.current) {
    //     setTitle(editorRef.current.innerHTML);
    //     console.log(editorRef.current.innerHTML)
    //     // moveCursorToEnd();
    //   }
    // };

    useEffect(() => {
      console.log(blocks)

      const postmakerElement = document.getElementById("webSiteContent");

      const handleClick = (e) => {
        if(e.target.id === "postTitle"){
          e.target.setAttribute("contentEditable", true)
        }

        if(e.target.classList.contains("editable")){
          e.target.setAttribute("contentEditable", true)
        }
      }


      postmakerElement.addEventListener("click", handleClick);

      const cleanUp = () => {
        postmakerElement.removeEventListener("click", handleClick);
      }
      return cleanUp;
    },[blocks])

    const handleBlur = (e) => {
      if(e.target.id === "postTitle"){
        const postTitleContent = e.target.innerHTML
        .replace(/&lt;.*?&gt;/g, "")
        .replace(/<[^>]*>/g, '');

        // dispatch(setTitle(postTitleContent))
        
        e.target.innerHTML = postTitleContent
        
        return
      }
    }



  return (
    <Window app={apps["postmaker"]}>
      <div id="webSiteContent" className="notranslate">
        <Navbar/>
        {deletingBlock && <DeleteBLockDialogue />}
        <div className="post-exemple post-editor">
          <div className="topic-section">
            <h3>Tópico:</h3>
            <div className="select-topic">
              {/* <select id="topicSelector" onChange={() => console.log("abubleh")} defaultValue={"NOTÍCIA"}>
                <option value="NOTÍCIA">
                  NOTÍCIA
                </option>
                <option value="MUSICA">MUSICA</option>
              </select> */}
            </div>
            <div className="add-topic-section">
              <button id="show-add-topic">Novo</button>
              <div className="add-topic-surrounding">
                <p>✖</p>
                <div className="add-topic">
                  <input placeholder="Ex: NOTÍCIA" className="add-topic-input" />
                  <button className="add-topic-btn">➕</button>
                </div>
              </div>
            </div>
            <div className="delete-topic-section">
              <button id="show-delete-topic">Apagar</button>
              <div className="delete-topic-surrounding">
                <p>✖</p>
                <div className="delete-topic">
                  {/* <select id="deleteTopicSelector">
                    <option value="NOTÍCIA">NOTÍCIA</option>
                    <option value="MUSICA">MUSICA</option>
                  </select> */}
                  <button className="delete-topic-btn">apagar</button>
                </div>
              </div>
            </div>
          </div>
          <h1
            // contentEditable
            // onInput={handleInput}
            className="postTitle notranslate"
            id="postTitle"
            onBlur={(e) => handleBlur(e)}
          >
            {title}
          </h1>
          <div className="post-info">
            <div>
              <span className="postDate">8/11/2024</span>
            </div>
            <div>
              De: <span className="postAuthor">vini</span>
            </div>
          </div>
          <div id="post-content">
            {blocks && blocks.map((block) => 
              <div
                key={block.id}
                id={block.id +"-vessel"}
                className="block-vessel"
              >
                <BlockHandler  block={block}/>
              </div> 
            )}
          </div>
        </div>
        <div className="controls">
          <div className="map-placement post-editor">
            <div className="map ui-sortable">
              <div
                className="block-icon-vessel img ui-sortable-handle"
                id="28168539499-b-map"
              >
                <div className="block-icon img" id="28168539499-map" draggable="true">
                  <img src={image_icon} />
                </div>
              </div>
              <div
                className="block-icon-vessel txt ui-sortable-handle"
                id="454900306531-b-map"
              >
                <div
                  className="block-icon txt"
                  id="454900306531-map"
                  draggable="true"
                >
                  <img src="/studio/text-only.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="post_tools">
            <div className="finish-section post-editor">
              <button className="save">
                <img src="/studio/save-icon.svg" />
              </button>
              <button className="simulate">
                <img src="/studio/show-icon.svg" />
              </button>
            </div>
            <div className="block-opt post-editor">
              <button className="text">
                <span>Texto</span>
                <img src="/studio/text-only.svg" />
              </button>
              <button className="img">
                <span>Imagem</span>
                <img src="/studio/image-icon.svg" />
              </button>
              <button className="tweet">
                <span>Tweet</span>
                <img src="/studio/twitter-circle.svg" />
              </button>
              <button className="video">
                <span>Youtube</span>
                <img src="/studio/youtube-icon.svg" />
              </button>
            </div>
            
            <div className="add-features post-editor">
              <button>
                <img src="/studio/controls-icon.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Studio;
