// Styles
// import "./TestWindow.css";
// import "./DraggableWindow.css"; 
// import "./Custom.css";
// import "./OldSystemStyle.css"

// Components
import useDrag from "../../Hooks/useDrag";
import Chat from "../../pages/Chat/Chat";

// Hooks
// import { useEffect } from "react";


const DraggableWindow = ({container, parent, closeWindow}) => {
  const dragElementsId = ["draggable","test","close"]

  useDrag(container, parent, dragElementsId)

  return (
    <>
      <div className="window-header">
        <div className="custom-actions">
          <button id="test">File</button>
        </div>
        <div
          id="draggable"
          className="draggable"
        ></div>
        <div className="basic-actions">
          <button className="minimize"></button>
          <button className="full-screen"></button>
          <button id="close" onClick={() => closeWindow()} className="close"></button>
        </div>
      </div>
      <Chat/>
    </>
  )
}

export default DraggableWindow;

{/* <div id="window">
        <div className="header"> 
          <div id="upRight" className="resize up_right corner"></div>
          <div id="up" className="resize top"></div>
          <div id="upLeft" className="resize corner up_left"></div>
        </div>

        <div className="middle"> 
          <div id="right" className="resize right"></div>
          <div id="squareContent" className="squareContent">
            <div className="window-header">
              <div className="custom-actions">
                <button>File</button>
              </div>
              <div
                id="draggable"
                className="draggable"
              ></div>
              <div className="basic-actions">
                <button className="minimize"></button>
                <button className="full-screen"></button>
                <button className="close"></button>
              </div>
            </div>
          </div>
          <div id="left" className="resize left"></div>
        </div>
        
        <div className="footer"> 
          <div id="downRight" className="resize corner down_right"></div>
          <div id="down" className="resize bottom"></div>
          <div id="downLeft" className="resize corner down_left"></div>
        </div>

      </div> */}