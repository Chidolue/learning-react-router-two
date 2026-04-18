import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ProfilesPage from './pages/ProfilesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import "./App.css";
import ProfilePage from './pages/ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  
  {
    path: '/profiles',
    element: <ProfilesPage />
  },
  
  {
    path: '/profiles/:profileId',
    element: <ProfilePage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
