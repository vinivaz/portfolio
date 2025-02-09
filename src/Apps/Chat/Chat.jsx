
// Styles
import "./Chat.css";

// Assets
import dialog_1 from "/dialog_1.svg";
import dialog_2 from "/dialog_2.svg";
import dialog_3 from "/dialog_3.svg";
import chat_logo from "/logo.svg"


// Slices
import { setUser, setUsers } from "../../state/user/userSlice.js";
import { setRoom, setRooms } from "../../state/room/roomSlice.js";
import { setMessages } from "../../state/message/messageSlice.js";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


// Data
import { userData } from "./Components/Database/userData.js";
import { roomData } from "./Components/Database/roomData.js";
import { messageData } from "./Components/Database/messageData.js";

// Components
import Window from "../../Components/Window/Window";
import ChatApp from "./Components/ChatApp/ChatApp.jsx";

const Chat = () => {

  const [firstScreen, setFirstScreen ] = useState(true)

  const { apps } = useSelector(state => state.app)
  const { rooms:stateRooms } = useSelector(state => state.room)
  const dispatch = useDispatch()

  useEffect(() => {
    const {user, users} = userData();
    const {room, rooms} = roomData();

    dispatch(setUser(user))
    dispatch(setUsers(users))

    if(stateRooms.length === 0){
      dispatch(setRooms(rooms))
    }
    
    return () => {
      dispatch(setUser(undefined))
      dispatch(setUsers(undefined))
      // dispatch(setRooms([]))
      dispatch(setRoom(null))
    }
  },[])

  useEffect(() => {
    const intro = setTimeout(() => {
      setFirstScreen(false)
    },2000)

    return () => {
      clearTimeout(intro)
    } 
  },[])


  return (
      <Window app={apps["chat"]}>
        {firstScreen ===false ?
          <ChatApp/>
        :
        <div className="intro_container">
          <div className="intro">
            <div className="no_chat_text">
              {/* <h3>Conecte-se com seus amigos, inicie uma conversa</h3>
              <p>Envie mensagens de texto, compartilhe fotos e muito mais...</p> */}
              <img src={chat_logo} alt="dialog picture"/>
              <div className="loading_bar">
                <span className="current_course"></span>
              </div>
            </div>
            {/* <div className="no_chat_icon_right">
              <img src={dialog_3} className="dialog_bigger" alt="dialog picture"/>
            </div> 

            <div className="no_chat_icon_left">
              <img src={dialog_2} alt="dialog picture"/>
            </div>
            <div className="no_chat_icon_right">
              <img src={dialog_1} alt="dialog picture"/>
            </div>*/}
          </div> 
        </div>
           
        }
      </Window>
  )
};

export default Chat;