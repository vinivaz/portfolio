

// Styles
import './OS.css'

// Components
// import TestComponent from './Components/TestComponent/TestComponent';
import ResizableWindow from '../../Components/ResizableWindow/ResizableWindow';
import TaskBar from '../../Components/TaskBar/TaskBar';
import Notifications from '../../Components/Notifications/Notifications';
import ShortCut from '../../Components/ShortCut/ShortCut';

// Hooks
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Apps
import Chat from '../../Apps/Chat/Chat';
// import Chat from "../../Apps/ChatFirebase/Chat";
import FavSong from '../../Apps/FavSong/FavSong';
import Studio from '../../Apps/Studio/Studio';
import Portfolio from '../../Apps/Portfolio/Portfolio';

// Redux
import { openApp, showApp, minimizeApp} from '../../state/app/appSlice';
import { isMobile } from '../../services/appService';
import { setTime } from '../../state/system/systemSlice';


const OS = () =>{
  const { apps, mobile_settings } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  // Defining and elements that doesn't need touch events to be converted
  const ignoredElementSelector = ".window_element"; // it can be a class, id or any valid selector

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

  useEffect(() => {
    // function that turns touch events in click events, so apps drag and resize
    // can work on mobile and touch devices
    const fireMouseEvent = (event, eventType) => {
      if (event.changedTouches.length > 1) return; // Ignoring multiple touches

      event.preventDefault();
      const touch = event.changedTouches[0];
      const mouseEvent = new MouseEvent(eventType, {
        bubbles: true,
        cancelable: true,
        view: window,
        screenX: touch.screenX,
        screenY: touch.screenY,
        clientX: touch.clientX,
        clientY: touch.clientY,
        button: 0,
      });
      event.target.dispatchEvent(mouseEvent);
    };

    let isTouching = false;

    const handleTouchStart = (event) => {
      const targetElement = event.target;

      // It checks if the element touched isn't the ".window_element",
      // if the element touched is the element, the touch event is not converted to mousedown event
      // because touch events are necessary for these elements
      if (targetElement.matches(ignoredElementSelector)) {
        return; 
      }

      // if the element event is the drag or the resizing buttons
      if(resizeButtons.includes(event.target.id) || targetElement.matches(".draggable")){
        if (!isTouching) {
          isTouching = true;
          fireMouseEvent(event, "mousedown");
        }
      }else{
        return;
      }
    };

    const handleTouchMove = (event) => {
      if (isTouching) {
        fireMouseEvent(event, "mousemove");
      }
    };

    const handleTouchEnd = (event) => {
      if (isTouching) {
        fireMouseEvent(event, "mouseup");
        fireMouseEvent(event, "click");
        isTouching = false;
      }
    };

    // Adding listeners to touch events
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    // Remove listeners when the component is unmounted
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShortcutClick = (name) => {
    if(apps[name].open){
      if(apps[name].minimized){
        dispatch(showApp(name))
      }else{
        dispatch(minimizeApp(name))
      }
      return;
    }
    
    dispatch(openApp(name))
  }

  return (<>
    <div  id="main" className={"main " + mobile_settings.mode}>
      <Notifications />
      <div className="desktop" id="desktop">
        <div className="desktop_items mobile_menu">
          {Object.keys(apps).map((appName, i) => (
            <ShortCut
              key={i}
              img={apps[appName].icon}
              name={apps[appName].display_name}
              popUp={() => handleShortcutClick(apps[appName].name)}
              dragElementsId={[appName + i, i + appName]}
            />
          ))}
        </div>
      </div>
      <div className="mobile_sections show_open_apps">
        <div className="open_apps show" >
          {apps.chat.open && <Chat/>}
          {apps.lih.open && <FavSong/>}
          {apps.portfolio.open && <Portfolio/>}
          {apps.studio_pop.open && <Studio/>}
        </div>
        <TaskBar/>
      </div>
    </div>
    </>
  )
}

export default OS
