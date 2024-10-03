import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuthState: null,
  user: undefined,
  users: undefined,
  loading: null,
  error: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserAuthState: (state, action) => {
      state.userAuthState = action.payload;
      
      if(action.payload != null){
        const userData = {
          name: action.payload.displayName,
          email: action.payload.email,
          avatarURL: action.payload.photoURL,
          uid: action.payload.uid
        }
        state.user = userData
      }

    }

  }
})

export const { setUser, setUsers, setLoading, setUserAuthState } = userSlice.actions;

export default userSlice.reducer;