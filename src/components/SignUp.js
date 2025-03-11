import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      // Sjekk om feilmeldingen indikerer at brukeren allerede eksisterer
      if (error.message.includes("already registered") || 
          error.message.includes("already exists") || 
          error.message.includes("User already exists")) {
        setError("En konto med denne e-postadressen eksisterer allerede.");
        
        // Omdirigerer til innloggingssiden etter en kort forsinkelse
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              message: "Denne e-postadressen er allerede registrert. Vennligst logg inn i stedet." 
            } 
          });
        }, 2000);
      } else {
        setError(error.message);
      }
    } else {
      setSuccess("Registrering vellykket! Omdirigerer til spill...");
      
      // Omdirigerer til spillsiden etter en kort forsinkelse
      setTimeout(() => {
        navigate('/game');
      }, 2000); // 2-sekunders forsinkelse for å vise suksessmeldingen
    }
  };

  const handleOAuthSignup = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ 
      provider,
      options: {
        redirectTo: window.location.origin + '/game'
      }
    });
    if (error) setError(error.message);
  };

  return (
    <div className="signup">
    <Container className="signup-container">
      <Row className="justify-content-center">
        <Col className="signup-box">
          <h2>Registrer deg</h2>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formEmail">
              <Form.Control 
                type="email" 
                placeholder="Skriv inn e-post" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control 
                type="password" 
                placeholder="Skriv inn passord" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="signup-btn">
              Registrer deg
            </Button>
          </Form>

          <div className="oauth-buttons">
            <Button variant="light" onClick={() => handleOAuthSignup("google")}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="icon" /> Registrer deg med Google
            </Button>
            <Button variant="primary" onClick={() => handleOAuthSignup("facebook")}>
              <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" className="icon" /> Registrer deg med Facebook
            </Button>
          </div>

          <p className="login-link">
            Har du allerede en konto? <Link to="/login">Logg inn</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SignUp;