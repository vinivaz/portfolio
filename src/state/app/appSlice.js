// Img
import logo from "/logo.svg";
import lih_logo from "/lih_logo.svg";

import { openFullscreen, closeFullscreen, isMobile } from "../../services/appService";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile_settings: {
    mode: "menu",
    viewport: "not-mobile",
  },
  apps: {
    "chat": {
      id: 2,
      name: "chat",
      zIndex: 20,
      icon: logo,
      minimized: false,
      fullscreen: false,
      open: false,
      appRect: undefined,
      elementId: "chatId",
      drag_elements: ["chatDraggableElementId"],
      storedStyle: undefined,
      width: 800,
      height: 600,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      page: "rooms",
      size_class: ""
    },
    "lih": {
      id: 1,
      name: "lih",
      zIndex:30,
      icon: lih_logo,
      minimized: false,
      fullscreen: false,
      open: false,
      appRect: undefined,
      elementId: "letItHappen",
      drag_elements: ["draggable1"],
      storedStyle: undefined,
      width: 560,
      height: 350,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      page: "",
      size_class: ""
    }
  }
}

const bringAppToFront = (state, action) => {
  const appIndexes = Object.keys(state.apps);

  const appQuantitys = appIndexes.length;

  const frontZIndex = appQuantitys * 10;

  const lastZIndex = 10;

  const appToFront = state.apps[action.payload]

  if(appToFront.zIndex === frontZIndex)return;

  appIndexes.map((app) => {

    if(state.apps[app].id === appToFront.id){
      state.apps[app].zIndex = frontZIndex 

    }else{
      if(state.apps[app].zIndex === lastZIndex)return;
      state.apps[app].zIndex = (state.apps[app].zIndex - 10)
    }
  })
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openApp: (state, action) => {
      const app = state.apps[action.payload]

      state.apps[action.payload] = {
        ...app,
        open: true,
        minimized: false,

      }
    },
    closeApp: (state, action) => {
      const app = state.apps[action.payload]

      state.apps[action.payload] = {
        ...app,
        open: false,
        minimized: false,
      }
    },
    minimizeApp: (state, action) => {
      
      const app = state.apps[action.payload];
      app.minimized = true;

    },
    showApp: (state, action) => {
      
      const app = state.apps[action.payload];
      app.minimized = false;
      state.mobile_settings.mode = "fullsized_app";

      bringAppToFront(state, action);

    },
    minimizeMost: (state, action) => {
      const appIndexes = Object.keys(state.apps);
      const name = action.payload;
      appIndexes.map((app) => {
        if(!state.apps[app].name == name){
          state.apps[app].minimized = true
          state.apps[app].fullscreen = false

        }

      })
    },
    minimizeAll: (state, action) => {
      const appIndexes = Object.keys(state.apps);
      state.mobile_settings.mode = "menu"
      appIndexes.map((app) => {
        if(state.apps[app].fullscreen){
          state.apps[app].fullscreen = false
        }
        state.apps[app].minimized = true
      })

      // const appElement = document.getElementById(app.elementId)

      // appElement.setAttribute("style", state.apps[app.name].storedStyle)

      // state.apps[app.name] = {
      //   ...state.apps[app.name],
      //   storedStyle: undefined,
      //   fullscreen: false,
      //   minimized: isMobile(),
      // }
    },
    setAppFullscreen: (state, action) => {
      
      const { app: fullscreenApp } = action.payload;

      const appIndexes = Object.keys(state.apps);


      /*
        remove the fullscreen state of every other app
        if the system is in the mobile state minimize every other app,
      */
      appIndexes.map((app) => {
        if(!state.apps[app].name == fullscreenApp.name){
          state.apps[app] = {
            ...state.apps[app],
            fullscreen: false,
            minimized: state.apps[app].minimized ? true : isMobile()
          }
        }
      })

      const { name, elementId } = fullscreenApp;

      const appElement = document.getElementById(elementId)
      /*it stores the style of the element, for when the app is not
      fullscreen anymore, it can return to the element */
      const storedStyle = appElement.getAttribute("style");


      state.apps[name] = {
        ...state.apps[name],
        storedStyle,
        fullscreen: true,
        minimized: false,
      }

      state.mobile_settings.mode = "fullsized_app"

      appElement.removeAttribute("style");

    },
    unsetAppFullscreen: (state, action) => {
      
      const { app } = action.payload;
      
      const appElement = document.getElementById(app.elementId)

      appElement.setAttribute("style", state.apps[app.name].storedStyle)

      state.apps[app.name] = {
        ...state.apps[app.name],
        storedStyle: undefined,
        fullscreen: false,
        minimized: isMobile(),
      }


    },
    setMobileMode:(state, action) => {
      state.mobile_settings.mode = action.payload;
    },
    handleAppsZIndex: (state, action) => {
      
      bringAppToFront(state, action)
    },
    updateAppRect: (state, action) => {
      const rect = action.payload.appRect
      const app = state.apps[action.payload.name]
      
      state.apps[action.payload.name] = {
        ...app,
        ...rect
      }
      if(rect == null)return;

      if(rect.width <= 390){
        state.apps[action.payload.name].size_class = " sm"
      }

      if(rect.width > 390 && rect.width < 700){
        state.apps[action.payload.name].size_class = " md"
      }
      
      if(rect.width > 700){
        state.apps[action.payload.name].size_class = ""
      }
    },
    setPage: (state, action) => {
      const { name, page } = action.payload;

      state.apps[name].page = page;
    },
    setSizeClass: (state, action) => {
      const { name, sizeClass } = action.payload;

      state.apps[name].size_class = sizeClass;
    }

  },
})

export const {
  openApp,
  closeApp,
  minimizeApp,
  showApp,
  minimizeMost,
  minimizeAll,
  setAppFullscreen,
  unsetAppFullscreen,
  setMobileMode,
  handleAppsZIndex,
  updateAppRect,
  setPage,
  setSizeClass

} = appSlice.actions;

export default appSlice.reducer;