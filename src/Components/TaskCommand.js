import React, {Component} from 'react';
import Buttons from './Buttons';
import Task from './Task';
import TaskTitle from './TaskTitle';




class TaskCommand extends Component{
	Comment = (props) => {
		return this.props.items.map((task,index)=>{
		return <Task id={index+1} key={task} click={this.props.deleteButton} task={task}/>
	})}
render(props){
		
		
return(
<div className='list-container'>
	<ul id="to-do" className='to-do-list'>
	<TaskTitle/>
	{this.Comment()}
	</ul>
	<div className="buttons-container">
		<Buttons activity="reset" Name="clear" click={this.props.deleteList} text="Clear the List"/>
		<Buttons activity="reset" Name="reset" click={this.props.recoverList}text="Reset the List"/>
	</div>
</div>
)
}
}

export default TaskCommand