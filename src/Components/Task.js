import React, {Component} from 'react';
import Buttons from './Buttons';

class Task extends Component{

	render(){
		return(
			<div className='task'>
				<li className='task-number-title'>Task {this.props.id}:</li>
				<li className="task-title">{this.props.task}</li>
				<li className="x-task-button"><Buttons  click={this.props.click} text="X"/></li>
			</div>
		)
	}
}

export default Task;