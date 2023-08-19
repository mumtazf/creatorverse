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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
);
