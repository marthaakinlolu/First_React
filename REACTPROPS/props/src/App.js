import React, { Component } from 'react';
import Classprops from './Classprops';
import Functionprops from './Functionprop';

class App extends Component {
  render() {
    return <div>
      <Classprops name="learner 1" place="PlaceX"><p>Child Component</p></Classprops>
      <Classprops name="learner 2" place="PlaceY"><button>Click</button></Classprops>
      <Classprops name="learner 3" place="PlaceZ"></Classprops>
      <Functionprops name="Learner 4" place="PlaceA" />
    </div>;
  }
}

export default App;
