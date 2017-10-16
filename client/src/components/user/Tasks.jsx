import React, { Component } from 'react';
import Task from './Task'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import TextField from 'material-ui/TextField';

class Tasks extends Component {
    state = {
        newTask: {
            title: ''
        }
    }

    handleChange = (event) => {
    const attribute = event.target.name
    const clonedTask = {...this.state.newTask}
    clonedTask[attribute] = event.target.value
    this.setState({newTask: clonedTask})
  }

  handleSubmit = (event) => {
      event.preventDefault()
        this.props.createTask(this.props.carId, this.state.newTask)
        const resetTask = {title: ''}
        this.setState({newTask: resetTask})

  }
    render() {
        return (
            <div>
                <h4>Tasks:</h4>
                
                        <TextField
                            hintText="New Task"
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            value={this.state.newTask.title}
                            onBlur={this.handleSubmit}/>
                <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow><TableHeaderColumn>Tasks</TableHeaderColumn></TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
                {this.props.tasks.map((task) => {
        return (
        <TableRow key={task._id} selectable={false}>
        <TableRowColumn>
            <Task task={task} 
            handleTaskChange={this.props.handleTaskChange} 
            updateTask={this.props.updateTask} 
            carId={this.props.carId} />  
            <button onClick={() => this.props.deleteTask(this.props.carId, task._id)}>Delete</button>
            </TableRowColumn>    
        </TableRow>
        )})}
        </TableBody></Table>
        </div>
        );
    }
}

export default Tasks;