import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


import Cloud from './pages/Cloud'
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import Home from './pages/Home'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/cloud",
        element: <Cloud />
      },
    ]
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);



function App() {
  return (
    <div className='app'>
      <div className='container'/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
