import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './component/custom/Header.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './component/custom/Hero.jsx'
import Create_trip from './create-trip/Index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Hero />
      </>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <>
        <Header />
        <Create_trip />
      </>
    ),
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
