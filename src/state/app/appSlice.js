// Img
import logo from "/chat_logo.png";
// import lih_logo from "/lih_logo.png";
import vshop_logo from "/vshop_logo.png";
import lih_logo from "/currents_logo.png";
import portfolio_logo from "/portfolio_logo.png";
import studio_pop_logo from "/studio/studio_pop_icon.png";

import {isMobile } from "../../services/appService";

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
      display_name: "chat",
      zIndex: 10,
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
      previous_page: "rooms",
      size_class: ""
    },
    "Vshop": {
      id: 1,
      name: "Vshop",
      display_name: "Vshop",
      zIndex:20,
      icon: vshop_logo,
      minimized: false,
      fullscreen: false,
      open: false,
      appRect: undefined,
      elementId: "vshopId",
      drag_elements: ["vshopdraggable"],
      storedStyle: undefined,
      width: 560,
      height: 350,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      page: "",
      previous_page: "",
      size_class: ""
    },
    "lih": {
      id: 1,
      name: "lih",
      display_name: "lih",
      zIndex:20,
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
      previous_page: "",
      size_class: ""
    },
    "portfolio": {
      id: 3,
      name: "portfolio",
      display_name: "portfolio",
      zIndex: 30,
      icon: portfolio_logo,
      minimized: false,
      fullscreen: false,
      open: true,
      appRect: undefined,
      elementId: "portfolioId",
      drag_elements: ["portfolioDraggableElementId"],
      storedStyle: undefined,
      width: 800,
      height: 600,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      page: "",
      previous_page: "",
      size_class: ""
    },
    "studio_pop": {
      id: 4,
      name: "studio_pop",
      display_name: "Studio Pop",
      zIndex: 40,
      icon: studio_pop_logo,
      minimized: false,
      fullscreen: false,
      open: false,
      appRect: undefined,
      elementId: "studio_pop_id",
      drag_elements: ["studio_pop_draggable_element_id"],
      storedStyle: undefined,
      width: 800,
      height: 600,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      page: "home",
      previous_page: "",
      size_class: ""
    }
  }
}

const handleAppSize = (state, appName) => {
  if(appName == null)return;
  const { width } = state.apps[appName];


  if(width <= 390){
    state.apps[appName].size_class = " sm"
  }

  if(width > 390 && width < 700){
    state.apps[appName].size_class = " md"
  }
  
  if(width > 700 && width < 900){
    state.apps[appName].size_class = " nm"
  }

  if(width > 900){
    state.apps[appName].size_class = ""
  }
}

const bringAppToFront = (state, appName) => {
  const appIndexes = Object.keys(state.apps);

  const appQuantitys = appIndexes.length;

  const frontZIndex = appQuantitys * 10;

  const lastZIndex = 10;

  const appToFront = state.apps[appName]

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

      bringAppToFront(state, action.payload)
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

      bringAppToFront(state, action.payload);

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
        size_class: isMobile()? state.apps[name].size_class: ""
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

      handleAppSize(state, app.name)
    },
    setMobileMode:(state, action) => {
      state.mobile_settings.mode = action.payload;
    },
    handleAppsZIndex: (state, action) => {
      
      bringAppToFront(state, action.payload)
    },
    updateAppRect: (state, action) => {
      const rect = action.payload.appRect
      const app = state.apps[action.payload.name]
      
      state.apps[action.payload.name] = {
        ...app,
        ...rect
      }
      handleAppSize(state, action.payload.name)

    },
    setPage: (state, action) => {
      const { name, page } = action.payload;
      
      state.apps[name].previous_page = state.apps[name].page,

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