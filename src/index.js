import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Game from "./components/Game";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TermsService from './components/TermsService';
import ResponsiblePlay from './components/ResponsiblePlay';
import PrivacyPolicy from './components/PrivacyPolicy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game" element={<Game />} />
                <Route path="/terms" element={<TermsService />} />
                <Route path="/responsible-play" element={<ResponsiblePlay />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
