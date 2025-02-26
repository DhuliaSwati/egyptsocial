import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Link} from "react-router-dom"
import logo from "../assets/Logo.png"
import "../index.css"

export default function Header(){
    return(
        <header>
            <Container>
                <Row>
                    <Col md={8}><Link to ="/"><img src={logo} alt="Logo" /></Link></Col>
                    <Col md={4}>
                    <div className="links">
                        <Link className="linkBtn" to = "/signup">SignUp</Link>
                        <Link className="linkBtn" to = "/login">Login</Link>
                    </div>
                    </Col>
                </Row>
            </Container>           
        </header>
    )
}