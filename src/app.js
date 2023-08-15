import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer';

const AppLayout=()=>{
    return(
        <div>
           <Header/>
           <Outlet />
           {/* <Footer/> */}
        </div>
    )
}

const appRouter =createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
         { path: "/", element:<Home /> },
         { path: "/experience", element:<Experience /> },
         { path: "/projects", element: <Projects /> },
         { path: "/contact", element:<Contact/>},
         { path: "/skills", element:<Skills />},

       ],
    }
])

const rootDom = ReactDOM.createRoot(document.getElementById("root"));
rootDom.render(<RouterProvider router={appRouter} />);