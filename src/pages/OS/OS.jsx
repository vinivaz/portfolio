
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
import { openApp, showApp} from '../../state/app/appSlice';
import { isMobile } from '../../services/appService';


// const ResizeTest = () => {

//   const thisStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//     width: "100%",
//     maxWidth: "200px",
//     height: "260px",
//     backgroundColor: "white",
//     zIndex: "1000",
//     top: "100px",
//     left: "500px",
//   }

//   const threshold = 700;

//   const isMobileTest = () => {
//    if(window.innerWidth <= threshold){
//     return true
//    }else{
//     return false
//     }
//   }

//   const mobile = useRef(null)

//   const [ m, setM ] = useState(null)

//   const [ width, setWidth] = useState(300)
//   const getWindowWidth = () => {

//   }


//   const elementMetrics = useRef(null)


//   useEffect(() => {

//     // const element = document.getElementById(elementId)

//     const handleSize = () => {
//       console.log("isMobileTest(): ", isMobileTest())
//       if(isMobileTest()){
//         if(mobile.current == true){
//           console.log("mobile ta true, nãp vou fazer mais nada")
//           return;
//         }
  
//         mobile.current = true
//         setWidth(1000)
//         setM(true)
//         console.log("mobile não tava true, mudei ele pra true")
//         return;
//       }else{
//         if(mobile.current == false){
//           console.log("o mobile ja ta falso, não vou ajustar");
//           return;
//         }
//         mobile.current = false
//         setWidth(300)
//         setM(false)
//         console.log("o mobile não tava falso, coloquei ele pra false");
//         return
//       }
//     }

//     handleSize()

//     window.addEventListener('resize', handleSize)

//     const cleanUp = () => {
//       console.log("fez o cleanup")
//       window.removeEventListener('resize', handleSize)
//     }

//     return () => cleanUp;
//   }, [])

//   return(<div style={thisStyle} className="resizeTest">
//       <span>mobile: {m? "true": "false"}</span>
//       <span>{width}</span>
//       <div><button>-</button><button>+</button></div>
//   </div>)
  
// }


function OS() {
  const { apps, mobile_settings } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  const handleShortcutClick = (name) => {
    if(apps[name].open){
      if(isMobile()){
        dispatch(showApp(name));
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
          name="Chat app"
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
