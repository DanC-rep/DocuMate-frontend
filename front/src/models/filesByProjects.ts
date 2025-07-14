type FileItem = {
  id: string;
  fileName: string;
};

export type FilesByProjects = {
   [key: string]: FileItem[]
}
