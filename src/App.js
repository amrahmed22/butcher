import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import Menu from './Components/Menu/Menu';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import { useEffect, useState } from 'react';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';





function App() {
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []);

  let x = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'menu', element: <Menu />, children: [
            { path: 'breakfast', index: true, element: <Breakfast /> },
            { path: 'lunch', element: <Lunch /> },
            { path: 'dinner', element: <Dinner /> }
          ]
        },
        { path: 'contact', element: <Contact /> },
        { path: 'service', element: <Service /> }
      ]
    }
  ])

  return <>
    {loading && <LoadingScreen />}

    <RouterProvider router={x} />

  </>
}

export default App;
