import React, { Component } from 'react';

class Tasks extends Component {
    render() {

        return (
            <div>
                <h4>Tasks:</h4>
                <ul>
                {this.props.tasks.map((task) => {
        return (<li>{task.title}</li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Tasks;