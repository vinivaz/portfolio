import "./HandlingMessage.css";

const HandlingMessage = ({data, userId, cancel}) => {
  return (
    <div
      className={data.status 
        ? "message_handle show"
        : "message_handle"
      }
    >
      <span className="cancel" onClick={() => cancel()}>&#10006;</span>
      <span className="message_from_chat">
        {data.status === "replying"?       
          <>
            {data.message.userId === userId 
              ? "Replying to your message: "
              : "Replying to the message: "
            }
          </>
        : 
          "Editing your message..."
        }

      </span>
      <span>{data.message.text}</span>
    </div>
  )
}

export default HandlingMessage;