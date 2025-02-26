import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";  // Add useNavigate
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate('/game');  // Redirect if already logged in
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate('/game');  // Redirect on auth state change
      }
    });
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setError("");
      const { error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (error) throw error;
      
      // Navigation will happen automatically through the auth state change listener
      
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      // Navigation will happen automatically through the auth state change listener
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col className="login-box">
            <h2>Login</h2>
            {error && <p className="text-danger mb-3">{error}</p>}
            
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-secondary"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-secondary"
                />
              </Form.Group>

              <Button 
                variant="primary" 
                onClick={handleLogin}
                className="btn"
              >
                Login
              </Button>

              <div className="oauth-buttons">
                <Button 
                  variant="light" 
                  onClick={() => handleOAuthLogin("google")}
                  className="btn"
                >
                  <img 
                    src="https://www.svgrepo.com/show/355037/google.svg" 
                    alt="Google" 
                    className="icon" 
                  />
                  Login with Google
                </Button>

                <Button 
                  variant="primary" 
                  onClick={() => handleOAuthLogin("facebook")}
                >
                  <img 
                    src="https://www.svgrepo.com/show/157810/facebook.svg" 
                    alt="Facebook" 
                    className="icon" 
                  />
                  Login with Facebook
                </Button>
                <p className="login-link">
                    Create a new account? <Link to="/signup">signup</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;