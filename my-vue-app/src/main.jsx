import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home/homePage.jsx';
import CreatePlanet from './pages/create/createPlanet.jsx';
import Paint from './components/paint.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "createPlanet",
    element: <CreatePlanet />,
  }, 
  {
    path: "createPlanet",
    element: <CreatePlanet />,
  }, 
  {
    path: "paint", 
    element: <Paint />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
