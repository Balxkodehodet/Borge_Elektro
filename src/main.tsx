import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LayoutLandingpage from './Components/LayoutLandingpage.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLandingpage />,
    children: [
      { index: true, element: <App /> },
    ]

  },   
],
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)