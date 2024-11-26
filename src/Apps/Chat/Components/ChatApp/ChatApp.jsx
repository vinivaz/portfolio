// Styles
import "./ChatApp.css";

// Assets
import user_icon from "/user_icon.svg";
import log_out_icon from "/log_out_icon.svg";

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Rooms from "../Rooms/Rooms";
import UserSection from "../UserSection/UserSection";
import ChatRoom from '../ChatRoom/ChatRoom';

import { setPage } from "../../../../state/app/appSlice";



const ChatApp = () => {
  const { apps } = useSelector(state => state.app);
  const { room } = useSelector(state => state.room);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if(room){
      dispatch(setPage({name: "chat", page: "chat"}));
    }else{
      dispatch(setPage({name: "chat", page: "initialScreen"}));
    }
  }, [room]);

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section");
  };

  return (
    <div
      className={"chat_app" + `${apps["chat"].size_class}`}
      data-page={apps["chat"].page}
    >
      <UserSection/>
      <div className="section_bar">
        <button onClick={() => toggleUserSection()}>
          <img src={user_icon} alt="user icon"/>
        </button>
        <button>
          <img src={log_out_icon} alt="log out icon"/>
        </button>
      </div>
      <Rooms/>
      <ChatRoom/>
    </div>
  )
}

export default ChatApp;