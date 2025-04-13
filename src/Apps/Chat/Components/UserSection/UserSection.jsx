// Assets
import user_icon from "/user_icon.svg";
import return_icon from "/return.svg";

// Styles
import "./UserSection.css"

// Hooks
import { useSelector, useDispatch } from "react-redux";

//Firebase
const UserSection = () => {
  const { users, user } = useSelector((state) => state.user);

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section")
  }

  return (
    <div className="user_section">
      <div className="return_btn">
        <button onClick={() => toggleUserSection()}>
          <img src={return_icon} alt="return icon"/>
        </button>
      </div>

      <label
        htmlFor="user_settings_input_file"
        className="avatar_profile"
      >
        {user.avatarURL?
          <img src={user.avatarURL} alt="user foto"/>
          :
          <img src={user_icon} alt="user icon"/>
        }
      </label>

      <div className="user_settings">
        <input type="text" placeholder={user.name} disabled/>
        <label>
          <span>Insert picture</span>
        </label>
        <span>Remove picture</span>
      </div>
    </div>
  )
}

export default UserSection