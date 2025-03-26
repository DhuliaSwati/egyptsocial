import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import "../index.css";
import "./Game.css";
import Header from './Header';
import logo from "../assets/Logo.png";

const Game = () => {
  const [showGame, setShowGame] = useState(false);
  const [showDenied, setShowDenied] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowGame(true);
  };

  const handleReject = () => {
    setShowDenied(true);
    setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <>
    <Header logo={logo} />
      <div className="game-container">
        {!showGame && !showDenied && (
          <div className="game-popup accept-popup">
            <div className="popup-content">
              <h2>🔞 Før du spiller</h2>
              <h3>Velkommen til MeisterSocial!</h3>
              <p>Dette er et gratis sosialt casinospill utviklet kun for underholdning.</p>
              
              <ul className="feature-list">
                <li><span>❌</span> Ingen pengespill</li>
                <li><span>❌</span> Ingen kjøp eller premier</li>
                <li><span>✅</span> 100 % gratis</li>
                <li><span>🔞</span> Kun for brukere over 18 år</li>
                <li><span>🧠</span> Spill ansvarlig</li>
              </ul>

              <p className="consent-text">
                Ved å klikke på Godta, bekrefter du at du er over 18 år og samtykker til våre:
              </p>
              <ul className="terms-list">
                <li>Ansvarsfraskrivelse</li>
                <li>Ansvarlig spill</li>
                <li>Personvernerklæring</li>
              </ul>

              <div className="popup-buttons">
                <button className="accept-button" onClick={handleAccept}>
                  ✅ Godta og spill
                </button>
                <button className="reject-button" onClick={handleReject}>
                  Avvis
                </button>
              </div>
            </div>
          </div>
        )}

        {showDenied && (
          <div className="game-popup denied-popup">
            <div className="popup-content">
              <h2>⚠️ Tilgang nektet</h2>
              <p>Beklager, men du må være 18 år eller eldre, og godta våre vilkår for å spille.</p>
              <p>MeisterSocial er en gratis sosial casinoplattform kun ment for voksne brukere.</p>
              <p>Det tilbys ikke pengespill, og det er ingen mulighet for å vinne ekte penger.</p>
              <p className="redirect-text">🔙 Omdirigerer til forsiden...</p>
            </div>
          </div>
        )}

        {showGame && (
          <iframe 
            src="/CasinoGame/index.html"
            title="Game"
            className="game-frame"
            allow="autoplay"
            frameBorder="0"
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Game;