// Assets
import mic from "/mic.svg";
import clip_shadow_light from "/clip_shadow_light.svg";
import paper_plane from "/paper_plane.svg";
import send_message_loading from "/loading_circle.svg"

// UUID
import { v4 } from "uuid";

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {setHandlingMessage, setNewMessageText } from "../../state/message/messageSlice";
import { setRoom } from "../../state/room/roomSlice";

// Services
import { createMessage, updateMessage, uploadImage } from "../../services/messageService";
import { createRoom, updateRoom } from "../../services/roomService";
import { readFile } from "../../services/appService";


// Components
import HandlingMessage from "../ChatRoom/HandlingMessage";
import { set } from "firebase/database";

const SendMessage = () => {

  const { user } = useSelector((state) => state.user)
  const { room } = useSelector((state) => state.room)
  const { newMessageText, handlingMessage } = useSelector((state) => state.message);
  const [ image, setImage ] = useState({
    file: null,
    dataURL: null,
  });

  const [ loading, setLoading ] = useState(false)

  const dispatch = useDispatch()

  const createRoomAndSendMessage = async() => {
    const newRoom = await createRoom({
      users: room.users,
      createdAt: new Date(Date.now()).toLocaleString(),
      lastMessage: ""
    })

    await createMessage({
      text: newMessageText.trim(),
      userId: user.uid,
      roomId: newRoom.id,
      imageURL: "",
      replyingTo: "",
      createdAt: new Date(Date.now()).toLocaleString()
    })

    dispatch(setRoom({
      users: room.users,
      id: newRoom.id,
      lastMessage: newMessageText.trim(),
      name: room.name
    }))

    dispatch(setNewMessageText(""))
  }

  const createMessageWithImage = async() => {

    if(handlingMessage.status === "editing")return;

    let newRoom = undefined;

    if(room.empty){
      newRoom = await createRoom({
        users: room.users,
        createdAt: new Date(Date.now()).toLocaleString(),
        lastMessage: ""
      })
    }

    const imageURL = await uploadImage("message_images/", image.file)

    const messageData = {
      text: newMessageText.trim(),
      userId: user.uid,
      roomId: newRoom == undefined? room.id : newRoom.id,
      imageURL,
      replyingTo: handlingMessage.status === "replying" ? handlingMessage.message : "",
      createdAt: new Date(Date.now()).toLocaleString()
    }

    await createMessage(messageData)

    setImage({
      file: null,
      dataURL: null
    })

    if(handlingMessage.status === "replying"){
      dispatch(setHandlingMessage({status: null, message: null}))
    }

    if(newRoom != undefined){
      dispatch(setRoom({
        users: room.users,
        id: newRoom.id,
        lastMessage: "",
        name: room.name
      }))
    }

    dispatch(setNewMessageText(""))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(image.file){
      if(loading)return;
      setLoading(true);
      await createMessageWithImage()
      setLoading(false)
      return
    }

    if(!newMessageText)return;

    if(room.empty){
      // const room = await createRoom()
      createRoomAndSendMessage()
      return
    }

    if(handlingMessage.status === "editing"){
      await updateMessage({
        ...handlingMessage.message,
        text: newMessageText.trim(),
        edited: true,
      })

      dispatch(setHandlingMessage({
        status: null,
        message: null
      }))
  
      dispatch(setNewMessageText(""))

      return
    }

    await createMessage({
      text: newMessageText.trim(),
      userId: user.uid,
      roomId: room.id,
      imageURL: "",
      replyingTo: handlingMessage.status === "replying" ? handlingMessage.message : "",
      createdAt: new Date(Date.now()).toLocaleString()
    })

    await updateRoom( room.id, {lastMessage: newMessageText.trim()} )

    if(handlingMessage.status === "replying"){
      dispatch(setHandlingMessage({status: null, message: null}))
    }

    dispatch(setNewMessageText(""))

  }

  const handleSelectFile = async(e) => {
    e.preventDefault()
    console.log(e)  

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)
      console.log(imageDataUrl)
      setImage({file, dataURL: imageDataUrl})
      e.target.value = null;
    }
  }


  return (
    <div
      className={handlingMessage.status 
        ? "send_message handling_message"
        : "send_message"
      } 
    >
      <div
        // onSubmit={handleSubmit}
        className="send_message_box"
      >
        {handlingMessage.status && <HandlingMessage
          data={handlingMessage}
          userId={user.uid}
          cancel={() => dispatch(setHandlingMessage({status: null, message: null}))}
        />}

        <div className="send_message_options">
          {/* <div className="old_message">
            <div
              className={"right_message"}
            >
              oii
            </div>
          </div> */}
          {image.dataURL?
            <div className="image_preview">
              <img src={image.dataURL} alt="send picture"/>
              <div className="close" onClick={() => setImage({file: null, dataURL: null})}>&#10005;</div>
            </div>
            :
            <label >
              <div className="select-files">
                <img src={clip_shadow_light} alt="abubleh"/>
              </div>
              <input
                type="file"
                name="image"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                onChange={(e) => handleSelectFile(e)}
              />
            </label>
          }
          
          <input
            type="text"
            onChange={(e) => dispatch(setNewMessageText(e.target.value))}
            className="message_input"
            value={newMessageText || ""}
            placeholder="Type a new message"
          />
          <button className="record">
            <img src={mic} alt="abubleh"/>
          </button>
          {loading == true ? 
            <div className="loading">
              <img src={send_message_loading} alt="loading icon"/>
            </div>
            :
            <button
            className="send"
            onClick={handleSubmit}
            >
              <img src={paper_plane} alt="enviar"/>
            </button>
          }

        </div>
      </div>
    </div>
    )
}

export default SendMessage