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
import {setHandlingMessage, setNewMessageText } from "../../../../state/message/messageSlice";


// Services
import { readFile } from "../../../../services/appService";


// Components
import HandlingMessage from "../HandlingMessage/HandlingMessage";
import { setRoom, setRooms } from "../../../../state/room/roomSlice";


const SendMessage = () => {

  const { user } = useSelector((state) => state.user)
  const { room, rooms } = useSelector((state) => state.room)
  const { newMessageText, handlingMessage } = useSelector((state) => state.message);
  const [ image, setImage ] = useState({
    file: null,
    dataURL: null,
  });

  const [ loading, setLoading ] = useState(false)

  const dispatch = useDispatch()

  const createMessageWithImage = () => {

    if(handlingMessage.status === "editing")return;

    dispatch(
      setRooms(
        rooms.map((singleRoom) => {
          if(singleRoom.id === room.id){
            return {
              ...singleRoom,
              lastMessage: `photo sent by ${user.name}.`,
              messages: [
                { 
                  id: v4(),
                  text: newMessageText.trim(),
                  userId: user.uid,
                  roomId: room.id,
                  imageURL: image.dataURL,
                  replyingTo: handlingMessage.status === "replying" ? handlingMessage.message : "",
                  createdAt: new Date(Date.now()).toLocaleString()
                },
                ...singleRoom.messages,
              ]
            }
          }else{
            return singleRoom;
          }
        })
      )
    )

    setImage({
      file: null,
      dataURL: null
    })

    if(handlingMessage.status === "replying"){
      dispatch(setHandlingMessage({status: null, message: null}))
    }
    dispatch(setNewMessageText(""))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(image.file){
      if(loading)return;
      setLoading(true);
      createMessageWithImage()
      setLoading(false)
      return
    }

    if(!newMessageText)return;

    if(handlingMessage.status === "editing"){

      dispatch(
        setRooms(
          rooms.map((singleRoom) => {
            if(singleRoom.id === room.id){
              return {
                ...singleRoom,
                messages:singleRoom.messages.map((roomMessage) => {
                  if(roomMessage.id === handlingMessage.message.id){
                    return {
                      ...roomMessage,
                      text: newMessageText.trim(),
                      edited: true,
                    }
                  }else{
                    return roomMessage
                  }
                })
              }
            }else{
              return singleRoom;
            }
          }
        )
      ))

      dispatch(setHandlingMessage({
        status: null,
        message: null
      }))

      dispatch(setNewMessageText(""))

      return
    }

    dispatch(
      setRooms(
        rooms.map((singleRoom) => {
          if(singleRoom.id === room.id){
            return {
              ...singleRoom,
              lastMessage: newMessageText.trim(),
              messages: [

                { 
                  id: v4(),
                  text: newMessageText.trim(),
                  userId: user.uid,
                  roomId: room.id,
                  imageURL: "",
                  replyingTo: handlingMessage.status === "replying" ? handlingMessage.message : "",
                  createdAt: new Date(Date.now()).toLocaleString()
                },
                ...singleRoom.messages,
        
              ]
            }
          }else{
            return singleRoom;
          }
      })
      )
    )

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
      setImage({file, dataURL: imageDataUrl})
      e.target.value = null;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita comportamentos padrão, como pular linha
      handleSubmit(e)
    }
  };


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
            placeholder="Type a new message..."
            onKeyDown={handleKeyDown}
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