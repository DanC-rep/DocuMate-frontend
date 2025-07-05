import { AppBar } from "@mui/material";
import EditDocumentIcon from '@mui/icons-material/EditDocument';

export function Header(){
   return (
      <AppBar position="static">
         <div className="flex flex-row items-center justify-between py-2 px-3 text-white">
            <EditDocumentIcon fontSize="large" />
            <span className="text-2xl">DocuMate</span>
         </div>
      </AppBar>
   )
}