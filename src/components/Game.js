import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Footer from "./Footer";
import "../index.css"

const Game = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <>
      <div className="game-container">
              <iframe 
                src="/CasinoGame/index.html"
                title="Game"
                className="game-frame"
                allow="autoplay"
                frameBorder="0"
              />
      </div>
      <Footer />
    </>
  );
};

export default Game;