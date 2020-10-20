import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import socketio from 'socket.io-client';
const server = 'http://localhost:5000/'

function App() {
  const io = socketio(server);
  io.on('connection', () => {
    console.log('we are connected with the backend')
  })
  return (
    <Container fluid>
    <Row>&nbsp;</Row>
    <Row>
      <Col></Col>
    <Col md="auto">
    <h3>General Channel</h3>
    
    </Col>
    </Row>
  </Container>
  
  );
}

function mapStateToProps(state) {
  return { user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);
