import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Board />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
