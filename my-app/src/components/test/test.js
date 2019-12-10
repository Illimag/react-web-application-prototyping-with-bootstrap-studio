import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './test.css';

class test extends React.Component {
  render() {
    return (
      <section>
        <Container>
          <Row className="top">
            <Col>
              <div className="div0"/>
            </Col>
          </Row>
          <Row className="bottom">
            <Col>
              <div className="div1"/>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default test;
