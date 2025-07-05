import { createBrowserRouter } from "react-router";
import { RootLayout } from "../shared/components/RootLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/Errors/NotFoundPage";


export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         {
            path: '',
            element: <MainPage />,
         }
      ],
      errorElement: <NotFoundPage />,
   },
])