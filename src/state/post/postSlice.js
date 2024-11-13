import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  deletingBlock: null,
  title: 'Lady Gaga - The Fame Monster',
  author: 'Vini',
  date: '27/05/2022',
  blocks: [
    {
      "id": 548142114780,
      "type": "img",
      "url": "http://localhost:3333/images/5a97e519a3366cea50421c8d8fafa275-hq720.jpg",
      "_id": "672eb50ad2711f9110c8abe9"
    },
    {
      id: 1279924053301,
      type: "img",
      url: 'https://pbs.twimg.com/media/FT3AACEVEAA8Rcq?format=jpg&name=large',
      // credits: {
      //   content: 'lady gaga',
      //   link: 'abubleh'
      // },
      // description: 'Lady Gaga'
      // url: 'https://i.pinimg.com/564x/eb/00/c1/eb00c1980089fd880366bf47018eddef.jpg'
    },
    {
      "type": "yt-embed",
      "content": "NMRhx71bGo4",
      "id": 15618181980
    },
    {
      "id": 344765269147,
      "content": "1854264521168154650",
      "type": "tt-embed",
      "_id": "67345bc531a55b2d24726e9f"
    },
    {
      id: 55719264018,
      type: 'text',
      content: 'Im sitting in my brothers roomHavent slept in a week or two, or two I think I might have fallen in love What am I to do?'
    },
    {
      type: 'tt-embed',
      content: '1530590558959198208',
      id: 46126235279
    },
    {
      id: 145884951979,
      type: 'text',
      content: 'Two years ago we set out to create new, bold makeup that is supercharged with the worlds most innovative skincare ingredients.  Im proud that @hauslabs is launching a new makeup line that we believe represents the  future of clean artistry.  I hope we change your perception of what clean makeup can be, and that you will love our products as much as I do.'
    },
    {
      id: 34607344840,
      type: 'yt-embed',
      content: 'ohs0a-QnFF4'
    },
    {
      id: 696958368640,
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
      const {block, url} = action.payload;
      state.blocks = state.blocks.map((singleBlock) => {
        if(singleBlock.id === block.id){
          return {
            ...singleBlock,
            url
          }
        }else{
          return singleBlock
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
    }
  },
  
})

export const { setTitle, setTextBlock, setImageBlock, setDeletingBlock, deleteBlock} = postSlice.actions;

export default postSlice.reducer;