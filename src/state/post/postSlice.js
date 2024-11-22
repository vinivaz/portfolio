import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import DOMPurify from 'dompurify';

const initialState = {
  deletingBlock: null,
  creatingTopic: null,
  visualizingPost: false,
  topics: [
    "NOTÍCIA",
    "MÚSICA"
  ],
  // topics: [
  //   {
  //     name: "NOTÍCIA",
  //     color: "blue"
  //   },
  //   {
  //     name: "MÚSICA",
  //     color: "blue"
  //   },
  // ],
  topic: "NOTÍCIA",
  title: 'Dive deep into the Ghibli’s universe.',
  subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  author: 'Vini',
  date: '21 de Novembro, 2023',
  blocks: [
    {
      id: "1",
      type: "img",
      url: "/studio/Totoro1.png",
      credits: {
        content: "currents",
        link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
      },
      description: "the"
    },
    {
      id: "2",
      type: 'text',
      content: "<h3>My Neighbour Totoro</h3><br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
      id: "3",
      type: "img",
      url: '/studio/Totoro2.png',
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
      id: "9",
      type: 'text',
      content: "<h3>Stunishing landscapes</h3><br/> consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
    },
    {
      id: "4",
      type: "yt-embed",
      content: "NMRhx71bGo4",
    },
    {
      id: "5",
      content: "1854264521168154650",
      type: "tt-embed",
      _id: "67345bc531a55b2d24726e9f"
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
  ]
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      const postChanges = action.payload;
      state = {
        ...state,
        ...postChanges
      }

      console.log(postChanges)
    },
    setTitle: (state, action) => {
      state.title = action.payload;
      console.log(action.payload)
    },
    setSubtitle: (state, action) => {
      state.subtitle = action.payload;
      console.log(action.payload)
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
    setBlock: (state, action) => {
      const {blockId, modifiedBlock} = action.payload;
      state.blocks = state.blocks.map((singleBlock) => {
        if(singleBlock.id === blockId){
          return modifiedBlock;
        }else{
          return singleBlock;
        }
      })
    },
    setTextBlock: (state, action) => {
      const {block, content} = action.payload;
      const sanitizedContent = DOMPurify.sanitize(
        content,
        {
          ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'ul', 'li', 'ol',
            'b', 'q', 'div', 'p', 'a', 'i', 'span', 'u', 's', 'blockquote'
          ],
          ALLOWED_ATTR: ['style', 'href', 'rel', 'target']
        }
      )

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
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setCreatingTopic: (state, action) => {
      state.creatingTopic = action.payload;
    },
    setTopics: (state, action) => {
      state.topics = [
        ...state.topics,
        action.payload
      ];
    },
    setVisualizingPost: (state, action) => {
      state.visualizingPost = action.payload;
    }

  },

  
})

export const {
  setPost,
  setTitle,
  setSubtitle,
  setBlocks, 
  setBlock, 
  setTextBlock,
  setImageBlock, 
  setDeletingBlock,
  deleteBlock,
  createBlock,
  setTopic,
  setCreatingTopic,
  setTopics,
  setVisualizingPost,
} = postSlice.actions;

export default postSlice.reducer;