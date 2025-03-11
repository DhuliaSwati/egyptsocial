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
            <Container className="footerTop py-5">
                <Row>
                    <Col md={6}>
                        <h3 className="h3Heading text-yellow">Sikrer at alle spiller ansvarlig</h3>
                        <p className="footerSub">Finn ut mer på vår dedikerte side for Ansvarlig Sosialt Spill.</p>
                    </Col>
                    <Col md={5}>
                        <p className="highlight">GÅ TIL ANSVARLIG SOSIALT SPILL</p>
                    </Col>
                    <Col md={1}>
                        <img src={plus} alt="18+" />
                    </Col>
                </Row>
            </Container>
            <Container className="footerMiddle pb-5">
                <Row>
                    <Col md={7}>
                        <p><span className="text-grey">Du er klar over og forstår at du gir informasjon til Spinnogvinn. Den eneste bruken av denne informasjonen vil være å administrere denne kampanjen.</span>
INGEN KJØP NØDVENDIG<span className="text-grey"> for å delta i konkurranser. </span>KONKURRANSER ER
UGYLDIGE DER LOVEN FORBYR DET.<span className="text-grey"> For mer informasjon om konkurranseregler,
vennligst se Konkurransepolitikken. Opphavsrett © 2025 Spinnogvinn.
Alle rettigheter reservert.</span></p>
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
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="footerBottom">
                <Row>
                    <Col className="text-center">
                    <p className="text-grey">Inc. © 2025 Spinnogvinn. Alle rettigheter reservert.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}