// Styles
import "./ResizableWindow.css";

// Components
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import Chat from "../../pages/Chat/Chat";

// Hooks

import useDrag from "../../Hooks/useDrag";
import useResizeComponent from "../../Hooks/useResizeComponent";


const Window = ({closeWindow, width, height, children}) => {

  const dragElementsId = ["draggableWindow"]

  useDrag("main", "testeWindow", dragElementsId)
  useResizeComponent("main", "testeWindow", width, height)

  return (
      <div id="testeWindow" className="window_element">
        <div id="squareContent" className="squareContent">
          <div className="window-header">
            <div className="custom-actions">
              <button id="test">File</button>
            </div>
            <div
              id="draggableWindow"
              className="draggable"
            ></div>
            <div className="basic-actions">
              <button className="minimize"></button>
              <button className="full-screen"></button>
              <button id="close" onClick={() => closeWindow()} className="close"></button>
            </div>
          </div>
          {children}
        </div>
      </div>

  )
}

export default Window