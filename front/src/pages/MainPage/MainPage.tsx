import { FileProvider } from '../../context/FileProvider'
import { FileViewer } from './FileViewer'
import { LeftBar } from './LeftBar'

export function MainPage() {
   return (
      <FileProvider>
         <div className="flex flex-1">
            <LeftBar />
            <FileViewer />
         </div>
      </FileProvider>
   )
}
