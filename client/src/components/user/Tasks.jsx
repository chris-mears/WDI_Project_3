import React, { Component } from 'react';
import styled from 'styled-components'
import Task from './Task'

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
  }
    render() {
        return (
            <div>
                <h4>Tasks:</h4>
                <form onSubmit={this.handleSubmit}>
                
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            value={this.state.newTask.title}/>
                    <button>New Task</button>
                </form>
                <ul>
                {this.props.tasks.map((task) => {
        return (<li key={task._id}>
            <Task task={task} 
            handleTaskChange={this.props.handleTaskChange} 
            updateTask={this.props.updateTask} 
            carId={this.props.carId} />  
            <button onClick={() => this.props.deleteTask(this.props.carId, task._id)}>Delete</button></li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Tasks;