
import more_icon from "/more_icon.svg";

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

// Redux
import { setHandlingMessage, setNewMessageText } from "../../state/message/messageSlice";

// Services
import { deleteImage, deleteMessage,  } from "../../services/messageService";


const Message = ({message, user}) => {
  const dispatch = useDispatch()

  const toggleMessageOpts = (messageId) => {
    
    const element = document.getElementById(`message_options${messageId}`)

    const trigger = document.getElementById(`message_btn${messageId}`)

    element.classList.toggle("show")

    const clicked = (e) => {

      if(!(e.target === trigger) || element.contains(e.target)){
        element.classList.toggle("show")

        document.removeEventListener("click", clicked)
      }
  
    }

    document.addEventListener("click", clicked)

  }

  const handleDeleteMessage = async(message) => {
    if(message.imageURL != ""){
      await deleteImage(message.imageURL)
    }

    deleteMessage(message.id)
  }

  return (
    <div 
      className={ message.userId == user.uid ?
          "message_right"
        :
          "message_left"
      }
    > 
      <div className="message_box">
        {message.replyingTo !== ""?
          <>{message.replyingTo.userId === user.uid ?                       
            <div className="message_reference">
              <span>Replying to your own message:</span>

                {message.replyingTo.imageURL != ""?
                  <div className="message_reference_image">
                    <img src={message.replyingTo.imageURL} alt="image message" width="50px"/>
                  </div>
                  :
                  ""
                }
                {message.replyingTo.text != ""?
                  <div className="sent_message_left">
                    {message.replyingTo.text}
                  </div>
                  :
                  ""
                }

            </div>
            :
            <div className="message_reference">
              <span>Replying to this message:</span>

                {message.replyingTo.imageURL != ""?
                  <div className="message_reference_image">
                    <img src={message.replyingTo.imageURL} alt="image message" width="50px"/>
                  </div>
                  :
                  ""
                }
                {message.replyingTo.text != ""?
                  <div className="sent_message_right">
                    {message.replyingTo.text}
                  </div>
                  :
                  ""
                }
            </div>
          }</>
          :
            ""
        }
        {message.edited
          ? <span className="edited_tag">Edited</span>
          : ""
        }
        {message.imageURL != ""?
          <div className="image_message">
            <img src={message.imageURL} alt="message image" width="200px"/>
          </div>
          :
          ""
        }
        {message.text != ""?
          <div className="message">
            {message.text}
          </div>
          :
          ""
        }

      </div>
      <div className="message_btn">
        <button
          id={`message_btn${message.id}`}
          onClick={() => toggleMessageOpts(message.id)}
        >
          <img src={more_icon} alt="more icon" />
        </button>
        
        <div id={`message_options${message.id}`} className="message_options">
          <button
            onClick={() => dispatch(setHandlingMessage({status: "replying", message}))}
          >
            reply
          </button>

          {message.userId === user.uid ?
            
            (<>
              <button
                onClick={() => {
                  dispatch(setNewMessageText(message.text))
                  dispatch(setHandlingMessage({status: "editing", message}))
                }}
              >
                edit
              </button>
              <button
                onClick={() => handleDeleteMessage(message)}
              >
                delete
              </button>
            </>)

          :
          ""}
        </div>
      </div>
    </div>
  )
}

export default Message