// Styles
import "./ChatRoom.css";

// Assets
import dialog_1 from "/dialog_1.svg";
import dialog_2 from "/dialog_2.svg";
import dialog_3 from "/dialog_3.svg";
import user_icon from "/user_icon.svg";
import return_icon from "/return.svg"

// Hooks
import { useSelector, useDispatch } from "react-redux";
// import { useGetMessagesByRoom } from "../../Hooks/useGetMessagesByRoom";

// Redux
import { setPage } from "../../../../state/app/appSlice";

// Components
import SendMessage from "../SendMessage/SendMessage";
import Message from "../Message/Message";


const ChatRoom = () => {

  const { messages } = useSelector((state) => state.message);

  const { room, rooms } = useSelector((state) => state.room);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch()
  

  return (
    <div className="chat">
      {room ? (<>
          <div className="header">
            <div className="return_btn">
              <button
                onClick={() => dispatch(setPage({name: "chat", page: "rooms"}))}
              >
                <img src={return_icon} alt="return icon"/>
              </button>
            </div>
          <div className="avatar">
              {room.roomImage == null ?
                <img src={user_icon} alt="user icon"/>
                  :
                <img src={room.roomImage} alt="user icon"/>
                }
          </div>
          <span className="username">{room.name}</span>
        </div>
        <div className="messages">
          {!room.empty ? (<>
          <div className="previous_messages">
            {rooms[room.index].messages && rooms[room.index].messages.map((message, index) => (
              <Message message={message} user={user} key={index}/>
            ))} 
          </div>
          </>)
          :
          (
            <div className="current_messages">vazioooor</div>
          )}
        </div>
        <SendMessage/>
        </>)
      :
        (<>
        <div className="no_chat">
          <div className="no_chat_text">
            <h3>Conecte-se com seus amigos, inicie uma conversa</h3>
            <p>Envie mensagens de texto, compartilhe fotos e muito mais...</p>
            <button
              onClick={() => dispatch(setPage({name: "chat", page: "rooms"}))}
            >
              Entrar
            </button>
          </div>
          <div className="no_chat_icon_right">
            <img src={dialog_3} className="dialog_bigger" alt="dialog picture"/>
          </div>

          <div className="no_chat_icon_left">
            <img src={dialog_2} alt="dialog picture"/>
          </div>
          <div className="no_chat_icon_right">
            <img src={dialog_1} alt="dialog picture"/>
          </div>
        </div>
        </>)
      }
    </div>
  )
}

export default ChatRoom;