// Assets
import ghost_image from "/ghost_icon.svg";
import search_icon from "/search_icon.svg";
import return_icon from "/return.svg";
import user_icon from "/user_icon.svg";
import log_out_icon from "/log_out_icon.svg";

// Style
import "./Rooms.css";

// Hooks
import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setRoom, setRooms } from '../../../../state/room/roomSlice';
import { setPage } from "../../../../state/app/appSlice";

// Hooks
import { useAuthentication } from "../../Hooks/useAuthentication";
import { useGetUsers } from "../../Hooks/useGetUsers";

// Firebase
import { collection, doc, query, where, orderBy, onSnapshot } from "firebase/firestore";

// Database
import { db } from "../../firebase/config";

const Rooms = () => {
  const { logOut } = useAuthentication()
  const { userAuthState, users, user: loggedInUser } = useSelector((state) => state.user);
  // useGetUsers()

  const { rooms } = useSelector(state => state.room);

  const [ cancelled, setCancelled ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {

  }, [loggedInUser, users])

  /*
  this useEffect waits untill it gets access to all the users in the app 
  then it checks if the component is unmounted, if so, it won't proceed,
  if the component is mounted it will fetch all the chat rooms based on
  the user that is logged in
  */
  useEffect(() => {

    //  this useEffect waits untill it gets access to all the users in the app 
    if(users === undefined || users.length === 0) return;

    dispatch(setRoom(null))
    dispatch(setRooms([]))

    //  this checks if the component is unmounted, if so, it won't proceed
    // if(cancelled)return;

    //the components will start loading some data
    setLoading(true)


    // selecting the type of collection that its going to fetch
    const collectionRef = collection(db, "rooms");

    //fetching chat rooms based in the user that is logged in
    const q = query(
      collectionRef,
      where("users", "array-contains", loggedInUser.uid),
    ); 

    // this functions triggers everytime the collection changes in realtime
      onSnapshot(q, (querySnapshot) => {
        

        dispatch(setRooms(

        // its necessary to prepare the data that comes from firebase docs
        // so it can be used in the app
          querySnapshot.docs.map((doc) => {
            /*
              every room comes with an array of two users,
              the next few lines of code selects the id of the user that
              is not the current user logged in and sets its name and photo as
              the room data
            */
            const otherUserId = doc.data().users.find((user) => user !== loggedInUser.uid);
            

            if(otherUserId){

              const otherUserData = users.find((user) => user.uid === otherUserId);

              return({
                ...doc.data(),
                id: doc.id,
                name: otherUserData.name,
                userId: otherUserData.uid,
                roomImage: otherUserData.avatarURL,

              })

            }

            // in this case the user will send message to him/herself
            return({
              ...doc.data(),
              id: doc.id,
              name: loggedInUser.name,
              userId: loggedInUser.uid,
              roomImage: loggedInUser.avatarURL

            })
          })
        ))
        setLoading(false)
      });

    // return () => {
    //   setCancelled(true)
    // }
  },[users])


  const handleUserClick = (user) => {
    if(rooms){
      const room = rooms.find((room) => room.userId === user.uid)
      if(!room){
        dispatch(setRoom({
          name: user.name,
          users: [user.uid, loggedInUser.uid],
          empty: true
        }))
        return
      }

      dispatch(setRoom(room))
    }
  }

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section")
  }

  const handleRoomClick = (room) => {

    dispatch(setPage({name: "chat", page: "chat"}))
    dispatch(setRoom(room))
   
  }

  if(loading){
    return<p>loading...</p>
  }

  return (
      <div className="rooms_and_users">
        {/* <div className="return_btn">
          <button><img src={return_icon} alt="return icon"/></button>
        </div> */}

        <div className="options">
        <button className="profile_btn" onClick={() => toggleUserSection()}>
          <img src={user_icon} alt="user icon"/>
        </button>
        <button className="logout_btn" onClick={() => logOut()}>
          <img src={log_out_icon} alt="log out icon"/>
        </button>
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
          {rooms && rooms.length > 0 ? rooms.map((room, index) => (
            <div
              className="room"
              key={index}
              onClick={() => handleRoomClick(room)}
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