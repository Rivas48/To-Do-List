import React, {Component} from 'react';
import Buttons from './Buttons';
import TaskCommand from './TaskCommand';
var initialArray = ['Finish Redux Tutorials','Finish Cleaning Room','Finish Dishes','Finish Algorithms']

class ToDoPage extends Component{

	constructor(props) {
    super(props);
    this.state = {
    	items:initialArray,
        newToDo:"",
    	search:""
    };
    this.addToDo = this.addToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.recoverList = this.recoverList.bind(this);
    this.filterList = this.filterList.bind(this);
  }



    addToDo = (e) => {   
    initialArray.push(this.state.newToDo);
      this.setState({
        items: initialArray
      })
    }

    createValue = (e) => {
    }

    updateToDo = (e) => {
      this.setState({
        newToDo: e.target.value
      })  
    }

    deleteList = (e) => {
    	this.setState({
    		items:[]
    	})
    }

    recoverList = (e) => {
    	this.setState({
    		items: initialArray
    	})
    }

    deleteButton = (e) => {
    	var field = this.state.items.slice()
    	var taskField = field.indexOf(e.target.parentNode.parentNode.querySelector('.task-title').innerHTML);
    	if(taskField !== -1) {
    		field.splice(taskField,1);
    		this.setState({
    			items:field
    		})
    	}
    }

    filterList = (e,props) => {
		function filterItems(query) {
		  return initialArray.filter(function(el) {
		  return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
		  })
		}

      this.setState({
        search: e.target.value,
        items:	filterItems(e.target.value)
      })
    }
    renderTask = (e) =>{
    }
	render(props){
	
		return(
			<div className='background-container'>
				<div className='title-container'>
					<h1>To-Do App</h1>
					<h5>Never Forget Any Task</h5>
				</div>
				<div className='app-container'>
					<div>
						<div><input id='add' className='add' placeholder='Create To-Do' value={this.props.todo} onChange={this.updateToDo}/></div>
						<div><Buttons Name="button-add" text="Enter New To-Do" click={this.addToDo}/></div>
						<div><input id='filter' className='filter' placeholder='Filter To-Do' onChange={this.filterList}/></div>
					</div>
					<TaskCommand items={this.state.items} deleteList={this.deleteList} recoverList={this.recoverList} deleteButton={this.deleteButton} />
				</div>
			</div>	
		)
	}
}

export default ToDoPage;