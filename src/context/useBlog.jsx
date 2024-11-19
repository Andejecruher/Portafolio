import { useContext } from 'react';
import { BlogContext } from './BlogContext';

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    console.warn('context is undefined');
  }
  return context;
};
