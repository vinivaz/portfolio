import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Redux
import {minimizeAll} from "../state/app/appSlice";

const useResizeComponent = (app, parentId = "main") => {

  const threshold = 700;

  const screenHeightPercentage = (percentage) => {
    return percentage * window.innerHeight / 100
  }

  const screenWidthPercentage = (percentage) => {
    return percentage * window.innerWidth / 100
  }


  const sizing = useRef({
    startWidth: 800,
    startHeight: 600,
    lastWidth:null,
    lastHeight:null
  })

  const isMobile = () => {
    if(window.innerWidth <= threshold){
      return true
    }else{
      return false
    }
  }

  const mobile = useRef(null)

  const [ windowData, setWindowData ] = useState(null)

  const isClicked = useRef({
    status: false,
    element: null
  });

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  })

  const resizeButtons = [
    "upLeft",
    "up",
    "upRight",
    "left",
    "right",
    "downRight",
    "down",
    "downLeft"
  ]

  const dispatch = useDispatch()

  useEffect(() => {

    const appWindow = document.getElementById(app.elementId)
    const container = document.getElementById(parentId)

    if(!appWindow || !container )return;

    // Place the resize buttons on the element
    resizeButtons.map((item) => {
      const resizeElement = document.createElement("div")
      resizeElement.setAttribute("class", item);
      resizeElement.setAttribute("id", item);
      resizeElement.setAttribute("data-parent", app.elementId)

      appWindow.appendChild(resizeElement)
    })


    /*get the initial position to the center of the screen and
    
    */
    const positionElement = (width, height) => {

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let appWidth = width;
      let appHeight = height;

      if(width > windowWidth){
        appWidth = screenWidthPercentage(90)
      }

      if(height > windowHeight){
        appHeight = screenHeightPercentage(80)
      }

      appWindow.style.left = `${(windowWidth - appWidth) / 2}px`;
      appWindow.style.top = `${(windowHeight - appHeight) / 2}px`;

      appWindow.style.width = appWidth + "px";
      appWindow.style.height = appHeight + "px";

      setWindowData({
        width: appWidth,
        height: appHeight
      })
    }

    const centerApp = () => {
      if(isMobile())return;

      if (appWindow) {
        const {lastWidth, lastHeight, startHeight, startWidth} = sizing.current;
        if(lastWidth && lastHeight){
          positionElement(lastWidth, lastHeight)
        }else{
          positionElement(startWidth, startHeight)
        }
      }
    };
  
    const handleSize = () => {

      if(isMobile()){

        setWindowData({
          width: window.innerWidth,
          height: window.innerHeight
        })
        if(mobile.current == true){
          return;
        }
        mobile.current = true
        appWindow.removeAttribute("style")
        return;
      }else{
        // if(mobile.current == false){
        //   console.log("o mobile ja ta falso, não vou ajustar");
        //   return;
        // }

        mobile.current = false;
        centerApp()
        return
      }
    }

    handleSize()

    const handleResize = () => {
      dispatch(minimizeAll())
      handleSize()
    }

    const canResize = () => {
      if(appWindow.classList.contains("fullscreen") || isMobile()){
        return false;
      }else{
        return true;
      }
    }

    const resizeFunctions = {
      "upRight": (e) => {
        const {width, height, top, left} = appWindow.getBoundingClientRect()
        appWindow.style.width = width + (coords.current.startX - e.clientX) + "px";
        appWindow.style.height = height + (coords.current.startY - e.clientY) + "px";
        appWindow.style.top = top - (coords.current.startY - e.clientY) + "px";
        appWindow.style.left = left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "up": (e) => {
        const {height, top} = appWindow.getBoundingClientRect()
        appWindow.style.height = height + (coords.current.startY - e.clientY) + "px";
        appWindow.style.top = top - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "upLeft": (e) => {
        const {width, height, top} = appWindow.getBoundingClientRect()
        appWindow.style.width = width - (coords.current.startX - e.clientX) + "px";
        appWindow.style.height = height + (coords.current.startY - e.clientY) + "px";
        appWindow.style.top = top - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "left": (e) => {
        const {width, left} = appWindow.getBoundingClientRect()
        appWindow.style.width = width + (coords.current.startX - e.clientX) + "px";
        appWindow.style.left = left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "right": (e) => {
        const {width, right} = appWindow.getBoundingClientRect()
        appWindow.style.width = width - (coords.current.startX - e.clientX) + "px";
        appWindow.style.right = right - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "downRight": (e) => {
        const {width, height, left} = appWindow.getBoundingClientRect()
        appWindow.style.width = width + (coords.current.startX - e.clientX) + "px";
        appWindow.style.height = height - (coords.current.startY - e.clientY) + "px";
        appWindow.style.left = left - (coords.current.startX - e.clientX) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "down": (e) => {
        const {height} = appWindow.getBoundingClientRect()
        appWindow.style.height = height - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "downLeft": (e) => {
        const {width, height} = appWindow.getBoundingClientRect()
        appWindow.style.width = width - (coords.current.startX - e.clientX) + "px";
        appWindow.style.height = height - (coords.current.startY - e.clientY) + "px";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      },
      "drag": (e) => {
        
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;
  
        appWindow.style.top = `${nextY}px`
        appWindow.style.left = `${nextX}px`
  
      }
    }

    const mouseDown = (e) => {
      if(!canResize()) return;
      
      const appWindowId = e.target.dataset.parent;

      if(resizeButtons.includes(e.target.id) && appWindowId === app.elementId){
        isClicked.current = {
          status: true,
          element: e.target.id
        }

        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }else if(app.drag_elements && app.drag_elements.includes(e.target.id)){

        isClicked.current = {
          status: true,
          element: "drag"
        }

        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
  
        // making sure we get the coords of the window right, case it's
        // it's resized
  
        const { x, y } = appWindow.getBoundingClientRect()
        coords.current.lastX = x;
        coords.current.lastY = y;
      }

      container.addEventListener("mousemove", mouseMove)
    }

    const mouseUp = () => {
    if(!canResize())return;
      isClicked.current = {
        status: false,
        element: null
      }

      coords.current.lastX = appWindow.offsetLeft;
      coords.current.lastY = appWindow.offsetTop;

      container.removeEventListener("mousemove", mouseMove)
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

      // if(!canResize())return;

      if(!canResize() || !isClicked.current.status)return;

      resizeFunctions[isClicked.current.element](e)

      const {width, height} = window.getComputedStyle(appWindow)

      setWindowData({width: parseFloat(width), height: parseFloat(height)})
      sizing.current.lastWidth = parseFloat(width)
      sizing.current.lastHeight = parseFloat(height)
    }

    container.addEventListener("mousedown", mouseDown)
    container.addEventListener("mouseup", mouseUp)
    // container.addEventListener("mousemove", mouseMove)
    appWindow.addEventListener("mouseleave", mouseLeave)

    window.addEventListener('resize', handleResize)

    const cleanUp = () => {
      container.removeEventListener("mousedown", mouseDown)
      container.removeEventListener("mouseup", mouseUp)
      container.removeEventListener("mousemove", mouseMove)
      appWindow.removeEventListener("mouseleave", mouseUp)

      window.removeEventListener('resize', handleResize)

      const resizeCtrls = document.querySelectorAll(`[data-parent=${app.elementId}]`)
      
      resizeCtrls.forEach((item) => {
        appWindow.removeChild(item)
      })
    }

    return cleanUp;
  },[])

  return {windowData}
}

export default useResizeComponent;