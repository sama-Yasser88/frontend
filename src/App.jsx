import { useState } from 'react'
import './App.css'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home'
import About from './components/About/about'
import Contact from './components/Contact/Contact'
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Login/Login'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        { index:true,element:<Home/>} ,
        {path:"home",element:<Home/>}  ,
         {path:"Login",element:<Login/>},
         {  path:"about",  element:<About/>},
         {  path:"contact",  element:<Contact/>},
     
      ]
      
      
    },
  ]);

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
