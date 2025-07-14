import { useEffect, useState } from 'react';
import { useFileContext } from '../../context/useFileContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useGetFilePresignedUrlQuery } from '../../modules/documentation/documentationApi';

export function FileViewer() {
  const { selectedFile, setFileContentUrl } = useFileContext();
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { data: presignedData, isFetching: isUrlLoading } = useGetFilePresignedUrlQuery(
    selectedFile?.id ?? '',
    {
      skip: !selectedFile
    }
);


  useEffect(() => {
    if (!presignedData?.url) return;

    const fetchMarkdownContent = async () => {
      setIsLoading(true);
      try {
        setFileContentUrl(presignedData.url);
        
        const response = await fetch(presignedData.url);
        if (!response.ok) throw new Error('Failed to fetch content');
        
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error loading markdown:', error);
        setMarkdownContent('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [presignedData, setFileContentUrl]);

  if (!selectedFile) return <div className="flex-1 p-4">Select a markdown file</div>;

  return (
    <div className="flex-1 p-4 overflow-auto">
      {isUrlLoading || isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : markdownContent ? (
        <div className="prose max-w-none dark:prose-invert markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="text-red-500">
          {presignedData ? 'Failed to load content' : 'File is not markdown'}
        </div>
      )}
    </div>
  );
}