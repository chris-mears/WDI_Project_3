import React, { Component } from 'react';
import Task from './Task'

class Tasks extends Component {
    state = {
        newTask: {
            title: '',
            description: ''
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
        this.props.createTask(this.state.newTask)
  }

    render() {
        return (
            <div>
                <h4>Tasks:</h4>
                <form onSubmit={this.handleSubmit}>
                <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            value={this.state.newTask.title}/>
                </div>
                <div>
                        <label htmlFor="description">Description</label>
                        <input
                            onChange={this.handleChange}
                            name="description"
                            type="text"
                            value={this.state.newTask.description}/>
                </div>
                <button>New Task</button>
                </form>
                <ul>
                {this.props.tasks.map((task) => {
        return (<li key={task._id}>
        <Task task={task}
        handleTaskChange={this.props.handleTaskChange} 
        updateTask={this.props.updateTask} />
        </li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Tasks;