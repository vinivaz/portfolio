// Styles
import "./ResizableWindow.css";

// Components
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import Chat from "../../pages/Chat/Chat";

// Hooks

import useDrag from "../../Hooks/useDrag";
import useResizeComponent from "../../Hooks/useResizeComponent";


const ResizableWindowTest = ({closeWindow, width, height}) => {

  const dragElementsId = ["draggable","test","close"]

  useDrag("main", "window", dragElementsId)
  useResizeComponent("main", "window", width, height)

  return (
      <div  id="window" className="window_element">
        <div id="squareContent" className="squareContent">
          
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
        </div>
      </div>

  )
}

export default ResizableWindowTest