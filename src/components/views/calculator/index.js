import React,{Component} from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Calculator from './calculator_app';

class CalculatorOverview extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <Container>
        <Row>
          <Col className="p-3">
            <span className="welcome-message">Welcome to the Test-App</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Calculator />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CalculatorOverview;
