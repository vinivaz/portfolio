
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Styles
import './App.css'



// Components
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OS from './pages/OS/OS';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from './Hooks/useAuthentication';
import { useDispatch, useSelector } from 'react-redux';

//firebase auth
import { onAuthStateChanged } from "firebase/auth";
import Chat from './pages/Chat/Chat';

// Slices
import { setUser } from './state/user/userSlice';


function App() {


  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user);

  const loadingUser = user === undefined;

  const { auth } = useAuthentication()



  useEffect(( ) => {
    
    onAuthStateChanged(auth, (user) => {
      if(user){
        const userData = {
          name: user.displayName,
          email: user.email,
          avatarURL: user.photoURL,
          uid: user.uid
        }

        dispatch(setUser(userData))
      }else{
        dispatch(setUser(null))
      }

    })
  },[auth])

  if(loadingUser){
    return <p>Loading...</p>
  }

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/chat" element={user ? <Chat/> : <Navigate to="/login"/>}/>
          <Route path="/os" element={user ? <OS/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/os"/>}/>
          <Route path="/register" element={!user ? <Register/> : <Navigate to="/os"/>}/>
          <Route path="*" element={user ? <OS/> : <Navigate to="/login"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// // Components
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import OS from './pages/OS/OS';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';

// // Hooks
// import { useState, useEffect } from "react";
// import { useAuthentication } from './Hooks/useAuthentication';
// import { useDispatch, useSelector } from 'react-redux';

// //firebase auth
// import { onAuthStateChanged } from "firebase/auth";
// import Chat from './pages/Chat/Chat';

// // Slices
// import { setUser } from './state/user/userSlice';

// function App() {

//   const dispatch = useDispatch()


//   const { user } = useSelector((state) => state.user);

//   const loadingUser = user === undefined;

//   const { auth } = useAuthentication()
  
//   useEffect(( ) => {
 
//     onAuthStateChanged(auth, (user) => {
//       if(user){
//         const userData = {
//           name: user.displayName,
//           email: user.email,
//           avatarURL: user.photoURL,
//           uid: user.uid
//         }
  
//         dispatch(setUser(userData))
//       }else{
//         dispatch(setUser(null))
//       }

//     })
//   },[auth])

//   if(loadingUser){
//     return <p>Loading...</p>
//   }

//   return (
//     <>

//       <BrowserRouter>
//         <Routes>

//           <Route path="/chat" element={user ? <Chat/> : <Navigate to="/login"/>}/>
//           <Route path="/os" element={user ? <OS/> : <Navigate to="/login"/>}/>
//           <Route path="/login" element={!user ? <Login/> : <Navigate to="/os"/>}/>
//           <Route path="/register" element={!user ? <Register/> : <Navigate to="/os"/>}/>
//           <Route path="*" element={user ? <OS/> : <Navigate to="/login"/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

