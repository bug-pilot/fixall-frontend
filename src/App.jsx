import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import './App.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
