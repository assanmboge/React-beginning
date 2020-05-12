import React from 'react';
import './UserInput.css';

const UserInput = ( props ) =>{

	const style = {
		background: '#cbd7e4',
		border: '1px solid #2c3e50',
		'box-shadow': '0px 0px 10px #ccc',
		color: '#232829',
		'border-radius': '6px',
		'font-size': '16px',
		height: '35px',
		'letter-spacing': '1px',
		'text-indent': '10px',
		width: '25%',
	};

	return 	<div>
				<input 
					type="text" 
					style={style}
					onChange={props.change} 
					value={props.currentName}/>
			</div>;
}

export default UserInput;