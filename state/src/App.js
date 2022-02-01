import React from 'react';
import "./App.css";
import NewCom from './Components/NewCom';
class App extends React.Component{
  styles = {
    fontstyle: "bold",
    color: "teal"
  };
  render() {
    return (
      <dev className = "App">
        <h1 style={this.styles}>Welcome</h1>
        <NewCom />
      </dev>
    );
  }
}

export default App;
