// Img
import logo from "/logo.svg";
import lih_logo from "/lih_logo.svg";

import { openFullscreen, closeFullscreen } from "../../services/appService";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    previous: "",
    current: "menu",
    viewport: "mobile",
    fullscreen: {
      status: false,
      name: "",
      elementId:"",
      width: "",
      height: "",
      top: "",
      right: "",
      left: "",
      x: "",
      y: "",
    }

}

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    changeCurrent: (state, action) => {
      
      state.current = action.payload;
    },
    showRunningApps: (state, action) => {
      
      state.current = "running_apps";
    },
    goToMenu: (state, action) => {
      
      state.current = "menu";
    },
    setAppFullscreen: (state, action) => {
      const { app } = action.payload;
      const appElement = document.getElementById(app.elementId)
      const { width, height, top, right, left, x, y  } = appElement.getBoundingClientRect()
      console.log(app)
      const newFullscreen = {
        status: true,
        name: app.name,
        elementId: app.elementId,
        width,
        height,
        top,
        right,
        left,
        x,
        y
      }

      appElement.removeAttribute("style");

      appElement.classList.add("fullscreen")

      state.current = "fullsized_app"
      state.fullscreen = newFullscreen;

      console.log(state.fullscreen.status)
    },
    unsetAppFullscreen: (state, action) => {
      const { elementId, width, height, top, right, left, x, y} = state.fullscreen;
      const appElement = document.getElementById(elementId)


      appElement.classList.remove("fullscreen");

      appElement.style.width = width + "px";

      appElement.style.height= height + "px",
      appElement.style.top = top + "px",
      appElement.style.right= right + "px",
      appElement.style.left = left + "px",
      appElement.style.x = x + "px",
      appElement.style.y = y + "px"
      
      state.fullscreen = initialState.fullscreen;

    }

  }
})

export const {  changeCurrent, showRunningApps, goToMenu, setAppFullscreen, unsetAppFullscreen } = systemSlice.actions;

export default systemSlice.reducer;