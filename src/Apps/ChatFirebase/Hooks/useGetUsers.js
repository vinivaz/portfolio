// Firebase
import { query, where, collection, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { setUser, setUsers } from "../../../state/user/userSlice";


export const useGetUsers = () => {

  const { user, users, userAuthState } = useSelector((state) =>  state.user)

  const dispatch = useDispatch()

  useEffect(() => {


    if(!userAuthState)return;

    dispatch(setUsers(undefined))
    dispatch(setUser(undefined))
    console.log("aaaaa")

    const collectionRef = collection(db, "users");
  
    const q = query(
      collectionRef,
      orderBy("createdAt", "desc")
    ); 
    
    onSnapshot(q, (querySnapshot) => {
  
      const users = querySnapshot.docs.map((doc) => {

        if(doc.data().uid == userAuthState.uid){

          dispatch(setUser({
            ...user,
            ...doc.data()
          }))
        }

        return({
          id: doc.id,
          ...doc.data()
        })
      })

      dispatch(setUsers(
        users
      ))
    })

  }, [userAuthState]);

}

