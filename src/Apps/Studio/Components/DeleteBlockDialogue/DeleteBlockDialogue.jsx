// Styles
import "./dialog-screen.css";

// Hooks
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { deleteBlock, setDeletingBlock } from '../../../../state/post/postSlice';

const DeleteBLockDialogue = () => {

  const { deletingBlock } = useSelector(state => state.post)

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteBlock(deletingBlock))
    dispatch(setDeletingBlock(null))
  }

  const handleDeny = () => {
    dispatch(setDeletingBlock(null))
  }

  return (
    <div className="dialog-surrounding">
    <div className="dialog-screen">
      <div className="inner-text"><p>Are you sure you want to delete this block?</p></div>
      <div className="dialog-screen-btn">
        <button
          className="confirm"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        <button
          className="deny"
          onClick={handleDeny}
        >
          Deny
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteBLockDialogue