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
// import "./navigation-bar.css";

//https://www.tokyvideo.com/embed/296089




// Components
import Window from "../../Components/Window/Window";
import Navbar from "./Components/Navbar/Navbar";

//Hooks
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// Redux
import {
  setPost,
  setTitle,
  setSubtitle,
  createBlock,
  setCreatingTopic,
  setVisualizingPost
} from "../../state/post/postSlice";

import DOMPurify from 'dompurify';
import BlockHandler from "./Components/BlockHandler/BlockHandler";
import DeleteBLockDialogue from "./Components/DeleteBlockDialogue/DeleteBlockDialogue";
import BlocksMap from "./Components/BlocksMap/BlocksMap";
import CreateTopic from "./Components/CreateTopic/CreateTopic";
import Post from "./Components/Post/Post";

const Studio = () => {
  const { apps } = useSelector(state => state.app);
  const { time } = useSelector(state => state.system)
  const {
    topic,
    topics,
    title,
    subtitle,
    blocks,
    deletingBlock,
    creatingTopic,
    visualizingPost,
  } = useSelector(state => state.post);
   
  useEffect(() => {
    console.log(creatingTopic)
  }, [creatingTopic])
  const dispatch = useDispatch()

    // useEffect(() => {

    //   const postmakerElement = document.getElementById("webSiteContent");

    //   const handleClick = (e) => {
    //     if(e.target.id === "postTitle"){
    //       e.target.setAttribute("contentEditable", true)
    //     }

    //     // if(e.target.classList.contains("subtitle")){
    //     //   e.target.setAttribute("contentEditable", true)
    //     // }
    //   }


    //   postmakerElement.addEventListener("click", handleClick);

    //   const cleanUp = () => {
    //     postmakerElement.removeEventListener("click", handleClick);
    //   }
    //   return cleanUp;
    // },[blocks])

    const handleClick = (e) => {
      e.target.setAttribute("contentEditable", true)

      e.target.focus()
      // if(e.target.classList.contains("subtitle")){
      //   e.target.setAttribute("contentEditable", true)
      // }
    }

    const sanitizeContent = (e) => {
      const sanitizedContent = e.target.innerHTML
      .replace(/&lt;.*?&gt;/g, "")
      .replace(/<[^>]*>/g, '');

      e.target.innerHTML = sanitizedContent;

      e.target.removeAttribute("contentEditable")
      return sanitizedContent;
    }

    const addBlock = (type) => {
      dispatch(createBlock(type))
    }

    const toggleMap = () => {
      const mapElement = document.querySelector(".map-placement");
      const toggleMapImage = document.getElementById("toggle_map_image");

      mapElement.classList.toggle("hidden-map");

      if(mapElement.classList.contains("hidden-map")){
        toggleMapImage.src = "/studio/hidden-map.svg"
      }else{
        toggleMapImage.src = "/studio/showing-map.svg"
      }
    }

  return (
    <Window app={apps["postmaker"]}>
      <div id="webSiteContent" className={"notranslate" + `${apps["postmaker"].size_class}`}>
        <Navbar/>
        {creatingTopic && <CreateTopic />}
        {deletingBlock && <DeleteBLockDialogue />}
        {visualizingPost && <Post />}
        <div className="post_tools">

        <div className="finish-section post-editor">
              <button className="save">
                <img src="/studio/save-icon.svg" />
              </button>
              <button
                className="simulate"
                onClick={() => dispatch(setVisualizingPost(!visualizingPost))}
              >
                <img src="/studio/result.svg" />
              </button>
            </div>
            
            <div className="block-opt post-editor">
              <button 
                className="text"
                onClick={() => addBlock("text")}
              >
                <img
                  src="/studio/add icon.svg"
                  alt="plus icon"
                  className="add_icon"
                />
                {/* <span>Texto</span> */}
                <img src="/studio/text-only.svg" />
              </button>
              <button
                className="img"
                onClick={() => addBlock("img")}
              >
                <img
                  src="/studio/add icon.svg"
                  alt="plus icon"
                  className="add_icon"
                />
                {/* <span>Imagem</span> */}
                <img src="/studio/image-icon.svg" />
              </button>
              <button
                className="video"
                onClick={() => addBlock("yt-embed")}
              >
                <img
                  src="/studio/add icon.svg"
                  alt="plus icon"
                  className="add_icon"
                />
                {/* <span>Youtube</span> */}
                <img src="/studio/youtube-icon.svg" />
              </button>
              <button
                className="tweet"
                onClick={() => addBlock("tt-embed")}
              >
                <img
                  src="/studio/add icon.svg"
                  alt="plus icon"
                  className="add_icon"
                />
                {/* <span>Tweet</span> */}
                <img src="/studio/twitter-icon.svg" />
              </button>

            </div>
            
            <div className="add-features post-editor">
              <button
                onClick={() => toggleMap()}
              >
                <img
                  src="/studio/showing-map.svg"
                  id="toggle_map_image"
                />
              </button>
            </div>
          </div>
        <div className="post-exemple post-editor">
          <div className="topic-section">
            <h3>Tópico:</h3>
            <div className="select-topic">
              <select
                id="topicSelector"
                onChange={(e) => dispatch(setPost({topic: e.target.value}))}
                defaultValue={topic || "NOTÍCIA"}
              >
                {topics && topics.map((singleTopic) => (
                  <option value={singleTopic}>
                    {singleTopic}
                  </option>
                ))}
              </select>
            </div>
            <div className="add-topic-section">
              <button
                id="show-add-topic"
                onClick={() => dispatch(setCreatingTopic(true))}
              >
                Novo
              </button>
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
          <label htmlFor="postTitle" className="post_title_label">
            <span>clique para editar o título:</span>
            <h1
              name="title"
              className="postTitle notranslate"
              id="postTitle"
              onClick={handleClick}
              onBlur={(e) => dispatch(setTitle(sanitizeContent(e)))}
            >
              {title}
            </h1>
          </label>

          <div className="subtitle_box">
            <span>clique para editar subtítulo: </span>
            <h2
              className="subtitle notranslate"
              onClick={handleClick}
              onBlur={(e) => dispatch(setSubtitle(sanitizeContent(e)))}
            >
              {subtitle}
            </h2>
          </div>

          <div className="post-info">
            <div>
            <span className="date">{time.day}, {time.fullMonthName} {time.year}</span>
            </div>
          </div>
          <div id="post-content">
            {blocks && blocks.map((block) => 
              <div
                key={block.id}
                id={block.id +"-vessel"}
                className="block-vessel"
              >
                <BlockHandler block={block}/>
              </div> 
            )}
          </div>
        </div>
        <div className="controls">
          <BlocksMap/>
        </div>
      </div>
    </Window>
  );
};

export default Studio;
