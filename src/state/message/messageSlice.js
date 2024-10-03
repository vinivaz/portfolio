import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messages: [],
  staus: null,
  message: null,
  newMessageText: "",
  handlingMessage: {
    status: null,
    message: null
  },
  image: {
    file: null,
    dataURL: null
  }
}

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setNewMessageText: (state, action) => {

      state.newMessageText = action.payload
    },
    setHandlingMessage: (state, action) => {
      const { status, message } = action.payload;

      state.handlingMessage = {
        status,
        message
      }
    },
    setImage: (state, action) => {
      const { file, dataURL } = action.payload
      state.image = {
        file,
        dataURL
      }
      console.log(state.image.file)
    },
    resetMessages: (state) => {
      state.messages = [];
    }
  }
})

export const { setMessages, setNewMessageText, setHandlingMessage, resetMessages, setImage } = messageSlice.actions;

export default messageSlice.reducer;