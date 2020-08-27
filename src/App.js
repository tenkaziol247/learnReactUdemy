import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component{
  
  state = {
    username: 'Tenkaziol'
  };

  handlerChangeName = (event) => {
    this.setState({
      username: event.target.value,
    })
  }


  render(){
    const style = {
      color: 'red'
    };

    return (
      <div className="App">
        <UserOutput style={style} username={this.state.username} />
        <UserOutput />
        <UserOutput />
        <UserInput changed={this.handlerChangeName} username={this.state.username} />
      </div>
    );
  }
}

export default App;
