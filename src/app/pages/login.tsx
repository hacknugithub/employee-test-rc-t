import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";

type Props = {};

function Login({}: Props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = base64_encode(`${user}:${password}`);

    await dispatch(login(token));
    return navigate("/employees");
  };

  return (
    <div className="container p-2">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUser">
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jane Doe"
              onPaste={(e: any) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e: any) => {
                e.preventDefault();
                return false;
              }}
              value={user}
              onChange={(user) => setUser(user.target.value)}
            />
            <Form.Text className="text-muted">Enter your Username</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onPaste={(e: any) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e: any) => {
                e.preventDefault();
                return false;
              }}
              onChange={(password) => setPassword(password.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
