import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Simplilearn"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Simplilearn"
            });
        }, 3000);
    }
    
  render() {
    console.log("Parent Component render");
    return <div>I'm the parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
    </div>;
  }
}

export default ParentComp;
