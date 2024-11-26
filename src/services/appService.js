  // Firebase
  import { doc, updateDoc, collection, where, query } from "firebase/firestore"

  // Database
  import { db } from "../Apps/ChatFirebase/firebase/config"
  
  export function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  export const updateUser = async(data) => {

    try{

      const docRef = doc(db, "users", data.id);

      const updatedDocument = await updateDoc(docRef, data)
   
    }catch(error){
      console.log(error)
    }
  }
    
  export const isMobile = () => {
    if(window.innerWidth <= 700){
      return true;
    }

    return false
  }
    
  /* View in fullscreen */
  export function openFullscreen(elementId) {
    const elem = document.getElementById(elementId)

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

  }
  
      /* Close fullscreen */
    export function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  