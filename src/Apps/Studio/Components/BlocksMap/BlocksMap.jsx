// Assets
import image_icon from "/studio/image-icon.svg";

// Components
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Redux
import { setBlocks } from "../../../../state/post/postSlice";

const BlockMapHandler = ({ index, block }) => {

  const scrollToBlockView = (blockId) =>{
    const windowHeader = document.getElementById("window_header_studio_pop");
    const scrollingElement = document.querySelector(".post-exemple");
    const blockElement = document.getElementById(blockId);

    // const navBar = document.querySelector(".nav-bar");

    const offset= windowHeader.getBoundingClientRect().top + 5;

    const yPosition = blockElement.getBoundingClientRect().top - scrollingElement.getBoundingClientRect().top + scrollingElement.scrollTop - offset;
 
    scrollingElement.scrollTo({ top: yPosition, behavior: 'smooth' });
  }

  switch (block.type) {
    case "img":
      return (
        <Draggable draggableId={block.id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="block-icon-vessel img ui-sortable-handle"
              id="687124840574-b-map"
              onClick={() => scrollToBlockView(block.id)}
            >
              <div className="block-icon img" id="687124840574-map">
                <img src="/studio/image-icon.svg" />
              </div>
            </div>
          )}
        </Draggable>
      );
    case "text":
      return (
        <Draggable draggableId={block.id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="block-icon-vessel txt ui-sortable-handle"
              id={"26923191356-b-map"}
              onClick={() => scrollToBlockView(block.id)}
            >
              <div className="block-icon txt" id="26923191356-map" >
                <img src="/studio/text-only.svg" />
              </div>
            </div>
            )}
        </Draggable>
      );
    case "tt-embed":
      return (
        <Draggable draggableId={block.id} index={index}>
          {(provided) => (
            <div 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="block-icon-vessel"
              onClick={() => scrollToBlockView(block.id)}
            >
              <div className="block-icon tt" id="896860645971-map" >
                <img src="/studio/twitter-icon.svg" />
              </div>
            </div>
          )}
      </Draggable>
      );
    case "yt-embed":
      return (
        <Draggable draggableId={block.id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="block-icon-vessel yt"
              id="43026564852-b-map"
              onClick={() => scrollToBlockView(block.id)}
            >
              <div className="block-icon yt" id="43026564852-map">
                <img src="/studio/youtube-icon.svg" />
              </div>
            </div>
          )}
        </Draggable>
      );
    default:
      return null;
  }
};

const BlocksMap = () => {
  const { blocks } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const reorderBlocks = (blocks, startIndex, endIndex) => {
    const newBlocks = Array.from(blocks);
    const [shiftingBlock] = newBlocks.splice(startIndex, 1)
    newBlocks.splice(endIndex, 0, shiftingBlock)

    return newBlocks;
  } 

  const onDragEnd = (result) => {
    if(!result.destination){
      return;
    }

    const newBlocks = reorderBlocks(blocks, result.source.index, result.destination.index)
    dispatch(setBlocks(newBlocks))
  };
  
  return (
    <div className="map-placement post-editor">
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="block_map"
          type="list"
          direction="vertical"
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="map ui-sortable"
            >
              {blocks.map((block, index) => (
                <BlockMapHandler
                  key={block.id}
                  index={index}
                  block={block}
                />
              ))}
              {provided.placeholder}
            </div>
          )}

        </Droppable>
      </DragDropContext>

    </div>
  );
};

export default BlocksMap;
