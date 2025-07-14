import { createContext } from 'react';

type FileContextType = {
  selectedFile: { id: string } | null;
  setSelectedFile: (file: { id: string } | null) => void;
  fileContentUrl: string | null;
  setFileContentUrl: (url: string | null) => void;
};

export const FileContext = createContext<FileContextType | undefined>(undefined);