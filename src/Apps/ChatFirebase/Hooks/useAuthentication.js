import {
    //getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

import { addDoc, collection, Timestamp } from "firebase/firestore";

import { db, auth } from "../firebase/config";


// Hooks
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../../../state/user/userSlice";
import { set } from "firebase/database";

export const useAuthentication = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    // console.log(auth)

    //cleanup
    //dealing with memory leak
    const [ cancelled, setCancelled ] = useState(false);

    //const auth = getAuth()

    const dispatch = useDispatch()

    function checkIfItsCancelled() {
        if(cancelled){
            return;
        }
    }

    const login = async(data) => {
        checkIfItsCancelled();
        setError(null)
        setLoading(true);

        try {
            const  user  = await signInWithEmailAndPassword(auth, data.email, data.password)
            // await updateProfile(user, {
            //     displayName: data.displayName
            // });
            console.log(user)
            setLoading(false)
            return user
        }catch(error){
            console.log(error)
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if(error.message.includes("invalid-credential")){
                systemErrorMessage = "Usuário ou senha incorreta."
            } else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta."
            } else {
                systemErrorMessage = "Houve um erro, por favor tente mais tarde."
            }
            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    const createUser = async (data) => {
        checkIfItsCancelled();
        if(loading)return;

        setError(null);
        setLoading(true);

        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            if(user){
                const userData = await addDoc(collection(db, "users"), {
                    avatarURL: user.photoURL,
                    uid: user.uid,
                    name: data.name,
                    id: user.uid,
                    createdAt: new Date(Date.now()).toLocaleString()
                });

                console.log(userData);
            };


            await updateProfile(user, {
                displayName: data.name
            });

            setLoading(false);

            return user;
        }catch(error){
            console.log(error);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "Email já cadastrado.";
            } else {
                systemErrorMessage = "Houve um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    };

    const logOut = () => {
        checkIfItsCancelled()
        signOut(auth)
        dispatch(setUser(null))

    }

    useEffect(() => {
        return () => setCancelled(true);
    },[]);

    return {
        auth,
        login,
        createUser,
        error,
        loading,
        logOut
    }

}