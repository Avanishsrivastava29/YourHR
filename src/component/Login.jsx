import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const LoginForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
});

const LoginTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: "2rem",
});

const LoginInput = styled(TextField)({
  marginBottom: "1rem",
});

const LoginButton = styled(Button)({
  backgroundColor: "#007bff",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#0062cc",
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle variant="h1">Login</LoginTitle>
        <LoginInput
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <LoginInput
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoginButton type="submit" variant="contained">
          Submit
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
