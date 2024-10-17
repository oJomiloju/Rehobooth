import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Route>
    )
  );
  return <RouterProvider router={router}/>  
}

export default App