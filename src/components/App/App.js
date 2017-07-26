import React, { Component } from 'react';
import './style.css';
import NewGame from '../NewGame/NewGame';
import Board from '../Board/Board';
import {Grid, Row, Col} from 'react-bootstrap';
import io from 'socket.io-client';
const socket = io();


class App extends Component {

  componentDidMount() {
    socket.emit('new_connect', {name:"Sheldon"});
    socket.on('welcome', (id, data) => {
      console.log(id, data);
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}>
            <NewGame />
          </Col>
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
