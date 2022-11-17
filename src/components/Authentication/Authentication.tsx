import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Image from '../../../public/images/login-image.jpg';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { authenticate } from '../../features/userSlice';

import './style.css';

export const Auth = () => {
  const token = useAppSelector((state) => state.user.token);
  const error = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  const submitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(authenticate({ username: email, password: password }));
  };

  return (
    <div className="auth-container">
      <div className="image-area">
        <img className="login-image" src={Image} alt="Login image" />
      </div>
      <div className="form-area">
        <h2 className="form-header">ΣΥΝΔΕΣΗ</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Δ/νση ηλεκτρονικού ταχυδρομείου</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div className="gap-20" />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Κωδικός πρόσβασης</Form.Label>
            <Form.Control
              type="password"
              placeholder="Κωδικός"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="gap-20" />
          {error && <p className="error-text">{error}</p>}
          <div className="gap-20" />
          <Button
            onClick={submitButton}
            className="submit-button"
            variant="primary"
            type="submit"
          >
            Είσοδος
          </Button>
        </Form>
      </div>
    </div>
  );
};
