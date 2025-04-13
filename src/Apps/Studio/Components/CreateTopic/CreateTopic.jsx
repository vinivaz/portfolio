// Styles
import "./CreateTopic.css";

// Hooks
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { setCreatingTopic, setTopics } from '../../../../state/post/postSlice';

const CreateTopic = () => {

  const [ newTopic, setNewTopic ] = useState("")
  const [ alert, setAlert ] = useState("")

  const { topics } = useSelector(state => state.post)

  const dispatch = useDispatch();

  const handleAddTopic = () => {

    if(!newTopic || newTopic === " "){
      setAlert(true)
      return;
    }

    dispatch(setTopics(newTopic))
    dispatch(setCreatingTopic(false))
  }
  return (
  <>
    <div
      className="create_topic_background"
      onClick={() => dispatch(setCreatingTopic(false))}
    >
    </div>
    <div className="create_topic">
      <div className="close_btn">
        <span
          onClick={() => dispatch(setCreatingTopic(false))}
        >
          &#10005;
        </span>
      </div>

      {alert &&<span className="alert">Topic field is necessary</span>}
      <label>
        <span>Enter the new topic</span>
        <input
          type="text"
          placeholder="Ex: &quot;NOTÍCIA&quot;"
          onChange={(e) => {
            setNewTopic(e.target.value);
            setAlert(false);
          }}
          value={newTopic || ""}
        />
      </label>
      
      <button
        onClick={handleAddTopic}
      >Enter</button>
    </div>
  </>
  )
}

export default CreateTopic;