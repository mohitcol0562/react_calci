import React,{Component} from 'react';
import Header from './global/Headers';
import Container from 'reactstrap/lib/Container';
import Aux from './global/AuxComp';
import {Routes} from './routes';
 // import './App.css';

function App() {
  return (
    <Aux>
      <div className="App">
        <Header />
        {/*
          <Row>
            <Col className="p-3">
              <span className="welcome-message">Welcome to the React</span>
            </Col>
          </Row>
        */}
        <Routes />
      </div>
    </Aux>
  );
}

export default App;
