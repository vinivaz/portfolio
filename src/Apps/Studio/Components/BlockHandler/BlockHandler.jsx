import React from 'react'

import DOMPurify from 'dompurify';

// Components
import TextBlock from '../TextBlock/TextBlock';
import VideoBlock from '../VideoBlock/VideoBlock';
import TweetBlock from '../TweetBlock/TweetBlock';
import ImageBlock from '../ImageBlock/ImageBlock';

const BlockHandler = ({block}) => {
  switch (block.type) {
    case 'img':
      return <ImageBlock block={block} />;
    case 'text':
      return <TextBlock block={block} />;
    case 'tt-embed':
      return <TweetBlock block={block}/>;
    case 'yt-embed':
      return <VideoBlock block={block}/>;
    default:
      return null;
  }
}

export default BlockHandler