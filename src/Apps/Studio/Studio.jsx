
import "./style.css";

import "./topic-section.css";


//https://www.tokyvideo.com/embed/296089




// Components
import Window from "../../Components/Window/Window";
import Navbar from "./Components/Navbar/Navbar";

//Hooks
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//Database
import { postsData } from "./Database/postsData";

// Redux
import {
  setPost,
  setTopic,
  setTitle,
  setSubtitle,
  createBlock,
  setCreatingTopic,
  setVisualizingPost
} from "../../state/post/postSlice";
import { setPage } from "../../state/app/appSlice";

import DOMPurify from 'dompurify';
import BlockHandler from "./Components/BlockHandler/BlockHandler";
import DeleteBLockDialogue from "./Components/DeleteBlockDialogue/DeleteBlockDialogue";
import BlocksMap from "./Components/BlocksMap/BlocksMap";
import CreateTopic from "./Components/CreateTopic/CreateTopic";
import Post from "./Components/Post/Post";
import Home from "./Components/Home/Home";

const Studio = () => {

  const posts = postsData()
  const { apps } = useSelector(state => state.app);
  const { studio_pop } = apps;
  const { time } = useSelector(state => state.system)
  const {
    topics,
    deletingBlock,
    creatingTopic,
    visualizingPost
  } = useSelector(state => state.post);
  const post = useSelector(state => state.post.post)
  const {
    topic,
    title,
    subtitle,
    blocks
  } = post;
   
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPost(post))
    console.log(post)
  },[post])

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
    <Window app={apps["studio_pop"]}>
      <div id="webSiteContent" className={"notranslate" + `${apps["studio_pop"].size_class}`}>
        <Navbar/>
        {creatingTopic && <CreateTopic />}
        {deletingBlock && <DeleteBLockDialogue />}
        {studio_pop.page && studio_pop.page == "post" && <Post />}
        {studio_pop.page && studio_pop.page == "home" && <Home />}
        <div className="post_tools">

        <div className="finish-section post-editor">
              <button
                className="save"
                onClick={() => console.log({
                  topic,
                  title,
                  subtitle,
                  blocks
                })}
              >
                <img src="/studio/save-icon.svg" />
              </button>
              <button
                className="simulate"
                onClick={() => dispatch(setPage({
                  name: "studio_pop",
                  page: "post"
                }))}
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
                onChange={(e) => dispatch(setTopic(e.target.value))}
                defaultValue={topic || "NOTÍCIA"}
              >
                {topics && topics.map((singleTopic, index) => (
                  <option key={index} value={singleTopic}>
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
            </div>

          </div>
          <label htmlFor="postTitle" className="post_title_label">
            {/* <span>clique para editar o título:</span> */}
            <div className="editable_hint">
              <div className="editable_icon">
                <img src="/studio/pencil.svg" alt="pencil icon"/>
              </div>
              <span>Title: </span>
            </div>
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
            {/* <span>clique para editar subtítulo: </span> */}
            <div className="editable_hint">
              <div className="editable_icon">
                <img src="/studio/pencil.svg" alt="pencil icon"/>
              </div>
              <span>Subtitle: </span>
            </div>
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
                onClick={() => console.log(block)}
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
