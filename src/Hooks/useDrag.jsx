import { useRef, useEffect } from "react";

const useDrag = (windowElementId, dragElements, containerId = "main" ) => {
  const disabled = useRef(false)
  
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {

    const windowElement = document.getElementById(windowElementId)//draggble
    // const box = document.getElementById(boxId)//window
    if(!windowElement) throw new Error("Element with given id doens't exists.")
  
    const container = document.getElementById(containerId);
    if(!container) throw new Error("Parent is necessary");

    // Set the initial position to the center of the screen
    const setWindowPosition = () => {

      coords.current = {
        startX: (container.clientWidth / 2) - (windowElement.clientWidth / 2),
        startY: (container.clientHeight / 2) - (windowElement.clientHeight / 2),
        lastX: (container.clientWidth / 2) - (windowElement.clientWidth / 2),
        lastY: (container.clientHeight / 2) - (windowElement.clientHeight / 2)
      }
    
    }

    setWindowPosition()

    const isMobile = () => {
      if(window.innerWidth < 700) return true;
    }

    const onMouseDown = (e) => {
      if(dragElements && dragElements.includes(e.target.id)){
        
        isClicked.current = true;
  
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
  
        // making sure we get the coords of the window right, case it's
        // it's resized
  
        const { x, y } = windowElement.getBoundingClientRect()
        coords.current.lastX = x;
        coords.current.lastY = y;
  
      }
    }

    const onMouseUp = () => {
      isClicked.current = false;

      coords.current.lastX = windowElement.offsetLeft;
      coords.current.lastY = windowElement.offsetTop;
    
    }

    const onMouseMove = (e) => {
      if(!isClicked.current)return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      windowElement.style.top = `${nextY}px`
      windowElement.style.left = `${nextX}px`

    }


    const handleResize = (e) => {
      // console.log(window.screen)

      if(isMobile()){
        console.log(disabled.current)
        if(disabled.current == true) return;


        // appWindow.style.removeProperty("width")

        windowElement.removeAttribute("style")
        disabled.current = true;

      }else{

        if(disabled.current == false)return;

        disabled.current = false;

      }

    }

    windowElement.addEventListener("mousedown", onMouseDown);

    windowElement.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);
    // windowElement.addEventListener("mouseleave", onMouseUp);
    window.addEventListener('resize', handleResize)

    const cleanup = () => {
      windowElement.removeEventListener("mousedown", onMouseDown);
      windowElement.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      // windowElement.removeEventListener("mouseleave", onMouseUp);
      window.removeEventListener('resize', handleResize)
    }

    return cleanup;
  }, [])
}

export default useDrag;