import {useEffect, useState} from 'react'

import DOMPurify from 'dompurify';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Redux
// import { setTextBlock } from '../../../../state/post/postSlice';
import { setTextBlock, setDeletingBlock } from '../../../../state/post/postSlice';

import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "./TextBlock.css"


const modules = {
  toolbar: [
    [{header: [1,2,3,4,5,6, false],}],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [
      {list: "ordered"},
      {list: "bullet"},
      // {indent: "-1"},
      // {indent: "+1"}
    ],
  ]
}

const TextBlock = ({block}) => {

  const [ value, setValue ] = useState(block.content)
  const [ textSeleted, setTextSelected ] = useState("")

  const dispatch = useDispatch()

  const sanitizer = (text) => {
    const sanitizedContent = DOMPurify.sanitize(
      text,
      {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'ul', 'li', 'ol',
          'b', 'q', 'div', 'p', 'a', 'i', 'span', 'u', 's', 'blockquote'
        ],
        ALLOWED_ATTR: ['style', 'href', 'rel', 'target']
      }
    )

    return sanitizedContent
  }

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
    console.log(block)
  }

  const onTest = (e) => {

    const windowWidth = window.innerWidth;
    console.log(e)
    if(e && e.length > 0 && windowWidth < 700){
      setTextSelected("  text_selected")
    }else{
      setTextSelected("")
    }

  }

  return (
      <div
        className="block txt"
        id={block.id}
      > 
        <span
          className="delete_block"
          onClick={() => handleDeleteBlock(block)}
        >
          &#10005;
        </span>
        <ReactQuill
          theme='snow'
          value={value}
          onChange={(text) => {
            setValue(text)
            dispatch(setTextBlock({block, content:sanitizer(text)}))
          }}
          onBlur={() => {
            setTextSelected("")
            setValue(block.content)
          }}
          className={"editor_input" + textSeleted}
          onChangeSelection={(e) => onTest(e)}
          modules={modules}
        />
        {/* <div className="block-ctrl">
          <button
            className="add-txt-link-btn"
            id={block.id + "-add-link-btn"}
          >
            add link
          </button>
          <button
            id={block.id + "-button"}
          >
            x
          </button>
        </div>
        <div
          className="block-content txt" 
          id={block.id + "-txt"}
        >
          <div
            className="final-text editable notranslate"
            id={block.id + "-p"}
            onBlur={handleBlur}
          >
            {block.content}
          </div>
        </div> */}
      </div>
  )
}

export default TextBlock;