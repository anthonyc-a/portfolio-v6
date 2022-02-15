import React from 'react';
import TagItem from './TagItem/TagItem';

const Tags = () => {
  return <div className='tag-contain'>
      <TagItem type="graphic design" />
      <TagItem type="web design" />
      <TagItem type="development" />
  </div>;
};

export default Tags;
