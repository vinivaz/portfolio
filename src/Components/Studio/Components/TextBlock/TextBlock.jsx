import {useState} from 'react'

import DOMPurify from 'dompurify';

// Hooks
import { useDispatch } from 'react-redux';

// Redux
// import { setTextBlock } from '../../../../state/post/postSlice';
import { setTextBlock, setDeletingBlock } from '../../../../state/post/postSlice';

import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";



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
  const [ value, setValue ] = useState("")

  const dispatch = useDispatch()

  const handleBlur = (e) => {
    if(e.target.classList.contains("editable")){
      console.log(e.target.innerHTML)
      console.log(e.target.innerText)
      const sanitizedContent = DOMPurify.sanitize(
        e.target.innerHTML,
        {
          ALLOWED_TAGS: ['b', 'q', 'div', 'p', 'a', 'i', 'span'],
          ALLOWED_ATTR: ['style', "href"]
        }
      )
      console.log(sanitizedContent)

      dispatch(setTextBlock({block, content: sanitizedContent}))

      e.target.innerHTML = sanitizedContent
      e.target.removeAttribute("contentEditable")
    }
  };

  const handleDeleteBlock = (block) => {
    dispatch(setDeletingBlock(block))
    console.log(block)
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
          value={block.content}
          onChange={(text) => dispatch(setTextBlock({block, content:text}))}
          className='editor_input'
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