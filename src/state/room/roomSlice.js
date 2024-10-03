import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  room: null
}


const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload
    }
  }
})

export const { setRoom, setRooms } = roomSlice.actions;

export default roomSlice.reducer;