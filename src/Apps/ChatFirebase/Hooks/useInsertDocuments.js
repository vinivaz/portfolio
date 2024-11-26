import { useState, useEffect } from "react";
import{ db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export const useInsertDocument = (docCollection) => {
    const [ loading, setLoading ] = useState(false)
    console.log("aaaaaaaaaaaaaaafgsdg fdg ")
    //dealing with memory leaks
    const [ cancelled, setCancelled ] = useState(false)

    const insertDocument = async(document) => {
        if(cancelled || loading)return;
        setLoading(true);

        try{

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                document
            )
            console.log("inserted Doc :", insertedDocument)

            setLoading(false)
            if(cancelled) return;

            return insertDocument

        }catch(error){
            setLoading(false)
            console.log(error)
            if(cancelled) return;


        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    },[])

    return {
        insertDocument,
        loading
    }
}
