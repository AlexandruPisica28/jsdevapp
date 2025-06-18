import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';

import NoPage from './pages/NoPage.tsx';
import Articole from './pages/Articole.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route  path="/home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="articole" element={<Articole />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)