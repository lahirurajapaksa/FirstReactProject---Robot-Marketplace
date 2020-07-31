import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
	//rule of thumb to always set each element a unique key that will not change
	//if some of the cards get deleted, REACT will not know which one is which and will have to change the entire DOM
	//we want to minimise the amount of work we do to the DOM


	return (
		
		<div>

			{
				robots.map((user,i) => {
					return (
					<Card
					key={robots[i].id}
					id={robots[i].id} 
					name={robots[i].name}  
					email={robots[i].email}
					/>
					);
				})

			}

		</div>

	);
}

export default CardList;