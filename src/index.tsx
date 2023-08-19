import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import './styles/zeroing.scss';
import Main from './pages/Main';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Main/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
