import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
     name: 'Anth'
  }

  nameStateHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Main Component</h1>
          <UserInput 
           name={this.state.name}
           click={this.nameStateHandler} />
          <UserOutput name={this.state.name}/>
      </div>
    );
  }
}

export default App;
