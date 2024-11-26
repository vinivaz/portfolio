// Assets
import user_icon from "/user_icon.svg";
import return_icon from "/return.svg";

// Styles
import "./UserSection.css"

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Services
import { deleteImage, uploadImage } from "../../../../services/messageService";
import { readFile, updateUser } from "../../../../services/appService";

//Firebase
const UserSection = () => {
  const { users, user } = useSelector((state) => state.user);
  const [ image, setImage ] = useState({
    file: null,
    dataURL: null
  })

  const toggleUserSection = () => {
    const chatElement = document.querySelector(".chat_app");
    chatElement.classList.toggle("show_user_section")
  }

  const handleSelectFile = async(e) => {
    e.preventDefault()
    console.log(e)

    if(user.imageURL){
      await deleteImage(user.imageURL)
    }

    let imageDataUrl;

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      imageDataUrl = await readFile(file);

      const imageURL = await uploadImage("chat_profile/", file);

      const modifiedUser = users.find((singleUser) => singleUser.uid == user.uid)
      console.log(modifiedUser)
      await updateUser({
        ...modifiedUser,
        avatarURL: imageURL
      });

      // console.log(imageDataUrl)
      // setImage({file, dataURL: imageDataUrl})
      e.target.value = null;
    }

  }


  const handlePicture = async() => {

    if(!image.file)return;

  }

  const handleDeleteProfilePicture = async() => {


    const modifiedUser = users.find((singleUser) => singleUser.uid == user.uid)

    await deleteImage(modifiedUser.avatarURL)

    console.log(modifiedUser)
    await updateUser({
      ...modifiedUser,
      avatarURL: null
    });
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
          <input
            id="user_settings_input_file"
            type="file"
            onChange={handleSelectFile}
          />
        </label>
        <span onClick={handleDeleteProfilePicture}>Remove picture</span>
      </div>
    </div>
  )
}

export default UserSection