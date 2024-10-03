import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "test app 1",
      open: true,
      zIndex: 1,
      id: 1,
      icon: ""
    },
    {
      title: "test app 2",
      open: true,
      zIndex: 2,
      id: 2,
      icon: ""
    },
  ],
  task: {},

  error: false,
  success: false,
  loading: false,
  message: null
}

// Search photo by title
export const searchPhoto = createAsyncThunk(
  "task/open",
  async(query, thunkAPI) => {

    // const token = thunkAPI.getState().auth.user.token;

    // const data = await photoService.search( query, token );

    // // Check if theres errors
    // if(data.errors){
    //   return thunkAPI.rejectWithValue(data.errors[0])
    // }

    // return data;
  }
)

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(searchPhoto.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(searchPhoto.fulfilled, (state, action ) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.photos = action.payload;
    })


  }
});

export const { resetMessage } = taskSlice.actions;
export default taskSlice.reducer;