import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider,
} from '@mui/material';
import { Home, Dashboard, Settings } from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'Home', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <Dashboard /> : index === 1 ? <Home /> : <Settings />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
