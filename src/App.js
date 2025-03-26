import Header from "./components/Header";
import Footer from "./components/Footer"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import star from "./assets/star.png";
import img1 from "./assets/img1.png";
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
          <h1 className="h1Heading">#1 SOSIALT CASINO</h1>
          <p className="subPara">Klar for å spille – helt gratis og bare for moro skyld!</p>
          <Link to="/spill" className="linkBtn">Bli med nå</Link>
        </Col>
      </Row>
      </Container>
      </div>
      {/* Second fold */}
      <div className="section">
        <div className="outerSection">
          <div className="sectionHead">
            <img src={star} alt="stjerne" />
            <h2 className="h2Heading"> TOPP <span className="text-yellow">GRATIS-Å-SPILLE </span>CASINO-STIL SPILL</h2>
            <img src={star} alt="stjerne" />
          </div>
          <p className="subPara">Ingen ekte penger. Ingen risiko. Bare underholdning.</p>
          <div className="imagesSection">
            <img src={img1} alt="Spill1" />
          </div>
          <Link to="/spill" className="sectionBtn">Spill gratis, ingen ekte penger nødvendig</Link>
        </div>
      {/* Third Fold */}
        <div className="outerSection">
        <h2 className="h2Heading">DET ER ALLTID GRATIS Å SPILLE</h2>
        <p className="subPara">Ingen kjøp, ingen innsatser – kun sosial moro!</p>
            <img src={img5} alt="Finn ut mer" />
          <Link to="/spill" className="sectionBtn">Spill gratis, ingen ekte penger nødvendig</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
