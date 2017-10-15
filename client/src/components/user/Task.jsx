import React, { Component } from 'react';
import styled from 'styled-components'

const TaskSpan = styled.span`
  margin: 20px;

  input {
    font-weight: bold;
  }
  input {
    font-size: 1.2rem;
    border: none;
    background-color: initial;
  }
`

class Task extends Component {

handleUpdateChange = (event) => {
    this.props.handleTaskChange(event, this.props.carId, this.props.task._id)
}
updateTask = (event) => {
    event.preventDefault()
    this.props.updateTask(this.props.carId, this.props.task._id)
}

    render() {
        return (
        <TaskSpan>
        <input onBlur={this.updateTask} 
        onChange={this.handleUpdateChange} 
        name="title" value={this.props.task.title} />
        </TaskSpan> 
        );
    }
}

export default Task;