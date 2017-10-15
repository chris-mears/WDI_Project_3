import React, { Component } from 'react';
import styled from 'styled-components'

const TaskSpan = styled.span`
  margin: 20px;

  input, textarea {
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    background-color: initial;
  }
`

class Task extends Component {
handleUpdateChange = (event) => {
    this.props.handleTaskChange(event, this.props.task._id)
}
updateTask = (event) => {
    event.preventDefault()
    this.props.updateTask(this.props.task._id)
}
    render() {
        return (
        <span>
        <TaskSpan>
        <input onBlur={this.updateTask} 
        onChange={this.handleUpdateChange} 
        name="title" value={this.props.task.title} />
        </TaskSpan>
        <button onClick={() =>this.props.deleteTask(this.props.task._id)}>Delete</button>
        <TaskSpan>
        <ul><li>
        <textarea onBlur={this.updateTask} 
        onChange={this.handleUpdateChange} 
        name="description" value={this.props.task.description} />
        </li></ul>
        </TaskSpan> 
        </span>
        );
    }
}

export default Task;