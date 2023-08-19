import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css'

//import different components
import NotFound from "../src/routes/NotFound"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App/>}>
        </Route>
        <Route path = "*" element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
