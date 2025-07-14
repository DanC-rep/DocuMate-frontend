import { useState } from "react";
import { FileContext } from "./fileContext";

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFile, setSelectedFile] = useState<{ id: string } | null>(null);
  const [fileContentUrl, setFileContentUrl] = useState<string | null>(null);

  return (
    <FileContext.Provider value={{ selectedFile, setSelectedFile, fileContentUrl, setFileContentUrl }}>
      {children}
    </FileContext.Provider>
  );
};