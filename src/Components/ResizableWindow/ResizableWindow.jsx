// Styles
import "./ResizableWindow.css";

// Components
import DraggableWindow from "../DraggableWindow/DraggableWindow";

// Hooks
import { useEffect, useRef } from "react";

const ResizableWindow = ({closeWindow, width, height}) => {

  const isClicked = useRef({
    status: false,
    element: null
  });

  const coords = useRef({
    startX: 0,
    startY: 0,

  })

  useEffect(() => {

    const window = document.getElementById("window")
    const container = document.getElementById("main")

    /*get the initial position to the center of the screen and
    
    */
    coords.current = {
      startX: (container.clientWidth / 2) - (window.clientWidth / 2),
      startY: (container.clientHeight / 2) - (window.clientHeight / 2)
    }

    window.style.top = coords.current.startY +"px";
    window.style.left = coords.current.startX + "px";
    window.style.width = width;
    window.style.height = height;

    if(!window)return;

    const resizeFunctions = {
      "upRight": (e) => {
        console.log(e.target.id)

        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width + (coords.current.startX - e.clientX) + "px";
        window.style.height = windowRect.height + (coords.current.startY - e.clientY) + "px";
        window.style.top = windowRect.top - (coords.current.startY - e.clientY) + "px";
        window.style.left = windowRect.left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "up": (e) => {


        console.log("up")
        const windowRect = window.getBoundingClientRect();
        window.style.height = windowRect.height + (coords.current.startY - e.clientY) + "px";
        window.style.top = windowRect.top - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "upLeft": (e) => {
        console.log("upLeft")

        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width - (coords.current.startX - e.clientX) + "px";
        window.style.height = windowRect.height + (coords.current.startY - e.clientY) + "px";
        window.style.top = windowRect.top - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "left": (e) => {
        console.log("left")

        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width + (coords.current.startX - e.clientX) + "px";
        window.style.left = windowRect.left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "right": (e) => {
        console.log(e)
        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width - (coords.current.startX - e.clientX) + "px";
        window.style.right = windowRect.right - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;

      },
      "downRight": (e) => {
        console.log("downRight")
        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width + (coords.current.startX - e.clientX) + "px";
        window.style.height = windowRect.height - (coords.current.startY - e.clientY) + "px";
        window.style.left = windowRect.left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;

      },
      "down": (e) => {
        console.log("down")

        const windowRect = window.getBoundingClientRect();
        window.style.height = windowRect.height - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "downLeft": (e) => {
        console.log(window.getBoundingClientRect())

        const windowRect = window.getBoundingClientRect();
        window.style.width = windowRect.width - (coords.current.startX - e.clientX) + "px";
        window.style.height = windowRect.height - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
    }

    const mouseDown = (e) => {
      const resize = [
        "upLeft",
        "up",
        "upRight",
        "left",
        "right",
        "downRight",
        "down",
        "downLeft"
      ]

      if(resize.includes(e.target.id)){

        isClicked.current = {
          status: true,
          element: e.target.id
        }

        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }
    }

    const mouseUp = () => {

      isClicked.current = {
        status: false,
        element: null
      }
    }

    const mouseLeave = () => {
      if(!isClicked.current.status){
        isClicked.current = {
          status: false,
          element: null
        }
      }
    }

    const mouseMove = (e) => {
      if(!isClicked.current.status)return;
      resizeFunctions[isClicked.current.element](e)
    }

    container.addEventListener("mousedown", mouseDown)
    container.addEventListener("mouseup", mouseUp)
    container.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseleave", mouseLeave)

    const cleanUp = () => {
      container.removeEventListener("mousedown", mouseDown)
      container.removeEventListener("mouseup", mouseUp)
      container.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseleave", mouseUp)
      console.log("desmonteiii")
    }

    return cleanUp;
  },[])

  return (
    <>
      <div  id="window">
        <div id="squareContent" className="squareContent">
          <DraggableWindow container="main" parent="window" closeWindow={closeWindow} />
        </div>

        <div id="upRight" className="resize up_right corner"></div>
        <div id="upLeft" className="resize corner up_left"></div>
        <div id="downRight" className="resize corner down_right"></div>
        <div id="downLeft" className="resize corner down_left"></div>

        <div id="up" className="resize top"></div>
        <div id="right" className="resize right"></div>
        <div id="left" className="resize left"></div>
        <div id="down" className="resize bottom"></div>
      </div>
    </>
  )
}

export default ResizableWindow