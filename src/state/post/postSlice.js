import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid";

const initialState = {
  deletingBlock: null,
  title: 'Lady Gaga - The Fame Monster',
  author: 'Vini',
  date: '27/05/2022',
  blocks: [
    {
      id: "1",
      type: "img",
      url: "http://localhost:3333/images/5a97e519a3366cea50421c8d8fafa275-hq720.jpg",
      credits: {
        content: "currents",
        link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
      },
      description: "the"
    },
    {
      id: "2",
      type: "img",
      url: 'https://pbs.twimg.com/media/FT3AACEVEAA8Rcq?format=jpg&name=large',
      credits: {
        content: "currents",
        link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
      },
      description: "the"
      // credits: {
      //   content: 'lady gaga',
      //   link: 'abubleh'
      // },
      // description: 'Lady Gaga'
      // url: 'https://i.pinimg.com/564x/eb/00/c1/eb00c1980089fd880366bf47018eddef.jpg'
    },
    {
      id: "3",
      type: "yt-embed",
      content: "NMRhx71bGo4",
    },
    {
      id: "4",
      content: "1854264521168154650",
      type: "tt-embed",
      _id: "67345bc531a55b2d24726e9f"
    },
    {
      id: "5",
      type: 'text',
      content: 'Im sitting in my brothers roomHavent slept in a week or two, or two I think I might have fallen in love What am I to do?'
    },
    {
      id: "6",
      type: 'tt-embed',
      content: '1530590558959198208',

    },
    {
      id: "7",
      type: 'text',
      content: 'Two years ago we set out to create new, bold makeup that is supercharged with the worlds most innovative skincare ingredients.  Im proud that @hauslabs is launching a new makeup line that we believe represents the  future of clean artistry.  I hope we change your perception of what clean makeup can be, and that you will love our products as much as I do.'
    },
    {
      id: "8",
      type: 'yt-embed',
      content: 'ohs0a-QnFF4'
    },
    {
      id: "9",
      type: 'text',
      content: 'Two years ago we set out to create new, bold makeup that is supercharged with the worlds most innovative skincare ingredients.  Im proud that @hauslabs is launching a new makeup line that we believe represents the  future of clean artistry.  I hope we change your perception of what clean makeup can be, and that you will love our products as much as I do.'
    },
  ]
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
      console.log(action.payload)
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
    setTextBlock: (state, action) => {
      const {block, content} = action.payload;
      state.blocks = state.blocks.map((singleBlock) => {
        if(singleBlock.id === block.id){
          return {
            ...singleBlock,
            content
          }
        }else{
          return singleBlock
        }
      })
    },
    setImageBlock: (state, action) => {
      const {blockId, modifiedBlock} = action.payload;
      state.blocks = state.blocks.map((singleBlock) => {
        if(singleBlock.id === blockId){
          return modifiedBlock;
        }else{
          return singleBlock;
        }
      })
    },
    setDeletingBlock: (state, action) => {
      state.deletingBlock = action.payload;
    },
    deleteBlock: (state, action) => {
      const block = action.payload;
      state.blocks = state.blocks.filter((singleBlock) => {
        return singleBlock.id !== block.id
      })
    },
    createBlock: (state, action) => {
      const type = action.payload;

      let newBlock;

      if(type == "text"){
        newBlock = {
          type: "text",
          content: "",
          id: v4().toString()
        }
      }

      if(type == "img"){
        newBlock = {
          type: "img",
          url: "",
          id: v4().toString(),
          credits:{
            content: "currents",
            link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
          },
          description: ""
        }
      }

      if(type == "tt-embed"){
        newBlock = {
          type: "tt-embed",
          content: "",
          id: v4().toString()
        }
      }

      if(type == "yt-embed"){
        newBlock = {
          type: "yt-embed",
          content: "",
          id: v4().toString()
        }
      }


      state.blocks = [
        ...state.blocks,
        newBlock
      ]
    }

  },
  
})

export const { setTitle, setBlocks, setTextBlock, setImageBlock, setDeletingBlock, deleteBlock, createBlock} = postSlice.actions;

export default postSlice.reducer;