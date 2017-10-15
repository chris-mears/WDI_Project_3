import React, { Component } from 'react';

class Tasks extends Component {
    render() {

        return (
            <div>
                <h4>Tasks:</h4>
                <ul>
                {this.props.tasks.map((task) => {
        return (<li key={task._id}>{task.title}<button onClick={() => this.props.deleteTask(this.props.carId, task._id)}>Delete</button></li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Tasks;