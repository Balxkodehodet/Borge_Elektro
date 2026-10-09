import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LayoutLandingpage from './Components/LayoutLandingpage.tsx'
import App from './App.tsx'
import Kontakt from './Pages/Kontakt.tsx'
import OmOss from './Pages/OmOss.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLandingpage />,
    children: [
      { index: true, element: <App /> },
      { path: '/kontakt', element: <Kontakt /> },
      { path: '/om-oss', element: <OmOss/> },
    ]

  },   
],
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)