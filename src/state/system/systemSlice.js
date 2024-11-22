// Img
import logo from "/logo.svg";
import lih_logo from "/lih_logo.svg";

import { openFullscreen, closeFullscreen } from "../../services/appService";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: {
    hours: "",
    minutes: "",
    day: "",
    weekday: "",
    month: "",
    monthName: "",
    fullMonthName: "",
    year: ""
  },

}

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setTime: (state) => {
      const formatNumber = (number) => (number < 10 ? `0${number}` : number);
      const time = new Date()

      state.time = {
        hours: formatNumber(time.getHours()),
        minutes: formatNumber(time.getMinutes()),
        day: formatNumber(time.getDate()),
        weekday: time.toLocaleDateString("default", { weekday: 'short' }).slice(0, -1),
        month: formatNumber(time.getMonth() + 1),
        monthName: time.toLocaleString('default', { month: 'short' }).slice(0, -1),
        fullMonthName: time.toLocaleString('default', { month: 'long' }),
        year: time.getFullYear()
      }
      
    },
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

export const { setTime, changeCurrent, showRunningApps, goToMenu, setAppFullscreen, unsetAppFullscreen } = systemSlice.actions;

export default systemSlice.reducer;