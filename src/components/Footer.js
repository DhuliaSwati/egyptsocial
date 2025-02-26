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
                        <h3 className="h3Heading text-yellow">Making sure everyone plays responsibly</h3>
                        <p className="footerSub">Find out more on our dedicated Responsible Social Play page.</p>
                    </Col>
                    <Col md={5}>
                        <p className="highlight">GO TO RESPONSIBLE SOCIAL GAMING</p>
                    </Col>
                    <Col md={1}>
                        <img src={plus} alt="18+" />
                    </Col>
                </Row>
            </Container>
            <Container className="footerMiddle pb-5">
                <Row>
                    <Col md={7}>
                        <p><span className="text-grey">You are aware and understand that you are providing information to Social Casino. The sole use of this information will be to manage this promotion.</span>
NO PURCHASE NECESSARY<span className="text-grey"> to participate in Sweepstakes. </span>SWEEPSTAKES ARE
VOID WHERE PROHIBITED BY LAW.<span className="text-grey"> For more information about sweepstakes
rules, please refer to the Sweeps Policy. Copyright © 2025 Jimmy Limited.
All rights reserved.</span></p>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Responsible Social Play</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Support</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="footerBottom">
                <Row>
                    <Col className="text-center">
                    <p className="text-grey">Inc. © 2025 Social Casino. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}