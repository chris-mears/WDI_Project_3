import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import DrawerView from './Drawer'
import LogoIcon from '../LogoIcon'


const NavBar = () => (
  <AppBar
    title="CarLog"
    iconElementLeft={<LogoIcon />}
    iconElementRight={
    <Link to="/">
    <FlatButton label="Logout">
    </FlatButton>
    </Link>
    }
    zDepth={2}
  />
);

export default NavBar;