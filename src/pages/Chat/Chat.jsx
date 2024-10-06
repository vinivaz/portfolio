// Assets
import user_icon from "/user_icon.svg";
import log_out_icon from "/log_out_icon.svg";


// Styles
import "./Chat.css";

// Slices
import { setUser, setUsers, setLoading, setUserAuthState } from "../../state/user/userSlice";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthentication } from "../../Hooks/useAuthentication";


// Pages
import Register from "../Register/Register";
import Login from "../Login/Login";

// Components
import Rooms from "../../Components/Rooms/Rooms";
import ChatRoom from "../../Components/ChatRoom/ChatRoom";
import Window from "../../Components/Window/Window";
import ChatApp from "../../Components/ChatApp/ChatApp.jsx";

import { closeApp, setPage } from "../../state/app/appSlice";
import UserSection from "../../Components/UserSection/UserSection";
import { useGetUsers } from "../../Hooks/useGetUsers";

//firebase auth
import { onAuthStateChanged } from "firebase/auth";

const Chat = () => {

  const [ authPage, setAuthPage ] = useState("login")

  const { apps } = useSelector(state => state.app)

  const { userAuthState } = useSelector(state => state.user)

  // const { room } = useSelector(state => state.room)

  const dispatch = useDispatch()

  const { auth } = useAuthentication()

    // useEffect(() => {
    //   console.log(user)
    // }, [user])

  // const toggleUserSection = () => {
  //   const chatElement = document.querySelector(".chat_app");
  //   chatElement.classList.toggle("show_user_section")
  // }


  useEffect(() => {
    console.log("chat useEffect")
    onAuthStateChanged(auth, (userAuthState) => {
      if(userAuthState){


        dispatch(setUserAuthState({
          name: userAuthState.displayName,
          email: userAuthState.email,
          avatarURL: userAuthState.photoURL,
          uid: userAuthState.uid
        }))
      }else{
        dispatch(setUserAuthState(null))
      }

    })
  },[auth])

  // useGetUsers()

  const loadingUser = userAuthState === undefined;

  if(loadingUser){
    return <p>Loading...</p>
  }

  return (
      <Window app={apps["chat"]}>
        {userAuthState != null?
          (<ChatApp/>
          )
          :
          <>
          {authPage == "login"?
            <Login setAuthPage={setAuthPage}/>
          :
            <Register setAuthPage={setAuthPage}/>
          }
          </>
        }
      </Window>
  )
};

export default Chat;