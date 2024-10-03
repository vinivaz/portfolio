// Styles
import "./ShortCut.css"


// Hooks
import useDrag from "../../Hooks/useDrag";

const ShortCut = ({img, name, popUp, dragElementsId}) => {

 
  return (dragElementsId &&
    
    <div id={dragElementsId[0]} className="shortcut" onClick={() => popUp()}>
      <img id={dragElementsId[1]} draggable="false" src={img} alt={name}/>
      <span>{name}</span>
    </div>
  )
}

export default ShortCut