import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message/messageSlice.js";
import userReducer from "./user/userSlice.js"
import roomReducer from "./room/roomSlice.js"
import appReducer from "./app/appSlice.js"
import postReducer from "./post/postSlice.js";
import systemReducer from "./system/systemSlice.js";


export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
    room: roomReducer,
    app: appReducer,
    post: postReducer,
    system: systemReducer
  }
});