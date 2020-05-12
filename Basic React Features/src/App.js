import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

	state = {
		username: 'Daniela'
	}

	changeNameHandler = ( event ) =>{
		this.setState({username: event.target.value});
	}

	render() {
		return (
			<div className="App">
			
				<UserOutput name={this.state.username}/>
				<UserOutput name={this.state.username}/>
				<UserOutput name='Ricardo'/>

				<UserInput 
					change={this.changeNameHandler}
					currentName={this.state.username}
				/>

			</div>
		);
	}
}

export default App;
