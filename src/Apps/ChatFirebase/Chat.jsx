
// Styles
import "./Chat.css";

// Assets
import dialog_1 from "/dialog_1.svg";
import dialog_2 from "/dialog_2.svg";
import dialog_3 from "/dialog_3.svg";
import chat_logo from "/logo.svg"


// Slices
import {setUserAuthState } from "../../state/user/userSlice.js";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthentication } from "./Hooks/useAuthentication";

// Pages
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

// Components
import Window from "../../Components/Window/Window";
import ChatApp from "./Components/ChatApp/ChatApp.jsx";

//firebase auth
import { onAuthStateChanged } from "firebase/auth";

const Chat = () => {

  const [firstScreen, setFirstScreen ] = useState(true)

  const [ authPage, setAuthPage ] = useState("login")

  const { apps } = useSelector(state => state.app)

  const { userAuthState} = useSelector(state => state.user)

  const dispatch = useDispatch()

  const { auth } = useAuthentication()

  useEffect(() => {
    const intro = setTimeout(() => {
      setFirstScreen(false)
    },1500)

    return () => {
      clearTimeout(intro)
    } 
  },[])

  useEffect(() => {
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

  const loadingUser = userAuthState === undefined;

  if(loadingUser){
    return <p>Loading...</p>
  }

  return (
      <Window app={apps["chat"]}>
        {firstScreen ===false ?
        <>
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
        </>
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