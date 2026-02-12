import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Navbar.tsx'
// import Header from './components/Header.tsx'
// import Footer from './components/Footer.tsx'
import App from './App.tsx'
import Setup from './pages/Setup.tsx'
import History from './pages/History.tsx'
import Compare from './pages/Compare.tsx'
import Result from './pages/Result.tsx'
import HistoryItems from './pages/HistoryItems.tsx'
// import Navbar from './components/Navbar.tsx'
import NotFound from './pages/NotFound.tsx'
import SimReceived from './pages/SimReceived.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />}, //default route
  {path: "*", element: <NotFound />}, //wenn nicht auflösbar, dann gehe hier hin (404)
  {path: "/setup", element: <Setup />},
  {path: "/received", element: <SimReceived />},
  {path: "/compare", element: <Compare />},
  {path: "/result", element: <Result />},
  {path: "/history", element: <History />},
  {path: "/history/:id", element: <HistoryItems />},
])

//root element, application is put together here
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
