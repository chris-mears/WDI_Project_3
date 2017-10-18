import React, {Component} from 'react';
import Task from './Task'
import TextField from 'material-ui/TextField';
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const TasksContainer = styled.div `
margin: 20px;
`

class Tasks extends Component {
    state = {
        newTask: {
            title: ''
        }
    }
    //handles input change
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedTask = {
            ...this.state.newTask
        }
        clonedTask[attribute] = event.target.value
        this.setState({newTask: clonedTask})
    }

    //creates new item on enter
    handleKeyPress = (event) => {
        if (event.charCode === 13) {
            event.preventDefault()
            this
                .props
                .createTask(this.props.carId, this.state.newTask)
            const resetTask = {
                title: ''
            }
            this.setState({newTask: resetTask})
        }
    }

    render() {
        return (
            <TasksContainer>
                <h4>Tasks:</h4>

                <TextField
                    floatingLabelText="New Task"
                    onChange={this.handleChange}
                    name="title"
                    type="text"
                    value={this.state.newTask.title}
                    onKeyPress={this.handleKeyPress}
                    data-tip="Click Enter to Save"
                    data-offset={'top' : 20}/>
                <ReactTooltip
                    place='bottom'
                    effect='solid'
                    delayShow={1000}
                    event='click'
                    eventOff="blur"/>
                <div>
                    {this
                        .props
                        .tasks
                        .map((task) => {
                            return (
                                <div key={task._id}>
                                    <Task
                                        task={task}
                                        handleTaskChange={this.props.handleTaskChange}
                                        updateTask={this.props.updateTask}
                                        carId={this.props.carId}
                                        deleteTask={this.props.deleteTask}/>
                                </div>
                            )
                        })}
                </div>

            </TasksContainer>
        );
    }
}

export default Tasks;