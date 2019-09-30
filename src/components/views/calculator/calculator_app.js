import React,{Component} from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = ()=>{
    return({
      operations : {
        "Add" : "+",
        "Subtract" : "-",
        "Multiply" : "*",
        "Divide" : "/"
      },
      operandArray : [],
      screenText : '',
      operands : {
        Add : [1,2,3],
        Subtract : [4,5,6],
        Multiply : [7,8,9],
        Divide : ["Clear" , 0, "="]
      },
      scientificButton : ["Square", "Square Root"],
      answer : '',
      scientificMode : false,
      theme : null
    })
  }

  handleOperands = (item)=>{
    let {screenText , operandArray} = this.state;
    let tempArray = [...operandArray];
    if(item=="Clear"){
      screenText='';
      tempArray = [];
    }
    else if(item=="="){
      screenText =  this.evaluateExpression();
      tempArray = [];
    }
    else {
      screenText = screenText+item;
      tempArray.push(item.toString());
    }
    this.setState({
      operandArray : [...tempArray],
      screenText
    })
  }

  handleOperation = (op)=>{
    let {operandArray , operations} = this.state;
    let temp = [...operandArray];
    if(temp.length){
      temp.push(operations[op]);
    }
    this.setState({operandArray : [...temp]});
  }

  evaluateExpression = ()=>{
    let {operandArray} = this.state;
    let answer = '' , question='' , count=0;
    operandArray.forEach((item,i)=>{
      question = question + item;
    })
    try{
      answer = eval(question);
    }
    catch(e){
      answer = "Error";
    }
    return answer
  }

  handeScientificMode = async(mode)=>{
    let answer  = this.state.screenText;
    if(mode=="Square"){
      answer = answer*answer;
    }
    else{
      answer = Math.sqrt(answer);
    }
    await this.setState(this.getInitialState());
    this.setState({operandArray : [] , screenText : answer  })
  }


  render(){
    let {operands , operandArray , screenText , operations , scientificMode ,scientificButton , theme} = this.state;
    return(
      <div className="w-50 calc__allignment app_font_settings">
        <Row>
          <Col align="end" className="border p-3" style={theme?{backgroundColor : "#000" , color : "#fff"}:{}}>
            <span >{screenText?screenText : 0}</span>
          </Col>
        </Row>
        {Object.keys(operands).map(op=>
          <Row>
            {operands[op].map(item=>
              <Col className="border p-3" style={theme?{backgroundColor:"#666" , color: "#fff"} : {backgroundColor : "#F0F0F0"}}>
                  <span style={{cursor : "pointer"}} onClick={()=>this.handleOperands(item)}>{item}</span>
              </Col>
            )}
            <Col className="border p-3" style={theme?{backgroundColor:"#666" , color: "#fff"} : {backgroundColor : "#F0F0F0"}}>
              <span style={{cursor : "pointer"}} onClick={()=>this.handleOperation(op)}>{op}{" ( "}{operations[op]}{" ) "}</span>
            </Col>
          </Row>
        )}
        <Row>
          {scientificMode?scientificButton.map(bu=>
              <Col className="border p-3" style={{backgroundColor : "#F0F0F0"}}>
                <button className="calc__button"  onClick={()=>this.handeScientificMode(bu)}>
                  <span>{bu}</span>
                </button>
              </Col>
          ):null}
        </Row>
        <Row className="m-3 p-3 border">
          <Col className="border-right">
            <button className="calc__button " onClick={()=>this.setState({theme : 0})}>
              <span>Light Theme</span>
            </button>
          </Col>
          <Col className="border-right">
            <button className="calc__button " onClick={()=>this.setState({theme : 1})}>
              <span>Dark Theme</span>
            </button>
          </Col>
          <Col >
            <button className="calc__button " onClick={()=>this.setState({scientificMode : !this.state.scientificMode})}>
              <span>Scientific Mode</span>
            </button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Calculator;
