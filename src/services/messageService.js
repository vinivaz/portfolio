import { doc, addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db, storage} from "../firebase/config";
import {ref, uploadBytes, getDownloadURL, deleteObject, } from "firebase/storage";
import { v4 } from "uuid";

export const createMessage = async(data) => {

  await addDoc(
    collection(db, "messages"),
    data
  )
}

export const uploadImage  = async(folder, file) => {
  try{
    const imageRef = ref(storage, folder + file.name + "_"+ v4())

    const uploadedImage = await uploadBytes(imageRef, file)
  
    const imageURL = await getDownloadURL(uploadedImage.ref)
  
    return imageURL
  }catch(error){
    console.log(error)
  }
}

export const deleteImage  = async(fileUrl) => {

  try{

    const fileRef = ref(storage, fileUrl);
    await deleteObject(fileRef)
    
  }catch(error){
    console.log(error)
  }
}

export const updateMessage = async(data) => {

  try{
    const docRef = doc(db, "messages", data.id);

    await updateDoc(docRef, data)
 
  }catch(error){
    console.log(error)
  }
}

export const deleteMessage = async(messageId) => {
  await deleteDoc(doc(db, "messages", messageId))
}


