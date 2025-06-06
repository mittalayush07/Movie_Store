
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { GetMoviesData } from './api/GetAPIData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movies",
        element: <Movies />,
        loader: GetMoviesData,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
