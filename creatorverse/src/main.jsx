import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css'

//import different components
import NotFound from "../src/routes/NotFound"
import AddCreator from './Pages/AddCreator';
import EditCreator from './Pages/EditCreator';
import ViewCreator from './Pages/ViewCreator';
import ShowCreators from './Pages/ShowCreators';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App/>} />
        <Route path = "/new" element = {<AddCreator/>}/>
        <Route path = "/edit/:id" element = {<EditCreator/>}/>
        <Route path = "/:id" element = {<ViewCreator/>}/>
        <Route path = "/creators" element = {<ShowCreators/>}/>

        <Route path = "*" element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
