import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./components/Game";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TermsService from './components/TermsService';
import ResponsiblePlay from './components/ResponsiblePlay';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from "./components/ContactForm";
import About from './components/About';
import Disclaimer from './components/Disclaimer';

// Add this scroll to top component
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ScrollToTop /> 
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/game" element={<Game />} />
                <Route path="/terms" element={<TermsService />} />
                <Route path="/responsible-play" element={<ResponsiblePlay />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
            </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

