import React from 'react';

const Scroll = (props) =>{
	return (
		//used two {{}} because the first { is to imply whats inside is a javascript expression, the second { was used as it is an object
		//props.children refers to what is between the opening and closing tags of Scroll
		<div style={{overflowY: 'scroll', border : '5px solid black', height : '800px'}}>
			{props.children} 
		</div>	)
};

export default Scroll;