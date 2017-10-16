import React, { Component } from 'react';
import styled from 'styled-components'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import IconButton from 'material-ui/IconButton';

const styles = {
    block: {
      maxWidth: 50,
    },
    checkbox: {
      marginBottom: 16,
    },
        smallIcon: {
          width: 36,
          height: 36,
        },
        mediumIcon: {
          width: 48,
          height: 48,
        },
        largeIcon: {
          width: 60,
          height: 60,
        },
        small: {
          width: 72,
          height: 50,
          padding: 0,
        },
        medium: {
          width: 96,
          height: 96,
          padding: 24,
        },
        large: {
          width: 120,
          height: 120,
          padding: 30,
        }
  };

const TaskContainer = styled.div `
    display: flex;
`

class Task extends Component {
    state = {
        checked: false,
      }
    
      updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
      }

handleUpdateChange = (event) => {
    this.props.handleTaskChange(event, this.props.carId, this.props.task._id)
}
updateTask = (event) => {
    event.preventDefault()
    this.props.updateTask(this.props.carId, this.props.task._id)
}

    render() {
        return (
        <TaskContainer>
        <div style={styles.block}>
        <Checkbox
          style={styles.checkbox}
        />
        </div>
        <TextField onBlur={this.updateTask} 
        onChange={this.handleUpdateChange} 
        name="title" value={this.props.task.title}
        inputStyle={{height: '50%'}}
        underlineShow={false} />
        <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.small}
      onClick={() => this.props.deleteTask(this.props.carId, this.props.task._id)}>
      <i className="material-icons">delete</i>
    </IconButton>
        </TaskContainer>
        );
    }
}

export default Task;