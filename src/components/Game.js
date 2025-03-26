import Footer from "./Footer";
import "../index.css"

const Game = () => {
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