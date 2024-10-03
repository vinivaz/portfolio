

// Hooks
import { useEffect, useRef } from "react";

export const useResizeHandler = (elementId) => {

  const threshold = 700;

  const isMobile = () => {
   if(window.innerWidth <= threshold){
    return true
   }else{
    return false
    }
  }

  const appWidth = {
    width: 200
  }

  const getWindowWidth = () => {

  }

  const mobile = useRef(null)
  const elementMetrics = useRef(null)
  console.log("uer")

  useEffect(() => {

    const element = document.getElementById(elementId)

    const handleSize = () => {
      console.log("isMobile(): ", isMobile())
      if(isMobile()){
        if(mobile.current == true){
          console.log("mobile ta true, nãp vou fazer mais nada")
          return;
        }
  
        mobile.current = true
        console.log("mobile não tava true, mudei ele pra true")
        return;
      }else{
        if(mobile.current == false){
          console.log("o mobile ja ta falso, não vou ajustar");
          return;
        }
        mobile.current = false
        console.log("o mobile não tava falso, coloquei ele pra false");
        return
      }
    }

    window.addEventListener('resize', onResize)

    const cleanUp = () => {
      console.log("fez o cleanup")
      window.removeEventListener('resize', handleSize)
    }

    return cleanUp;
  }, [])
}