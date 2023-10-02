import { createSlice } from "@reduxjs/toolkit";

interface imageState {
  source: string
}

const initialState : imageState = {
  source : ""
} 

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    uploadImage: (state, action) => {      
      state.source = action.payload
    },
    deleteImage: (state) => {
      state.source = ""
    }
  }
})

export default imageSlice.reducer;
export const {uploadImage, deleteImage} = imageSlice.actions