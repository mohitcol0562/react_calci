import React,{Component} from 'react';
import logo from '../../../assets/logo.svg';
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="calculator" />
      </header>
    )
  }
}
 export default Header;
