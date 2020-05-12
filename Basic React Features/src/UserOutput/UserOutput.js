import React from 'react';
import './UserOutput.css';


const UserOutput = ( props ) =>{
	return 	<div className="output-container">
				<p className="outputUserName">{props.name}</p>
				<p className="outputText">Welcome to this website!</p>
			</div>
}

export default UserOutput;