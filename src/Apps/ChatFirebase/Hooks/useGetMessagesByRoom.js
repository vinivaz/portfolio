// Firebase
import { query, where, collection, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux
import { setMessages } from "../../../state/message/messageSlice";
import { setRoom } from "../../../state/room/roomSlice";

// Room service
import { deleteRoom } from "../../../services/roomService";

export const useGetMessagesByRoom = (room) => {

  const dispatch = useDispatch()

  useEffect(() => {
    if(!room || room.empty)return;
    
    const collectionRef = collection(db, "messages");
  
    const q = query(
      collectionRef,
      where("roomId", "==", room.id),
      orderBy("createdAt", "desc")
    ); 
    
    onSnapshot(q, (querySnapshot) => {
  
      const previousMessages = querySnapshot.docs.map((doc) => {
        return({
          id: doc.id,
          ...doc.data()
        })
      })
  
      if(previousMessages.length === 0){
        deleteRoom(room)
        dispatch(setRoom(null))
        return
      }
  
      dispatch(setMessages(
        previousMessages
      ))
  
    })
    return () => {
      dispatch(setMessages(
        []
      ))
    } 
  }, [room]);

}

