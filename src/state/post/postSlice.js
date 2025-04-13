import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import DOMPurify from 'dompurify';

const initialState = {
  deletingBlock: null,
  creatingTopic: null,
  visualizingPost: false,
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
  topics: [
    "NOTÍCIA",
    "MÚSICA"
  ],
  posts: [],
  post: {
    topic: "NOTÍCIA",
    title: "",
    subtitle: "",
    date: '21 de Novembro, 2024',
    blocks: []
  }
  // post: {
  //   topic: "NOTÍCIA",
  //   title: 'Dive deep into the Ghibli’s universe.',
  //   subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  //   date: '21 de Novembro, 2024',
  //   blocks: [
  //     {
  //       id: "1",
  //       type: "img",
  //       url: "/studio/totoro_cropped_a.gif",
  //       credits: {
  //         content: "currents",
  //         link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
  //       },
  //       description: "From the movie: My Neighbor Totoro."
  //     },
  //     {
  //       id: "2",
  //       type: 'text',
  //       content: "<p>Fundado em 1985 no Japão por Hayao Miyazaki, Isao Takahata e Toshio Suzuki, o Estúdio Ghibli é amplamente considerado um dos maiores criadores de animações do mundo. Com um estilo artístico único, histórias profundas e personagens inesquecíveis, o estúdio se destaca por transformar temas complexos em narrativas encantadoras que falam tanto com crianças quanto com adultos.</p><p><br/></p><p>De obras icônicas como Meu Amigo Totoro e A Viagem de Chihiro até histórias emocionantes como Túmulo dos Vagalumes, cada filme carrega um pedaço do coração de seus criadores e deixa uma marca duradoura no público. O Estúdio Ghibli não apenas cria filmes; ele molda uma visão de mundo. Suas animações são aclamadas por celebrar a conexão entre humanos e a natureza, explorar temas como coragem, crescimento e identidade, e abraçar a complexidade da moralidade nos personagens. Além disso, o estúdio ajudou a levar a animação japonesa a um público global. A Viagem de Chihiro foi o primeiro filme de anime a ganhar um Oscar, solidificando o Ghibli como uma força criativa respeitada internacionalmente.</p>"
  //     },
  //     {
  //       id: "3",
  //       type: "img",
  //       url: '/studio/totoro2_cropped_a.gif',
  //       credits: {
  //         content: "currents",
  //         link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
  //       },
  //       description: "the"
  //       // credits: {
  //       //   content: 'lady gaga',
  //       //   link: 'abubleh'
  //       // },
  //       // description: 'Lady Gaga'
  //       // url: 'https://i.pinimg.com/564x/eb/00/c1/eb00c1980089fd880366bf47018eddef.jpg'
  //     },
  //     {
  //       id: "9",
  //       type: 'text',
  //       content: "<h3>Stunishing landscapes</h3><br/> consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
  //     },
  //     {
  //       id: "11",
  //       type: "img",
  //       url: '/studio/chihiro_cropped_gif_a.gif',
  //       credits: {
  //         content: "currents",
  //         link: "https://www.youtube.com/watch?v=NMRhx71bGo4&list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf"
  //       },
  //       description: "the"
  //       // credits: {
  //       //   content: 'lady gaga',
  //       //   link: 'abubleh'
  //       // },
  //       // description: 'Lady Gaga'
  //       // url: 'https://i.pinimg.com/564x/eb/00/c1/eb00c1980089fd880366bf47018eddef.jpg'
  //     },
  //     {
  //       id: "10",
  //       type: 'text',
  //       content: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
  //     },
  //     {
  //       id: "4",
  //       type: "yt-embed",
  //       content: "NMRhx71bGo4",
  //     },
  //     {
  //       id: "5",
  //       content: "1854264521168154650",
  //       type: "tt-embed",
  //       _id: "67345bc531a55b2d24726e9f"
  //     },

  //     {
  //       id: "6",
  //       type: 'tt-embed',
  //       content: '1530590558959198208',

  //     },
  //     {
  //       id: "7",
  //       type: 'text',
  //       content: 'Two years ago we set out to create new, bold makeup that is supercharged with the worlds most innovative skincare ingredients.  Im proud that @hauslabs is launching a new makeup line that we believe represents the  future of clean artistry.  I hope we change your perception of what clean makeup can be, and that you will love our products as much as I do.'
  //     },
  //     {
  //       id: "8",
  //       type: 'yt-embed',
  //       content: 'ohs0a-QnFF4'
  //     },
  //   ]
  // }
  
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      const postChanges = action.payload;

      
      state.post = postChanges;

      console.log(postChanges)
    },
    setPosts: (state, action) => {
      const posts = action.payload;

      posts.map((singlePost) => {
        singlePost.blocks.map((block) => {
          if(block.type == "img" && block.autoplay){
            singlePost.cover_images = [
            ...singlePost.cover_images,
            block.url
            ]
          }
        })

        return singlePost;
      })

      
      state.posts = posts;

      console.log(state.posts)
    },
    savePost: (state, action) => {
      let postChanged = action.payload;
      
      postChanged.blocks.map((block) => {
        if(block.type == "img" && block.autoplay){
          postChanged.cover_images = [
          ...postChanged.cover_images,
          block.url
          ]
        }
      })

      const posts = state.posts
      
      state.posts = posts.map((singlePost) => {
        if(singlePost.id == postChanged.id) {
          return postChanged;
        }else{
          return singlePost;
        }
      });

      console.log(postChanged)
    },
    setTopic: (state, action) => {
      state.post.topic = action.payload;
    },
    setTitle: (state, action) => {
      state.post.title = action.payload;
      console.log(action.payload)
    },
    setSubtitle: (state, action) => {
      state.post.subtitle = action.payload;
      console.log(action.payload)
    },
    setBlocks: (state, action) => {
      state.post.blocks = action.payload;
    },
    setBlock: (state, action) => {
      const {blockId, modifiedBlock} = action.payload;
      state.post.blocks = state.post.blocks.map((singleBlock) => {
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

      state.post.blocks = state.post.blocks.map((singleBlock) => {
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
      state.post.blocks = state.post.blocks.map((singleBlock) => {
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
      state.post.blocks = state.post.blocks.filter((singleBlock) => {
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
            content: "",
            link: ""
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
      console.log(newBlock)
      state.post.blocks = [
        ...state.post.blocks,
        newBlock
      ]
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
  setPosts,
  savePost,
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