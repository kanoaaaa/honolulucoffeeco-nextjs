'use client';

import { Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Import Next.js Image component
import background from '/public/background.png'; // Correct path to background image

const HeroSection = () => (
  <div
    style={{
      backgroundImage: `url(${background.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      padding: '30px',
      color: 'white',
    }}
  >
    <div className="container">
      <Row>
        <Col xs={12} md={8}>
          <h1>Farm to Cup Kona</h1>
          <h1>Coffee</h1>
          <p className="lead">Since 1992</p>
          <button className="btn btn-success">Shop Pure Kona Coffee</button>
        </Col>
      </Row>
    </div>
  </div>
);

export default HeroSection;
