import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '103827ac6525f7541fdf345f166598e8';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			city: 'João Pessoa',
			description: '', 
			temperature: ''
		}
	}

	componentDidMount(){
		this.grabWeather(this.state.city);
	}

	grabWeather(city){
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
		.then(response => response.json())
		.then(json => {
			this.setState({
				description: json.weather[0].description,
				temp: json.main.temp,
			}),

			console.log(json);
		});
	}

	render(){
		return[
			<div>
				<h1>Weather Report for {this.state.city}!</h1>
				<h2>{this.state.description}</h2>
				<h3>{this.state.temp}</h3>
			</div>
		]
	}
}

ReactDOM.render(<App></App>, document.getElementById('root'));