// Firebase
import {doc, addDoc, updateDoc, deleteDoc, collection } from "firebase/firestore";

// Database
import { db } from "../firebase/config"

export const createRoom = async(data) => {

  try{
    const newRoom = await addDoc(
      collection(db, "rooms"),
      data
    )
    console.log(newRoom)
    return newRoom;
  }catch(error){
    console.log(error)
  }

}

export const updateRoom = async(id, data) => {

  try{
    const docRef = doc(db, "rooms", id);

    await updateDoc(docRef, data)

  }catch(error){
    console.log(error)
  }

}

export  const deleteRoom = async(room) => {

  try{

    await deleteDoc(doc(db, "rooms", room.id))

  }catch(error){

      console.log(error)
  }

}