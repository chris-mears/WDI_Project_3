import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar';


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
                value={this.props.loggedUser.userName} />
        </div>
        <div>
            <TextField
            hintText="Password"
                onChange={this.props.handleLogInChange}
                value={this.props.loggedUser.password}
                name="password"
                type="password"/>
        </div>
        <RaisedButton label="Login" primary={true} type="submit" />
        <Snackbar
        open={this.props.loginError}
        message="Username or Password are incorrect"
        autoHideDuration={4000}
        onRequestClose={this.props.handleRequestClose}
        bodyStyle={{backgroundColor: "#202020"}}
        contentStyle={{color: "red"}}
      />
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
        <RaisedButton label="Sign Up" primary={true} type="submit" />
        <Snackbar
        open={this.props.signupError}
        message="Username already exists"
        autoHideDuration={4000}
        onRequestClose={this.props.handleRequestClose}
        bodyStyle={{backgroundColor: "#202020"}}
        contentStyle={{color: "red"}}
      />
    </form>
        </Dialog>
      </div>
    );
  }
}
