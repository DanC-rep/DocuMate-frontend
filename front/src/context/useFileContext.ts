import { useContext } from 'react';
import { FileContext } from './fileContext';

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) throw new Error('useFileContext must be used within a FileProvider');
  return context;
};