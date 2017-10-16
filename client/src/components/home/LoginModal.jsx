import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'


export default class LoginModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="GO Back"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Login" onClick={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.props.handleLogIn}>
        <div>
            <TextField
                hintText="User Name"
                onChange={this.props.handleLogInChange}
                name="userName"
                type="text"
                value={this.props.loggedUser.userName}/>
        </div>
        <div>
            <TextField
            hintText="Password"
                onChange={this.props.handleLogInChange}
                value={this.props.loggedUser.password}
                name="password"
                type="password"/>
        </div>
        <button>Login</button>
    </form>

    <form onSubmit={this.props.handleSignUpSubmit}>
        <div>
            <TextField
                onChange={this.props.handleSignUpChange}
                hintText="User Name"
                name="userName"
                type="text"
                value={this.props.signUp.userName}/>
        </div>
        <div>
            <TextField
                onChange={this.props.handleSignUpChange}
                value={this.props.signUp.password}
                hintText="Password"
                name="password"
                type="password"/>
        </div>
        <div>
            <TextField
                onChange={this.props.handleSignUpChange}
                value={this.props.signUp.name}
                hintText="Name"
                name="name"
                type="text"/>
        </div>
        <button>Sign Up</button>
    </form>
        </Dialog>
      </div>
    );
  }
}
