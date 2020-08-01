import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js'
import './App.css'



class App extends Component {
	constructor() {
		super() //calls the cosntructor of Component
		this.state = {
			robots: [],
			searchfield: ''

		}
	}

	componentDidMount(){
		// making http request to this website, to fetch user data instead of storing the data in a robots.js file
		//fetch is a method on the window object that allows us to make requests to servers
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
			return response.json();
		})
		//updating the robots array with the new users data that we have fetched
		.then(users =>{
			this.setState({ robots: users})
		})
	}

	onSearchChange = (event) => {
		//continually updates the search field so we can filter the cards accordingly
		this.setState({searchfield: event.target.value})  
		

	}

	render(){

		//use arrow function instead, to ensure that 'this' refers to the app class instead of the child component instead
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0){
			return <h1> Loading </h1>
		} else {

			return(
				<div className='tc'>
					<h1 className='f1'> DISEMBODIED ROBOT HEADS </h1>
					<h1 className='f1'> BLACKMARKET </h1>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/> 
						</ErrorBoundary>
					</Scroll>
				</div>
				);


		}

		
	}

}

export default App;

