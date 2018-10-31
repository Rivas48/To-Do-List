import React, {Component} from 'react';

class Buttons extends Component{
	render(){
		return(
			<button id={this.props.activity} onClick={this.props.click} className={this.props.Name}>{this.props.text}</button> 
		)
	}
}

export default Buttons;