import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';

function Features() {
  return (
    <div id="features" className="features-container">
      <CardGroup>
        <Card className="feature-card">
          <Card.Img variant="top" src="https://dl.dropboxusercontent.com/s/rq6nah6g4flqtw997ihoa/unnamed.png?rlkey=ig3l0bz9cnahuhta2z6vwzz1g&st=cgi3aohp" alt="Feature 1" />
        </Card>
        <Card className="feature-card">
          <Card.Img variant="top" src="https://dl.dropboxusercontent.com/s/rq6nah6g4flqtw997ihoa/unnamed.png?rlkey=ig3l0bz9cnahuhta2z6vwzz1g&st=cgi3aohp" alt="Feature 2" />
        </Card>
      </CardGroup>
    </div>
  );
}

export default Features;
