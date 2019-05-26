import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        output: [
            {id: '1', username: 'Assan'},
            {id: '2', username: 'Lamin'},
            {id: '3', username: 'Sulayman'}
          ]
      };

  changeNameHandler = event => {
    this.setState(
      {
        output: [
          {id: '1', username: 'Assan'},
          {id: '2', username: 'Lamin'},
          {id: '3', username: event.target.value}
        ]
      }
    )
  }

      render () {
      const inputStyle = {
        background: '##abbaab'

          }

      let outputName = null;
          outputName = (
          <div>
            {this.state.output.map((output,index) => {
              return <UserOutput
              key = {output.id}
              username = {output.username}
              changed={(event) => this.changeNameHandler(event, output.id)}
              />;
            })}
          </div>
    )

  return (
    <div className='App' style= {inputStyle}>
    {outputName}
    <UserInput changed={this.changeNameHandler} name={this.state.output[0].name}/>
    </div>
  );
  }
}

export default App;
