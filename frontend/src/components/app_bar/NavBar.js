import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonBar from './ButtonBar';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My personal blog
          </Typography>
            <ButtonBar link="/login" text="Sign up"/>
            <ButtonBar link="/home" text="Home"/>
            <ButtonBar link="/articles" text="Articles"/>
            <ButtonBar link="/articles/new-article" text="Create an article"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
