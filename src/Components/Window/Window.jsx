// Styles
import "./Window.css";

// Hooks
import useDrag from "../../Hooks/useDrag";
import useResizeComponent from "../../Hooks/useResizeComponent";
import { useResizeHandler } from "../../Hooks/useResizeHandler";
import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import {
  handleAppsZIndex,
  minimizeApp,
  showApp,
  updateAppRect,
  closeApp,
  setAppFullscreen,
  unsetAppFullscreen,
  setMobileMode,
  setPage,
  setSizeClass
} from "../../state/app/appSlice";
import { isMobile } from "../../services/appService";


const Window = ({app, children}) => {

  const appRef = useRef(null)

  const { apps, mobile_settings } = useSelector(state => state.app)

  const size = {width: app.width, height: app.height}

  const { windowData } = useResizeComponent(app)

  const dispatch = useDispatch()


    /* View in fullscreen */
  function openFullscreen(elementId) {
    const elem = document.getElementById(elementId)

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

    /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  useEffect(() => {
    dispatch(updateAppRect({name: app.name, appRect: windowData}))
  },[windowData])

  useEffect(() => {

    if(isMobile()){
      if(!app.minimized && !app.fullscreen){
        dispatch(setAppFullscreen({app}))
      }
    }
  },[app])
  

  const handleAppFullsized = () => {

    if(app.fullscreen){
      dispatch(unsetAppFullscreen({app}))
      dispatch(setMobileMode("menu"))
      if(isMobile()|| windowData.width <= 700){
        dispatch(setSizeClass({name: "chat", sizeClass: " md"}))
      }
      return;
    }

    dispatch(setAppFullscreen({app}))
    if(!isMobile()){
      dispatch(setSizeClass({name: "chat", sizeClass: ""}))
    }
  }

  const handleMinimizeApp = () => {
    if(app.fullscreen){
      dispatch(unsetAppFullscreen({app}))

    }

    dispatch(minimizeApp(app.name))

    dispatch(setMobileMode("menu"))
  }


  const handleCloseApp = () => {
    if(app.fullscreen){
      dispatch(unsetAppFullscreen({app}))
    }

    dispatch(closeApp(app.name))
    dispatch(setMobileMode("menu"))
  }

  const handleMobileFullscreen = () => {
    setMobileMode("fullsized_app")

    /*
      the screen width must be less than 700 
      so that the fullscreen events activates
    */
    if(window.innerWidth < 700){
      if(mobile_settings.mode == "running_apps"){
        if(!app.fullscreen){
          dispatch(setAppFullscreen({app}))
          return;
        }
    
        dispatch(unsetAppFullscreen({app}))
      }

    }

  }

  return (app.elementId && 
    <div
      ref={appRef}
      id={app.elementId}
      className={`window_element ${app.minimized? "" : "showing"} ${app.fullscreen? "fullscreen" : ""}`}
      data-value={app.name}
      style={{zIndex: apps[app.name].zIndex}}
      onMouseDown={() => dispatch(handleAppsZIndex(app.name))}
      onClick={() => handleMobileFullscreen()}
    >
      <div id="squareContent" className="squareContent">
        <div className="window-header">
          <div className="custom-actions">
            <button id="test">{app.name}</button>
          </div>
          <div
            id={app.drag_elements[0]}
            className="draggable"
            data-window={app.elementId}
          ></div>
          <div className="basic-actions">
            <button
              className="minimize"
              onClick={() => handleMinimizeApp()}
            >

            </button>
            <button className="full-screen" onClick={() => handleAppFullsized()}></button>
            <button id="close" onClick={() => handleCloseApp()} className="close"></button>
          </div>
        </div>
          {children}
      </div>
    </div>
  )
}

export default Window