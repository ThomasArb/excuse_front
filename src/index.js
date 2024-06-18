import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Code from './Code';
import Lost from './Lost';
import Error from './Error';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="code/:code" element={<Code />} />
          <Route path="lost" element={<Lost />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
