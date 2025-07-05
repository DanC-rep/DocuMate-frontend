import { GitHub } from "@mui/icons-material";

export function Footer(){
   return (
      <footer className="footer mt-5 flex items-center justify-between p-3 text-xl text-white">
         <a href="https://github.com/DanC-rep">
            <GitHub fontSize="large"/>
         </a>
         <span>@2025 Barabashnuk</span>
      </footer>
   )
}