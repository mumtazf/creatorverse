import { useEffect, useState } from 'react'
import {useRoutes} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import './App.css'
import ShowCreators from './Pages/ShowCreators';
import EditCreator from './Pages/EditCreator';
import AddCreator from './Pages/AddCreator';
import Home from './Components/Home';
import Nav from './Components/Nav'
function App() {

    const [creator, setCreator] = useState(null);

    useEffect(() => {
      const getData = async () => {
        const {data} = await supabase.from('creators').select().order('created_at', {ascending: true})
        setCreator(data);
      }

      getData();
    })

    let element = useRoutes([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/creators",
        element: <ShowCreators data = {creator}/>
      },
      {
        path: "/edit/:id",
        element: <EditCreator data = {creator}/>
      }, 
      {
        path: "/new",
        element: <AddCreator/>
      }
    ])
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  )
}

export default App;
