// Style
import "./Notifications.css"

// Img
import battery from "/battery.svg";
import reception from "/Reception.svg";
import wifi from "/Wi-Fi.svg";
import edit from "/edit_white.svg";
import power from "/power.svg";
import engine from "/engine.svg"
import more_icon_white from "/more_white.svg";
import bluetooth_for_card from "/bluetooth_for_card.svg";
import wifi_for_card from "/wifi_for_card.svg"
// import wifi from "/Wi-Fi.svg"

// Hooks
import { useEffect,  useRef } from 'react'

const Notification = () => {

  const startY = useRef(undefined);
  

  const screenPercentage = (percentage) => {
    return percentage * window.innerHeight / 100
  }

  const handleTouchStart = (e) => {

    const element = document.getElementById("notification")
    const elementEdge = document.getElementById("notification_edge")
    const active = element.classList.contains("active")

  
    if((!active) && e.touches[0].clientY < 22 || active && e.target == elementEdge){
      startY.current = e.touches[0].clientY;
      element.classList.add("peek")

      window.addEventListener("touchmove", handleTouchMove)
      return;
    }
  }

  const handleTouchMove = (e) => {

    const element = document.getElementById("notification")

    if(e.touches[0].clientY > screenPercentage(73))return;

    const nextHeight = e.touches[0].clientY
    element.style.height = nextHeight + "px";
  }

  const handleTouchEnd = (e) => {
    window.removeEventListener("touchmove", handleTouchMove)

    const element = document.getElementById("notification")
    const active = element.classList.contains("active")

    const endY = e.changedTouches[0].clientY;

    if(startY.current < 22 && endY > 90){

      element.classList.remove("peek")
      element.removeAttribute("style")
      element.classList.add("active")

    }else{
      element.classList.remove("peek")
      element.removeAttribute("style")
    }


    if(active && (startY.current < screenPercentage(70) && startY.current > screenPercentage(67)) &&
      endY < screenPercentage(62)){
      element.classList.remove("active")
      startY.current = undefined;
      return
    }

    startY.current = undefined;

  };

  useEffect(() => {

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    const cleanup = () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove)
    }
    return () => cleanup()
  },[])

  return (
    <div id="notification" className={`mobile_info_bar`}>
      <div className="status_bar">
        <span className="hour">10:50</span>
        <div className="connection">
          <span><img src={wifi} alt="wi-fi icon"/></span>
          <span><img src={reception} alt="reception icon"/></span>
          <span><img src={battery} alt="battery icon"/></span>
        </div>
      </div>
      <div className="features">
        <section className="first">
          <div className="date_card">
            <span className="hour">10:31</span>
            <span className="date">Fri, Aug 30</span>
          </div>
          <div className="buttons">
            <button><img src={edit} alt="edit icon"/></button>
            <button><img src={power} alt="power icon"/></button>
            <button><img src={engine} alt="engine icon"/></button>
            <button><img src={more_icon_white} alt="more icon"/></button>
          </div>
        </section>
        <section>
          <div className="all_feature_card">
            <button><img src={wifi_for_card} alt="edit icon"/></button>
            <button><img src={bluetooth_for_card} alt="edit icon"/></button>
            <button><img src={wifi_for_card} alt="edit icon"/></button>
            <button><img src={bluetooth_for_card} alt="edit icon"/></button>
            <button><img src={wifi_for_card} alt="edit icon"/></button>
            <button><img src={bluetooth_for_card} alt="edit icon"/></button>
          </div>
        </section>
        <section className="brightness">
          <div className="brightness_input">
          </div>
        </section>
        <section>
          <div className="feature_card_1_2">

          </div>
          <div className="feature_card_1_2">

          </div>
        </section>
      </div>
      <div id="notification_edge" className="notification_edge"></div>
    </div>
  )
}

export default Notification