import React from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerView from './Drawer'


const NavBar = () => (
  <AppBar
    title="CarLog"
    iconElementLeft={<DrawerView />}
  />
);

export default NavBar;