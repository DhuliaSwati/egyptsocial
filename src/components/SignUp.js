import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
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

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signup successful! Check your email to confirm your account.");
    }
  };

  const handleOAuthSignup = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
  };

  return (
    <div className="signup">
    <Container className="signup-container">
      <Row className="justify-content-center">
        <Col className="signup-box">
          <h2>Sign Up</h2>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formEmail">
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="signup-btn">
              Sign Up
            </Button>
          </Form>

          <div className="oauth-buttons">
            <Button variant="light" onClick={() => handleOAuthSignup("google")}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="icon" /> Sign Up with Google
            </Button>
            <Button variant="primary" onClick={() => handleOAuthSignup("facebook")}>
              <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" className="icon" /> Sign Up with Facebook
            </Button>
          </div>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SignUp;
