
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Styles
import './OS.css'

// // Img
// import logo from "/logo.svg";
// import lih_logo from "/lih_logo.svg";

// Components
// import TestComponent from './Components/TestComponent/TestComponent';
import ResizableWindow from '../../Components/ResizableWindow/ResizableWindow';
import TaskBar from '../../Components/TaskBar/TaskBar';
import Notifications from '../../Components/Notifications/Notifications';

// Hooks
import { useEffect, useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Chat from '../Chat/Chat';
import ShortCut from '../../Components/ShortCut/ShortCut';
import FalseWindow1 from '../../Components/FalseWindow1/FalseWindow1';

// Redux
import { openApp, showApp, minimizeApp} from '../../state/app/appSlice';
import { isMobile } from '../../services/appService';


function OS() {
  const { apps, mobile_settings } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  // Defina o seletor ou o elemento que deve ser ignorado
  const ignoredElementSelector = ".window_element"; // Pode ser uma classe, id ou qualquer seletor válido

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
    // Função que converte evento touch em evento de mouse
    const fireMouseEvent = (event, eventType) => {
      if (event.changedTouches.length > 1) return; // Ignorar toques múltiplos

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

      // Verifica se o target corresponde ao elemento que deve ser ignorado
      if (targetElement.matches(ignoredElementSelector)) {
        return; // Se for o elemento ignorado, não converte para mousedown
      }

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

    // Adicionar listeners aos eventos de toque
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    // Remover listeners quando o componente for desmontado
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleShortcutClick = (name) => {
    if(apps[name].open){
      // if(isMobile()){
      //   dispatch(showApp(name));
      // }

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
    {/* <ResizeTest/> */}
    <div  id="main" className={"main " + mobile_settings.mode}>
      <Notifications />
      <div className="desktop mobile_menu">
      {Object.keys(apps).map((appName, i) => (
        <ShortCut
          key={i}
          img={apps[appName].icon}
          name={apps[appName].name}
          popUp={() => handleShortcutClick(apps[appName].name)}
          dragElementsId={[appName + i, i + appName]}
        />
      ))}
      </div>
      <div className="mobile_sections show_open_apps">
        <div className="open_apps show" >
          {apps.chat.open && <Chat/>}
          {apps.lih.open && <FalseWindow1/>}
        </div>
        <TaskBar/>
      </div>

    </div>
    </>
  )
}

export default OS
