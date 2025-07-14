import { useState } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore, Folder, InsertDriveFile } from '@mui/icons-material'
import { useGetFilesListQuery } from '../../modules/documentation/documentationApi'
import { useFileContext } from '../../context/useFileContext'

export function LeftBar() {
   const { data, error, isLoading } = useGetFilesListQuery()
   const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({})
   const { setSelectedFile } = useFileContext()

   const handleProjectClick = (projectName: string) => {
      setOpenProjects(prev => ({
         ...prev,
         [projectName]: !prev[projectName],
      }))
   }

   const handleFileClick = async (id: string) => {
      setSelectedFile({id})
   }

   return (
      <div className="w-1/5 bg-gray-600 text-white flex flex-col h-full">
         <div className="p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">My Projects</h2>
            {!isLoading && !error && (
               <List component="nav" className="w-full">
                  {data &&
                     Object.entries(data).map(([projectName, files]) => (
                        <div key={projectName}>
                           <ListItemButton
                              onClick={() => handleProjectClick(projectName)}
                              className="hover:bg-gray-700 rounded">
                              <ListItemIcon className="min-w-0 mr-2">
                                 <Folder className="text-white" />
                              </ListItemIcon>
                              <ListItemText primary={projectName} />
                              {openProjects[projectName] ? <ExpandLess /> : <ExpandMore />}
                           </ListItemButton>

                           <Collapse in={openProjects[projectName]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                 {files.map(file => (
                                    <ListItemButton
                                       key={file.id}
                                       className="pl-8 hover:bg-gray-700 rounded"
                                       onClick={() => handleFileClick(file.id)}>
                                       <ListItemIcon className="min-w-0 mr-2">
                                          <InsertDriveFile className="text-white" />
                                       </ListItemIcon>
                                       <ListItemText primary={file.fileName} />
                                    </ListItemButton>
                                 ))}
                              </List>
                           </Collapse>
                        </div>
                     ))}
               </List>
            )}
         </div>
      </div>
   )
}
