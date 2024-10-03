// Styles
import "./MousePosition.css";

// Components
import useDrag from "../../Hooks/useDrag";

// Hooks
import { useEffect, useRef, useState } from "react";

const MousePosition = () => {

  const [ mouseData, setMouseData ] = useState({
    clientX: 0
  })

  const squareRef = useRef(null)

  useDrag("main", "mouse_position")
  useDrag("main","squareContent", "square")


  useEffect(() => {

    if(!squareRef.current) return;

    const square = squareRef.current;

    const onMouseMove = (e) => {
      setMouseData ({
        ...mouseData,
        clientX: e.clientX,
        clientY: e.clientY

      })
      // console.log(e)
    }

    const onMouseDown = (e) => {
      console.log(e)
    }

    window.addEventListener("mousemove", onMouseMove)
    square.addEventListener("mousedown", onMouseDown)

    const cleanUp = () => {
      window.removeEventListener("mousemove", onMouseMove)
      square.removeEventListener("mousedown", onMouseDown)
    }

    return cleanUp;
  },[])

  return (
    <>
      <div id="square" ref={squareRef}>
        <div className="header"> 
          <div className="resize up_right corner"></div>
          <div className="resize top"></div>
          <div className="resize corner up_left"></div>
        </div>

        <div className="middle"> 
          <div className="resize right"></div>
          <div id="squareContent" className="squareContent">
          
          </div>
          <div className="resize left"></div>
        </div>
        
        <div className="footer"> 
          <div className="resize corner down_right"></div>
          <div className="resize bottom"></div>
          <div className="resize corner down_left"></div>
        </div>

      </div>
      <div id="mouse_position" className="mouse_position">
        <div className="info">
          <span>clientX</span>
          <p>{mouseData.clientX}</p>
        </div>
        <div className="info">
          <span>clientY</span>
          <p>{mouseData.clientY}</p>
        </div>
        <div className="info">
          <span>item</span>
          <p>data</p>
        </div>
        <div className="info">
          <span>item</span>
          <p>data</p>
        </div>
      </div>
    </>
  )
}

export default MousePosition