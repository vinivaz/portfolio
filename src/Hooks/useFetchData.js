
// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Slice
import { setUsers } from "../state/user/userSlice";


// Firebase
import { collection, doc, query, where, orderBy, onSnapshot } from "firebase/firestore";

// Database
import { db } from "../firebase/config";


export const useFetchCollection = (docCollection, setCollection) => {

  const dispatch = useDispatch()
  const { user } = useSelector((state)=> state.user)

  const [ cancelled, setCancelled ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {

    if(cancelled) return;

    const getData = async() => {
      setLoading(true)

      try{
        const collectionRef = await collection(db, docCollection);

        let q;

        if(docCollection == "users"){
          q = await query(collectionRef, orderBy("createdAt", "desc")); 
        }

        if(docCollection == "rooms"){
          q = await query(
            collectionRef,
            where("users", "array-contains", user.uid),
            ); 
        
        }
        
        await onSnapshot(q, (querySnapshot) => {
          dispatch(setCollection(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            })
          )
          ))
  
          setLoading(false)
        });
      }catch(err){
        console.log(err)
      }
    }

    getData()

  },[docCollection])

  useEffect(() => {
      return () => setCancelled(true);
  },[])

  return {
    loading, 
  }
}
