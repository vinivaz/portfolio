// Hooks
import { useEffect, useState, useRef } from "react"

const ImageSlide = ({images}) => {
  
  const index = useRef(0)
  const [currentSrc, setCurrentSrc ] = useState(images[0])

  useEffect(() => {
    const interval = setInterval(()=> {
      // console.log(images)
      // setCurrentSrc(images[currentIndex])
      // console.log((index.current + 1) === images.length)
      if(index.current === images.length -1){
        index.current = 0
        setCurrentSrc(images[0])
      }else{
        index.current = index.current + 1
        setCurrentSrc(images[index.current])     
      }

    }, 3700)
    3700//

    return () => {clearInterval(interval)}
  },[])

  return (
    <img src={currentSrc} alt="image post"/>
  )
}

export default ImageSlide