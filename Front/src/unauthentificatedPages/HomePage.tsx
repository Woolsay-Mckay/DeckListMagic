import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default (): JSX.Element => (
  <div className="p-5 d-flex flex-column justify-content-between align-items-center">
    <h1>Page d'acceuil!</h1>

    <Link to="/signIn">
      <Button variant="primary" className="mt-4" size="lg">
        Connexion
      </Button>
    </Link>
    <Link to="/signUp">
      <Button variant="primary" className="mt-4" size="lg">
        Inscription
      </Button>
    </Link>
  </div>
);
