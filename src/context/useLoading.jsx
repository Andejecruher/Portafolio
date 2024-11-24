import { useContext } from 'react';
import { LoadingContext } from './LoadingContext';

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    console.warn('context is undefined');
  }
  return context;
};
