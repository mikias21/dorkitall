'use client';

import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTag} from "../store/tagSlice";

const TagComponent = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const dispatch = useDispatch();

  const handleTagClick = (e, tag) => {
    e.preventDefault();
    setSelectedTag(tag);
    dispatch(addTag(tag));
  };

  return (
    <div className='flex flex-wrap gap-4 mt-6 justify-center'>
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={(e) => handleTagClick(e, tag)}
          className={`px-3 py-2 rounded-full text-sm transition-all border-1 border-slate-300 duration-300 ease-in-out dark:border-slate-200 dark:text-slate-400 dark:hover:text-white ${
            selectedTag === tag
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-grey-200 text-grey-700 hover:bg-blue-500 hover:text-white border border-transparent hover:border-blue-500'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagComponent;
