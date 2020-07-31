import React, { Component } from 'react';

//where can we use this?
//we can wrap the error boundary component around the cardList component
//so when cardList has an error, the errorboundary component can gracefully handle the error by maintaing a good UI

class ErrorBoundary extends Component {
	constructor(props){
		super();
		this.state = {
			hasError: false
		}
	}

	//this a lifecycle hook that will catch any errors that occur
	componentDidCatch(error, info){

		this.setState({ hasError: true})
	}

	render(){

		//if there is an error we render this
		if (this.state.hasError === true){
			return <h1> OOPS BRO </h1>
		}

		//if there is no error we just render what we would have normally rendered
		//aka whatever component we have wrapped error boundary around
		return this.props.children

	}
}

export default ErrorBoundary;