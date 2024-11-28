

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

      {/* <TextBox/> */}
      
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
