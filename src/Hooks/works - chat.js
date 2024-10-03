// Assets
import user_icon from "/user_icon.svg";
import log_out_icon from "/log_out_icon.svg";


// Styles
import "./Chat.css";

// Slices
import { setUsers, setLoading } from "../../state/user/userSlice";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthentication } from "../../Hooks/useAuthentication";
import { useFetchCollection } from "../../Hooks/useFetchData";

import Rooms from "../../Components/Rooms/Rooms";
import ChatRoom from "../../Components/ChatRoom/ChatRoom";
import Window from "../../Components/Window/Window";

import { closeApp, setPage } from "../../state/app/appSlice";
import UserSection from "../../Components/UserSection/UserSection";
import { useGetUsers } from "../../Hooks/useGetUsers";


const Chat = () => {

  const { apps } = useSelector(state => state.app)

  const { user } = useSelector(state => state.user)

  const { room } = useSelector(state => state.room)

  const { logOut } = useAuthentication()

  // const { loading: loadingUsers } = useFetchCollection("users", setUsers)
  useGetUsers()

  const [ mobile, setMobile ] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if(room){
      dispatch(setPage({name: "chat", page: "chat"}))
    }else{
      dispatch(setPage({name: "chat", page: "rooms"}))
    }
  }, [room])

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section")
  }

  return (
      <Window app={apps["chat"]}>
        <div
          className={"chat_app" + `${apps["chat"].size_class}`}
          data-page={apps["chat"].page}
        > 
          <UserSection/>
          <div className="section_bar">
            <button onClick={() => toggleUserSection()}>
              <img src={user_icon} alt="user icon"/>
            </button>
            <button onClick={()=> logOut()}>
              <img src={log_out_icon} alt="log out icon"/>
            </button>
          </div>
          <Rooms/>
          <ChatRoom/>
        </div>
      </Window>
  )
};

export default Chat;