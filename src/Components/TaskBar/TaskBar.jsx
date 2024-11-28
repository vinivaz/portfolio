// Assets
import network_icon from "/network_icon.svg";
import sound_icon from "/sound_icon.svg";
import bluetooth_for_card from "/bluetooth_for_card.svg";
import wifi_for_card from "/wifi_desktop_bar.svg";
import desktop_search from "/desktop_search_icon.svg"

// Styles
import "./TaskBar.css";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { minimizeApp, showApp, setMobileMode, minimizeAll } from "../../state/app/appSlice";
// import { changeCurrent, goToMenu, showRunningApps } from "../../state/system/systemSlice";

const TaskBar = () => {
  const { apps, mobile_settings } = useSelector(state => state.app)
  const { time } = useSelector(state => state.system)
  // const [time, setTime] = useState(new Date());

  const dispatch = useDispatch()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const handleClickBack = () => {
    if(mobile_settings.mode == "running_apps"){
      dispatch(setMobileMode("menu"))
      return
    }

    if(mobile_settings.mode == "fullsized_app"){
      dispatch(minimizeAll())
      dispatch(setMobileMode("menu"))
    }
  }

  const handleClickTask = (name) => {
    const app = apps[name];
    if(app.minimized){
      dispatch(showApp(name))
    }else{
      dispatch(minimizeApp(name))
    }
  }

  const handleClickHome = () => {
    dispatch(minimizeAll())
    
  }

  const handleClickRunningApps = () => {
    dispatch(minimizeAll())
    dispatch(setMobileMode("running_apps"))
  }

  return (
    <div className="taskbar">
      <nav className="mobile_nav">
        <button className="running_apps" onClick={() => handleClickRunningApps()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="home" onClick={() => handleClickHome()}></button>
        <button className="back" onClick={handleClickBack}>
        <span></span>
        <span></span>
        </button>
      </nav>

      <div className="system_start_button">
        <button>

        </button>
      </div>

      <div className="desktop_search">
        <img src={desktop_search} alt="search icon" />
        <input
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="tasks">

        {apps.chat.open && (
          <div onClick={() => handleClickTask(apps.chat.name)} className="task">
            <img src={apps.chat.icon}/>
          </div>
        )}
        {apps.lih.open && (
          <div onClick={() => handleClickTask(apps.lih.name)} className="task">
            <img src={apps.lih.icon}/>
          </div>
        )}
        {apps.portfolio.open && (
          <div onClick={() => handleClickTask(apps.portfolio.name)} className="task">
            <img src={apps.portfolio.icon}/>
          </div>
        )}
        {apps.studio_pop.open && (
          <div onClick={() => handleClickTask(apps.studio_pop.name)} className="task">
            <img src={apps.studio_pop.icon}/>
          </div>
        )}
      </div>
      <div className="desktop_status">
        <div className="item bluetooth">
          <img src={bluetooth_for_card} alt="bluetooh icon"/>
        </div>
        <div className="item wifi">
          <img src={wifi_for_card} alt="wifi icon"/>
        </div>
        <div className="item">
          <img src={sound_icon} alt="sound icon"/>
        </div>
        <div className="item">
          <img src={network_icon} alt="network icon"/>
        </div>
        <div className="date">
          <span>
            {time.hours}:{time.minutes}
          </span>
          <span>
            {time.day}/{time.month}/{time.year}
           </span>
        </div>
        <span></span>
      </div>
    </div>
  )
}

export default TaskBar