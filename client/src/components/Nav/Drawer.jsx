import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class DrawerView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  
  handleToggle = () => this.setState({open: !this.state.open});
  
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <IconButton tooltip="Menu" onClick={this.handleToggle}>
        <FontIcon className="muidocs-icon-action-menu" />
        </IconButton>
        <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
      </div>
    );
  }
}