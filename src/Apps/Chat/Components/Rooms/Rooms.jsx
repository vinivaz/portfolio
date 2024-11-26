// Assets
import ghost_image from "/ghost_icon.svg";
import search_icon from "/search_icon.svg";
import return_icon from "/return.svg";
import user_icon from "/user_icon.svg";
import log_out_icon from "/log_out_icon.svg";
import send_message_loading from "/loading_circle.svg";

// Style
import "./Rooms.css";

// Hooks
import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setRoom, setRooms } from '../../../../state/room/roomSlice';
import { setPage } from "../../../../state/app/appSlice";

import { roomData } from "../Database/roomData.js";

import { v4 } from "uuid";
const Rooms = () => {

  const { users, user: loggedInUser } = useSelector((state) => state.user);
  const { apps } = useSelector((state) => state.app);
  // useGetUsers()

  const { rooms } = useSelector(state => state.room);
  const [ loading, setLoading ] = useState(true);
  const {width, page} = apps["chat"];
  const dispatch = useDispatch();

  useEffect(() => {


    if(width <= 700 && page == "initialScreen" && loading === true){
      return

    }

    const loadingRooms = setTimeout(() => {
      setLoading(false)
      
    },5000)


    return () => {
      clearTimeout(loadingRooms)
      console.log("to cleanandor")
    } 
  },[width, page])

  const handleUserClick = (user) => {
    if(rooms){
      const roomIndex = rooms.findIndex((room) => room.userId === user.uid)

      if(roomIndex === -1){
        console.log("chwegou fas")
        const newRoom =             {
          id: v4(),
          name: user.name,
          users: [user.uid, loggedInUser.uid],
          messages: [],
          index: rooms.length,
          lastMessage: "",
          createdAt: "02/10/2024, 23:28:45",
          userId: user.uid,
          roomImage: user.avatarURL
        }

        dispatch(
          setRooms([
            ...rooms,
            newRoom
          ])
        )

        dispatch(setRoom(newRoom))

        return;
      }

      dispatch(setRoom({
        ...rooms[roomIndex],
        index:roomIndex
      }))
      
      // if(!room){
      //   dispatch(setRoom({
      //     name: user.name,
      //     users: [user.uid, loggedInUser.uid],
      //     empty: true
      //   }))
      //   return
      // }


    }
  }

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section")
  }

  const handleRoomClick = (room, index) => {

    dispatch(setPage({name: "chat", page: "chat"}))

    dispatch(setRoom({
      ...room,
      index, 
    }))
    // dispatch(setRoom(room))
   
  }

  // if(loading){
  //   return<p>loading...</p>
  // }

  return (
      <div className="rooms_and_users">
        {/* <div className="return_btn">
          <button><img src={return_icon} alt="return icon"/></button>
        </div> */}

        <div className="options">
        <button className="profile_btn" onClick={() => toggleUserSection()}>
          <img src={user_icon} alt="user icon"/>
        </button>
        <button className="logout_btn">
          <img src={log_out_icon} alt="log out icon"/>
        </button>
          {page && page !== "initialScreen"? 
            <div className="loading_history">
              <p>Loading chat history</p>
              <img src={send_message_loading} alt="loading icon"/>
            </div>
            :
            ""
          }

          <form className="search_room_form">
            <input
              type="text"
              placeholder="Search"
            />
            <img src={search_icon} alt="search icon"/>
          </form>
        </div>
        <div className="rooms">
        <div className="rooms_header">Histórico de conversas</div>
          {rooms && rooms.length > 0 && !loading ? rooms.map((room, index) => (
            <div
              className="room"
              key={index}
              onClick={() => handleRoomClick(room, index)}
            > 
              <div className="avatar">
                {room.roomImage == null ?
                <img src={user_icon} alt="user icon"/>
                  :
                <img src={room.roomImage} alt="user icon"/>
                }
              </div>
              <div className="room_info">
                <span className="username">{room.name}</span>
                <span className="last_message">{room.lastMessage}</span>
              </div>
              <span className="time">{room.time}</span>
            </div>
          ))
          :
          (
            <div className="no_rooms">
              <h3>Nenhuma mensagem...</h3>

              <img src={ghost_image} alt="No messages ilustrator"/>
              <p>Você ainda não iniciou uma conversa, não seja tímido, 
                mande uma mensagem de texto ou áudio pra seus amigos.</p>
            </div>
          )
          }
        </div>
        <div className="users">
          <div className="users_header">Users</div>
          {users && users.map((user, index) => (
            <div
              className="user"
              key={index}
              onClick={() => handleUserClick(user)}
            >
              <div className="avatar">
                {user.avatarURL == null ?
                <img src={user_icon} alt="user icon"/>
                  :
                <img src={user.avatarURL} alt="user icon"/>
                }
              </div>
              <div className="user_info">
                <span className="username">{user.name}</span>
                <span className="last_message"></span>
              </div>
              <span className="time">3 pm</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default memo(Rooms)