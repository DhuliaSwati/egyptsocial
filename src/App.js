import Header from "./components/Header";
import Footer from "./components/Footer"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import star from "./assets/star.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import logo from "./assets/Logo.png";


function App() {
  return (
    <>
      <Header logo={logo}/>
      {/* Hero Section */}
      <div className="heroSection">
      <Container>
      <Row>
        <Col className="outerSection">
          <h1 className="h1Heading">#1Social Casino</h1>
          <p className="subPara">Get Ready To Win Big</p>
          <Link to="/signup" className="linkBtn">Join Now</Link>
        </Col>
      </Row>
      </Container>
      </div>
      {/* Second fold */}
      <div className="section">
        <div className="outerSection">
          <div className="sectionHead">
            <img src={star} alt="star" />
          <h2 className="h2Heading">TOP <span className="text-yellow">FREE-TO-PLAY </span>Casino STYLE GAMES</h2>
          <img src={star} alt="star" />
          </div>
          <div className="imagesSection">
            <img src={img1} alt="Game1" />
            <img src={img2} alt="Game2" />
            <img src={img3} alt="Game3" />
            <img src={img4} alt="Game4" />
          </div>
          <Link to="/signup" className="sectionBtn">SignUp To Play For Free</Link>
        </div>
      {/* Third Fold */}
      <div className="outerSection">
      <h2 className="h2Heading">No Purchase</h2>
      </div>
        <div className="outerSection">
          <h2 className="h2Heading">It's Always Free To Play</h2>
            <img src={img5} alt="Find out more" />
          <Link to="/signup" className="sectionBtn">Find Out More</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
