
import React from 'react'; 


const Card = (props) => {
	const {name, email, id} = props; //destructuring
	// for example, if we didn't have destructuring we would have to use props.name instead 
	//can also do the exact same thing by replacing the parameter 'props' with '{name, email, id}'
	return(
		//these special classes are provided by the tachyons library
		<div className='tc bg-light-red dib br3 pa3 ma2 grow'>
			<img src={`https://robohash.org/${id}?set=set3`} height="300vh" width="100%" alt="robots"/>
			<div>
				<h2> {name}</h2> 
				<h3> {id*3} bitcoins </h3>
				<p> Seller: {email} </p>
				
			</div>
		</div>
	);
}

export default Card; //export the component

