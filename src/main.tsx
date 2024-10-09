import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/AboutUs.tsx'
import Contact from './components/ContactUs.tsx'
import Home from './components/Home.tsx'
import Layout from './components/Layout.tsx'
import Github, { githubInfoLoader } from './components/Github.tsx'
import User from './components/User.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />``
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />

    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
