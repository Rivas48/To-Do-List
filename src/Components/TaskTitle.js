import React, {Component} from 'react';

class TaskTitle extends Component{
	render(){
		
		return(
			<div className='title'>
				<li className='task-number-title'>#</li>
				<li className="task-title">Task</li>
				<li className="x-task-button">(X)</li>
			</div>
		)
	}
}

export default TaskTitle;