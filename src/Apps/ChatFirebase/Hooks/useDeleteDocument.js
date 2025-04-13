import { useState, useEffect, useReducer } from "react";
import{ db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null
}

const deleteReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return { loading: true, error: null};
        case "DELETED_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const useDeleteDocument = (docCollection) => {


    const [ response, dispatch ] = useReducer(deleteReducer, initialState)

    //dealing with memory leaks
    const [ cancelled, setCancelled ] = useState(false)

    const checkCancelledBeforeDispatch = (action) => {
        console.log("cancelado: ",cancelled)
        if(!cancelled){
            dispatch(action)
            console.log("RESPONSE",response)
        }
    }

    const deleteDocument = async(id) => {
        console.log("tentando deletar documento")
        checkCancelledBeforeDispatch({
            type: "LOADING"
        })



        try{
            const deleteDocument = await deleteDoc(doc(db, docCollection, id))

            checkCancelledBeforeDispatch({
                type: "DELETED_DOC",
                payload: deleteDocument
            })

        }catch(error){
            checkCancelledBeforeDispatch({
                type: "ERROR",
                payload: error.message
            })

            console.log(error)
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    },[])

    return {
        deleteDocument,
        response
    }
}
