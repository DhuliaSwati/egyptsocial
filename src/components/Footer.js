import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/Logo-white.png";
import plus from "../assets/18plus.png"

export default function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-5">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </Col>
                </Row>
            </Container>

            {/* New Contact Information Section */}
            <Container className="contact-info-section py-5">
                <Row>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Telefon</h4>
                            <p className="contact-text">+47 22 83 70 10</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">E-post</h4>
                            <p className="contact-text">meister@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Adresse</h4>
                            <p className="contact-text">Dronning Eufemiasgate 16,<br /> 0191 Oslo, Norway</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="footerTop py-5">
                <Row>
                    <Col md={6}>
                        <h3 className="h3Heading text-yellow">Sikrer at alle spiller ansvarlig</h3>
                        <p className="footerSub">Finn ut mer på vår dedikerte side for Ansvarlig Sosialt Spill.</p>
                    </Col>
                    <Col md={5}>
                        <p className="highlight"><Link to="/responsible-play">GÅ TIL ANSVARLIG SOSIALT SPILL</Link></p>
                    </Col>
                    <Col md={1}>
                        <img src={plus} alt="18+" />
                    </Col>
                </Row>
            </Container>
            <Container className="footerMiddle pb-5">
                <Row>
                    <Col md={7}>
                        <p>Dette er et gratis sosialt kasino med fokus på underholdning. Det er verken ekte penger eller gevinster involvert. Ansvarsfraskrivelse: Nettstedet er utelukkende laget for gratis underholdning. Alle spillene på siden vår er egenutviklede og designet kun for underholdningsformål. Spillene er beregnet for voksne over 18 år. Våre sosiale kasinospill innebærer ingen bruk av ekte penger og gir heller ikke mulighet for å vinne pengepremier. Fremgang i spillene våre er ikke en indikasjon på fremgang i pengespill med ekte penger. Vi oppfordrer til ansvarlig spill og understreker at våre spill kun er ment som en form for underholdning.</p>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <Link to="/terms"><li>Tjenestevilkår</li></Link>
                            <Link to="/responsible-play"><li>Ansvarlig Sosialt Spill</li></Link>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <ul>
                            <Link to="/privacy-policy"><li>Personvernregler</li></Link>
                            <Link to="/contact-us"><li>Kontakt oss</li></Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="footerBottom">
                <Row>
                    <Col className="text-center">
                    <p className="text-grey">Inc. © 2025 meistersocial. Alle rettigheter reservert.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}