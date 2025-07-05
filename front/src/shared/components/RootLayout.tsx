import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export function RootLayout(){
   return (
      <div className="flex flex-col h-screen">
         <Header />
         <Outlet />
         <Footer />
      </div>
   )
}